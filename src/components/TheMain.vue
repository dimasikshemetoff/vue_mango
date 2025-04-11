<template>
    <div class="wrapper">
        <main class="main _container">

            <agile :prop="value">
                
                    <img class="slide" src="../assets/icons/img/image.png">
                
                
                    <img class="slide" src="../assets/icons/img/image.png">
                
                
                    <img class="slide" src="../assets/icons/img/image.png">
            </agile>

            <h1>ТОРГОВЫЙ ЦЕНТР "МАНГО"</h1>
            <p>Торговый центр «Манго» имеет выгодное географическое месторасположение, находясь на одной из самых оживленных улиц города, с хорошо развитой инфраструктурой.<br><br>
                Общая площадь ТЦ – 9 500 кв.м., торговая – 5 300 кв.м.
                <br><br>
                Отделы ТЦ «Манго» располагаются на 4-х этажах, включая цоколь. Для удобства покупателей и арендаторов установлены эскалатор, лифт и подъемник.
                <br><br>
                Возле торгового центра расположена парковка на 100 автомобилей с удобным заездом.
                <br><br>
                Покупатели со всего города и района приезжают в «Манго», чтобы воспользоваться всем, что может предложить этот торговый центр.</p>

            <h1>НОВОСТИ ТЦ</h1>

            <div class="news">
                <div class="news_item">
                    <h2>Новый магазин!</h2>
                    <p>В нашем торговом центре открылся магазин любимец. Всё для ваших домашних питомцев</p>
                    <img src="../assets/icons/img/news.png" alt="news">
                </div>
                <div class="news_item">
                    <h2>Новый магазин!</h2>
                    <p>В нашем торговом центре открылся магазин любимец. Всё для ваших домашних питомцев</p>
                    <img src="../assets/icons/img/news.png" alt="news">
                </div>
                <div class="news_item">
                    <h2>Новый магазин!</h2>
                    <p>В нашем торговом центре открылся магазин любимец. Всё для ваших домашних питомцев</p>
                    <img src="../assets/icons/img/news.png" alt="news">
                </div>
                <center><b>1</b> 2 3</center>
            </div>
        </main>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'


export default {
    name: "Main",
    components: {
        agile: VueAgile 
    },
}
</script>

<style lang="scss">

.agile__nav-button--prev, .agile__nav-button--next{
    width: 40%;
    margin: 0 20px;
    background-color: #2f8f38;
    border-radius: 0 0 10px 10px;
}

.agile__dots{
width: 10%;
color: orangered;
text-align: center;
}




.full{
        left: 0; 
        
}
.main{
    margin-top: 37px;
    h1{
        color: #2f8f38;
        font-size: 48pt;
        font-family: 'FE MussyPussy';
        padding: 37px 0px;
    
    @media (max-width: 950px) {
                font-size: 24pt;
            
            }}
    p{
        color: black;
        text-align: justify;
        font-size: 20pt;
        @media (max-width: 950px) {
                font-size: 16pt;
            
            }
    }
    .news{
        display: flex;
        color: black;
        flex-direction: column;
        gap: 37px;
        justify-content: space-between;
        h2{
            color: black;
            font-size: 32pt;
            @media (max-width: 950px) {
                font-size: 20pt;
            
            }
        }
        .news_item{
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #d9d9d9;
            padding: 25px 45px;
            width: 100%;
            border-radius: 20px;
            @media (max-width: 950px) {
                padding: 25px 10px;
                flex-direction: column;
                gap: 10px;
            
            }
            

            p{
                width: 420px;
                @media (max-width: 950px) {
                    width: 80%;
                    font-size: 10pt;
            
            }
            }
        }
    }
}

    .slider {
        position: relative;
    

        #slideWrap {
            list-style: none; /* Убираем маркеры списка */
            padding: 0;
        }

        #prev, #next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255, 255, 255, 0.7);
            border: none;
            cursor: pointer;
        }

        #prev {
            left: 10px; /* Положение кнопки "Назад" */
        }

        #next {
            right: 10px; /* Положение кнопки "Вперед" */
        }

      #prev:hover, #next:hover {
        background-color: rgba(0, 0, 0, 0.5);
        text-shadow: 0;
      }
      @media (max-width: 950px) {
                width: 100%;
            
            }
    @media (max-width: 400px) {
        width: 100%;
            
    }
}
</style>