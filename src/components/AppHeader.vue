<template>
    <div class="wrapper">
    <header>
        <div class="_container header">
            <router-link to="/"><img src="../assets/icons/img/logo.png" alt="logo"></router-link>
        <div class="search">
            <input type="text" placeholder="ПОИСК ПО САЙТУ">
            <img src="../assets/icons/search.png" alt="search">
        </div>
        <nav>

            <router-link to="/shops" :id="isActive('/shops') ? 'active' : null">Магазины</router-link>
            <router-link to="/contacts" :id="isActive('/contacts') ? 'active' : null">Контакты</router-link>
            <router-link to="/arenda" :id="isActive('/arenda') ? 'active' : null">Арендаторам</router-link>
            <router-link to="/lk" v-if="authorize">{{ UserName }}</router-link>
            <router-link to="/login" v-else>Вход</router-link>

        </nav>
        <div class="burger" @click="openBurger" :class="{'open': burgerOpen}">
            <img id="top" src="../assets/icons/burger top.png" alt="top">
            <img id="middle" src="../assets/icons/burger middle.png" alt="middle">
            <img id="bottom" src="../assets/icons/burger bottom.png" alt="bottom">
        </div>
        
        </div>
       
    </header>
    <div class="burger_menu" :class="{'full': burgerOpen}">
        <img src="../assets/icons/exit.png" alt="exit" @click="openBurger">
        
        <div class="navig">
            <div class="search">
                <input type="text" placeholder="ПОИСК ПО САЙТУ">
                <img src="../assets/icons/search.png" alt="search">
            </div>
            <router-link to="/shops" :id="isActive('/shops') ? 'active' : null" @click="openBurger">Магазины</router-link>
            <router-link to="/contacts" :id="isActive('/contacts') ? 'active' : null" @click="openBurger">Контакты</router-link>
            <router-link to="/arenda" :id="isActive('/arenda') ? 'active' : null" @click="openBurger">Арендаторам</router-link>
            <router-link to="/lk" v-if="authorize" @click="openBurger">{{ UserName }}</router-link>
            <router-link to="/login" v-else @click="openBurger">Вход</router-link>

        </div>
        
    </div>
    </div>
</template>


<script>



export default{
    name: "Header",
    data(){
        return {
             UserName: "User",
            authorize: false,
            burgerOpen: false
        }
       
    },
    mounted(){
        this.isAuthorize()
    },
    methods: {

        openBurger(){
            
            this.burgerOpen = !this.burgerOpen
            
            if(this.burgerOpen)
                document.getElementsByTagName( 'html' )[0].classList.add('lock')
            else
                document.getElementsByTagName( 'html' )[0].classList.remove('lock')
        },
        isAuthorize(){
            if(localStorage.getItem('username')){
                this.authorize = true
                this.UserName = localStorage.getItem('username').split("@")[0]
            }
        },
        

        isActive(route) {
            return this.$route.path === route;
        }
    }
}
</script>

<style lang="scss" scoped>

header{
    width: 100%;
    background-color: #3a3a3a;
    position: sticky;
    top: 0;
    z-index: 2;
    
   
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 130px; 
        @media (max-width: 700px) {
            height: 80px;
        }
        @media (max-width: 400px) {
            height: 60px;
        }
        
    }


    img{
        width: 210px;
        height: auto;
        @media (max-width: 400px) {
            width: 100px;
            height: auto;
        }
        @media (max-width: 950px) {
            width: 130px;
        
        }
    }

    .search{
        position: relative;


        input{
            width: 620px;
            height: 50px;
            font-size: 20pt;
            box-sizing: border-box;
            padding-left: 50px;
            border: 2px solid #e9592c;
            border-radius: 20px;
            @media (max-width: 1500px) {
                width: 400px;
                
            }
            @media (max-width: 950px) {
                width: 200px;
                padding-left: 25px;
                height: 35px;
            
            }
            @media (max-width: 400px) {
                width: 120px;
                padding-left: 20px;
                height: 25px;
            
            }

        }
        img{
            position: absolute;
            top: 10px;
            left: 10px;
            width: 30px;
            height: 30px;
            @media (max-width: 950px) {
                width: 20px;
                left: 7px;
                top: 8px;
                height: 20px;
            
            }
            @media (max-width: 400px) {
                width: 13px;
                height: 13px;
                top: 6px;
                left: 6px;
            }
            
        }
        @media (max-width: 400px) {
            display: none;
        }
    }
    .burger{
        display: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 4px;
        cursor: pointer;

       
        img{
            width: 30px;
            height: auto;
        }
        @media (max-width: 710px) {
            display: flex;
        }
        
        #top {
            transition: transform 0.3s;
        }    

        #middle {
            transition: transform 0.3s;
            transition-delay: 0.1s;
        }

        #bottom {
            transition: transform 0.3s;
            transition-delay: 0.2s;
        }

        


    }
    .open {
            #top, #middle, #bottom {
                transform: translateX(50px);
            }
            
        }
    
    
    nav{
        display: flex;
        gap: 70px;
        @media (max-width: 1300px) {
            gap: 40px;
            
        }
        @media (max-width: 950px) {
            gap: 20px;
        
        }
        @media (max-width: 710px) {
            display: none;
        
        }
        @media (max-width: 390px) {
            display: none;
        }
        
        a{
            color: #2f8f38;
        }
        #active{
            color: #e9592c;
            text-decoration: underline;
        }
    }
    }
    .burger_menu{
    position: absolute;
    top: 0px;
    background-color: #3a3a3a;
    width: 100%;
    height: 100vh;
    left: -100vw;
    transition: left 1s;
    z-index: 2;

    .search{
        position: relative;
        margin: 0;


        input{
            width: 100%;
            height: 30px;
            font-size: 14pt;
            box-sizing: border-box;
            padding-left: 50px;
            border: 2px solid #e9592c;
            border-radius: 5px;
            
            :focus-visible{
                border: none;
            }
            

        }
        img{
            position: absolute;
            left: 5px;
            top: 2.5px;
            width: 25px;
            height: 25px;
            
            
        }
        
    }

    .navig{
        position: relative;
        margin-left: 35px;
        margin-right: 35px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 80px;

        a{
            color: #e9592c;
            text-decoration: underline;
            width: 100px;
        }
         
    }
    img{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        z-index: 2;
    }
    

}
.full {
    left: 0;
}
</style>