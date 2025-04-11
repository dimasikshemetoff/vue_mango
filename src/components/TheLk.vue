<template>
    <main class="main _container">
        
        <div class="lkab" v-show="!loading">
            <h1>Личный кабинет</h1>
            <div class="username">
                <h2 v-if="authorize">{{ username }}</h2>
                <h2 v-else>Пользователь</h2>
                <button @click="editPassword">Править пароль</button>
                
                <div class="authorization__input" :style="{'opacity': visibleInput}" :class="{ 'error': passwordError }">
                    <input id="pass" placeholder="пароль" v-model="password" :type="passwordVisible ? 'text' : 'password'" required>
                    <img class="authorization__input__password" id="hide" src="../assets/icons/eye_hid.png" alt="hidden" @click="togglePasswordVisibility" v-if="!passwordVisible">
                    <img class="authorization__input__password" id="vision" src="../assets/icons/eye_vis.png" alt="visible" @click="togglePasswordVisibility" v-if="passwordVisible">
                    <br><button>Изменить</button>
                </div>
                
            </div>
            <button @click="logout" class="logout">Выход из аккаунта</button>
        </div>

        <app-loading :loading="loading"></app-loading> <!-- Передаем loading как пропс -->
    </main>
</template>


<script>
import axios from 'axios';
import AppLoading from './AppLoading.vue';

export default{
    data(){
        return {
            passwordVisible: false,
            authorize: false,
            auth: false,
            username: "Пользователь",
            visibleInput: '0',
            token: localStorage.getItem('token'),
            loading: true,
        }
    },
    components:{
        AppLoading
    },
    methods: {
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
        },
        editPassword(){
            if(this.visibleInput == '0'){
                this.visibleInput = '1'
            }
            else{
                this.visibleInput = '0'
            }
        },
        async logout(){
            await axios.get(process.env.VUE_APP_URL_API + '/api/logout', {
                headers: { Authorization: `Bearer ${this.token}`}
            }).then((response) => {


                if(response.status == 200) {
                    
                    this.authorize = false
                    this.$router.push('/')
                    localStorage.clear()

                }else if(response.status == 401) {
                    // Чел н авторизирован

                }
            }).catch((e) => {
                console.log(e)
            })
        },
        async isAuthorize(){
            this.loading = true

            await axios.get(process.env.VUE_APP_URL_API + '/api/checkToken', {
                headers: { Authorization: `Bearer ${this.token}`}
            }).then((response) => {
                // console.log(response)

                if(response.status == 200) {
                    // Чел авторизирован
                    this.authorize = true

                }else if(response.status == 401) {
                    // Чел н авторизирован

                }

                this.loading = false
            }).catch((e) => {
                console.log(e)
                this.loading = false
            })

            this.username = localStorage.getItem('username')
            return this.authorize
        }
    },
    mounted() {
        this.isAuthorize()
    }
    
}
</script>


<style lang="scss" scoped>



    .lkab{

        
        
        h1{
            font-size: 30pt;
            @media (max-width: 400px) {
                font-size: 20pt;
            }
        }
        .logout{
            padding: 20px;
            background-color: rgba(241, 50, 50, 0.829);
            color: white;
            display: block;
            margin: 10px auto;

            @media (max-width: 400px) {
                display: flex;
                justify-self: center;
                margin: 0 auto;
            }

        }
        .username{
            display: flex;
            width: 500px;
            justify-content: center;
            flex-direction: column;
            gap: 5px;
            flex-wrap: wrap;
            color: black;
            padding: 5px;

            .authorization__input{
                position: relative;
                width: 100%;
                transition: opacity 1s;
                z-index: 0;

                button{
                    margin-top: 5px;
                }
                input {
                    width: 50%;
                    
                    height: 37px;
                    box-sizing: border-box;
                    border-radius: 10px;
                    padding: 0 50px 0 0;
                    font-size: 12pt;
                    padding-left: 10px;
                    padding-right: 30px;
                    border: 1px solid #e9592c;
                    box-shadow: 13px 10px 22px -8px rgba(0, 0, 0, 0.3);

                }

                
                &__password {
                    width: 30px;
                    position: absolute;
                    top: 3.5px;
                    left: 40%;
                    cursor: pointer;
                }}

                .hidden{
                    display: none;
                }

            @media (max-width: 400px) {
                flex-direction: row;
                align-items: center;
                width: 100%;
                justify-content: space-between;
            }

            button{
                width: 50%;
                z-index: 1;
                padding: 10px;
                border: 1px solid #e9592c;
                background-color: #e9592c;
                color: white;
            }

        }
    }


</style>