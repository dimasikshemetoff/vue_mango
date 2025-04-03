<template>
    <main class="main _container">
        
        <div class="lkab">
            <h1>Личный кабинет</h1>
            <div class="username">
                <h2 v-if="authorize"></h2>
                <h2 v-else>Пользователь</h2>
                <button @click="editPassword">Править пароль</button>
                <div class="authorization__input" :class="{ 'error': passwordError }">
                    <input id="pass" placeholder="пароль" v-model="password" :type="passwordVisible ? 'text' : 'password'" required>
                    <img class="authorization__input__password" id="hide" src="../assets/icons/eye_hid.png" alt="hidden" @click="togglePasswordVisibility" v-if="!passwordVisible">
                    <img class="authorization__input__password" id="vision" src="../assets/icons/eye_vis.png" alt="visible" @click="togglePasswordVisibility" v-if="passwordVisible">
                </div>
            </div>
            
            
        </div>
    </main>
</template>


<style lang="scss" scoped>

    .lkab{
        h1{
            font-size: 30pt;
            @media (max-width: 400px) {
                font-size: 20pt;
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

                input {
                    width: 100%;
                    height: 30px;
                    box-sizing: border-box;
                    border-radius: 10px;
                    padding: 0 50px 0 0;
                    font-size: 14pt;
                    padding-left: 10px;
                    padding-right: 30px;
                    border: 1px solid #e9592c;
                    box-shadow: 13px 10px 22px -8px rgba(0, 0, 0, 0.3);

                }

                
                &__password {
                    width: 30px;
                    position: absolute;
                    top: 0px;
                    right: 165px;
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
                padding: 10px;
                border: 1px solid #e9592c;
                background-color: #e9592c;
                color: white;
            }

        }
    }


</style>