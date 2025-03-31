<template>
    <div class="wrapper">
    <header>
        <div class="_container header">
            <router-link to="/"><img src="../assets/icons/img/logo.png" alt="logo"></router-link>
        <div class="search">
            <input type="search" placeholder="ПОИСК ПО САЙТУ">
            <img src="../assets/icons/search.png" alt="search">
        </div>
        <nav>

            <router-link to="/shops" :id="isActive('/shops') ? 'active' : null">Магазины</router-link>
            <router-link to="/contacts" :id="isActive('/contacts') ? 'active' : null">Контакты</router-link>
            <router-link to="/arenda" :id="isActive('/arenda') ? 'active' : null">Арендаторам</router-link>
            <router-link to="/login" v-if="authorize">{{ UserName }}</router-link>
            <router-link to="/login" v-else>Вход</router-link>

        </nav>
        <div class="burger">
            <img id="top" src="../assets/icons/burger top.png" alt="top">
            <img id="middle" src="../assets/icons/burger middle.png" alt="middle">
            <img id="bottom" src="../assets/icons/burger bottom.png" alt="bottom">
        </div>
        
        </div>
       
    </header>
    </div>
</template>


<script>
export default{
    name: "Header",
    methods: {
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

        @media (max-width: 390px) {
            height: 60px;
        }
        
    }


    img{
        width: 210px;
        height: auto;
        @media (max-width: 390px) {
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
            @media (max-width: 1300px) {
                width: 300px;
                
            }
            @media (max-width: 950px) {
                width: 200px;
                padding-left: 25px;
                height: 35px;
            
            }
            @media (max-width: 390px) {
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
            @media (max-width: 390px) {
                width: 13px;
                height: 13px;
                top: 6px;
                left: 6px;
            }
            
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

    

    .navig{
        position: relative;
        margin-left: 35px;
        margin-right: 60px;
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
    }

}
</style>