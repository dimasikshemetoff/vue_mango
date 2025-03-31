<template>
    <div class="wrapper">
    <main class="main _container">
        <div class="slider">
            <ul id="slideWrap"> 
                <li><img src="../assets/icons/img/image.png" alt=""></li>

              </ul>
              <a id="prev" href="#">&#8810;</a>
            <a id="next" href="#">&#8811;</a>
        </div>

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
export default{
    name: "Main"
}
</script>

<style lang="scss">
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
    }
    p{
        color: black;
        text-align: justify;
        font-size: 20pt;
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

            p{
                width: 420px;
            }
        }
    }
}

.slider{
    position: relative;
    width: 100%;
    height: 420px;

    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    ul {
        position: relative;
        list-style: none;
        height: 100%;
        width: 10000%;
        padding: 0;
        margin: 0;
        transition: all 750ms ease;
        left: 0;
        li {
            position: relative;
            height: 100%;
          
            float: left;
          }
      }
      #prev, #next {
        width: 50px;
        line-height: 50px;
        text-align: center;
        color: white;
        text-decoration: none;
        position: absolute;
        top: 50%;
        border-radius: 50%;
        font-size: 2rem;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
        transform: translateY(-50%);
        transition: all 150ms ease;
      }
      #prev {
        left: 10px;
      }
      #next {
        right: 10px;
      }

      #prev:hover, #next:hover {
        background-color: rgba(0, 0, 0, 0.5);
        text-shadow: 0;
      }
}
</style>