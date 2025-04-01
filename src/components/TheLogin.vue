<template>
    <body class="log_body">
        <div class="authorization">
            <router-link to="/"><img class="authorization__logo" src="../assets/icons/img/logo.png" alt="logo"></router-link>
            <form @submit.prevent="handleLogin">
                <div class="authorization__input">
                    <input type="text" placeholder="ЛОГИН" v-model="username" required>
                    <img class="authorization__user" src="../assets/icons/user.png" alt="username">
                </div>
                <div class="authorization__input">
                    <input id="pass" placeholder="пароль" v-model="password" :type="passwordVisible ? 'text' : 'password'" required>
                    <img class="authorization__user" src="../assets/icons/password.png" alt="password">
                    <img class="authorization__password" id="hide" src="../assets/icons/eye_hid.png" alt="hidden" @click="togglePasswordVisibility" v-if="!passwordVisible">
                    <img class="authorization__password" id="vision" src="../assets/icons/eye_vis.png" alt="visible" @click="togglePasswordVisibility" v-if="passwordVisible">
                </div>
                <button type="submit">ВХОД</button>
                <router-link to="/registration">Регистрация</router-link>
            </form>
        </div>
    </body>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            passwordVisible: false // Состояние для показа/скрытия пароля
        };
    },
    mounted() {
        document.title = this.$route.meta.title + " Манго";
    },
    watch: {
        $route(to) {
            document.title = to.meta.title + " Манго";
        }
    },
    methods: {
    togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
    },
    async handleLogin() {
        try {
            const response = await axios.post('http://localhost/auth', {
                username: this.username,
                password: this.password
            });

            // Предполагается, что API возвращает объект с информацией о пользователе
            const user = response.data;

            if (user) {
                // Сохранение роли и других данных пользователя в localStorage
                localStorage.setItem('userRole', user.role);
                localStorage.setItem('username', user.username);
                
                // Перенаправление на главную страницу после успешного входа
                this.$router.push('/');
            } else {
                alert('Недействительный логин или пароль');
            }
        } catch (error) {
            // Обработка ошибок
            if (error.response) {
                // Если сервер ответил с кодом ошибки
                console.error('Ошибка при входе:', error.response.data);
                alert('Ошибка: ' + error.response.data.message);
            } else if (error.request) {
                // Запрос был сделан, но ответа не получено
                console.error('Запрос был сделан, но ответа не получено:', error.request);
                alert('Ошибка: Нет ответа от сервера.');
            } else {
                // Произошла ошибка при настройке запроса
                console.error('Ошибка:', error.message);
                alert('Ошибка: ' + error.message);
            }
        }
    }
}};
</script>

<style lang="scss" scoped>
body {
    background-color: #3A3A3A;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    font-family: 'Zametka_Parletter';

}

.authorization {
    padding-top: 180px;
    width: 500px;
    height: 550px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    @media (max-width: 420px)  {
        padding-top: 80px;
        transform: scale(0.7);
    }


    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        max-width: 460px;

    }

    &__logo {
        width: 400px;
        height: 150px;

    }

    input {
        width: 100%;
        height: 60px;
        padding-left: 60px;
        padding-right: 60px;
        box-sizing: border-box;
        border-radius: 30px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        -ms-border-radius: 30px;
        -o-border-radius: 30px;
        font-size: 20pt;
        box-shadow: 13px 10px 22px -8px rgba(0, 0, 0, 0.3);

    }

    &__input {
        position: relative;
    }

    &__user {
        width: 30px;
        position: absolute;
        top: 15px;
        left: 15px;
    }
    &__password {
        width: 30px;
        position: absolute;
        top: 15px;
        right: 25px;
        cursor: pointer;
    }

    .hidden{
        display: none;
    }

    ::placeholder,
    button {
        font-family: 'Zametka_Parletter';
    }

    button {
        width: 300px;
        height: 40px;
        cursor: pointer;
        background-color: #e9592c;
        border-radius: 20px;
        color: white;
        box-shadow: 13px 10px 22px -8px rgba(0, 0, 0, 0.3);
        transition: transform 0.5s;

        &:hover {
            transform: scale(1.05);
        }
    }

    a {
        margin-top: -20px;
        color: #2F8F38;
    }
}
</style>