<template>
    <body class="log_body">
        <div class="authorization">
            <router-link to="/"><img class="authorization__logo" src="../assets/icons/img/logo.png" alt="logo"></router-link>
            <form @submit.prevent="handleRegistration">
                <div class="authorization__input">
                    <input type="text" placeholder="email" name="email" v-model="email" required>
                    <img class="authorization__user" src="../assets/icons/email.png" alt="email">
                </div>
                <div class="authorization__input">
                    <input id="pass" placeholder="пароль" name="password" v-model="password" :type="passwordVisible ? 'text' : 'password'" required>
                    <img class="authorization__user" src="../assets/icons/password.png" alt="password">
                    <img class="authorization__password" id="hide" src="../assets/icons/eye_hid.png" alt="hidden" @click="togglePasswordVisibility" v-if="!passwordVisible">
                    <img class="authorization__password" id="vision" src="../assets/icons/eye_vis.png" alt="visible" @click="togglePasswordVisibility" v-if="passwordVisible">
                </div>
                <button type="submit">Регистрация</button>
                <router-link to="/login">Вход</router-link>
            </form>
        </div>
    </body>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            passwordVisible: false, // Для состояния видимости пароля
            usernameError: false,
            passwordError: false
        };
    },
    
    methods: {
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible; // Переключение видимости пароля
        },
        validateInputs() {
            this.usernameError = !this.validateEmail(this.email);
            this.passwordError = this.password.length < 6; // Минимальная длина пароля
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для email
            return re.test(email);
        },
        async handleRegistration() {

            this.validateInputs(); // Запускаем валидацию

            if (this.usernameError || this.passwordError) {
                return; // Прерываем выполнение, если есть ошибки
            }

    try {
        // Используем переменную окружения для получения URL API
        const response = await axios.post(process.env.VUE_APP_URL_API + '/api/register', {
            email: this.email,
            password: this.password
        });

        // Проверяем успешность регистрации от сервера
        if (response.success) {
            
            this.$router.push('/login'); // Перенаправление на страницу входа
        } else {
            alert('Ошибка: ' + response.success); // Сообщение об ошибках
        }
    } catch (error) {
        // Обработка ошибок
        console.error('Ошибка при регистрации:', error);
        alert('Ошибка: ' + (error.response && error.response.data.message ? error.response.data.message : 'Неизвестная ошибка')); // Обработка сетевых ошибок
    }
}

    }
};
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
}</style>