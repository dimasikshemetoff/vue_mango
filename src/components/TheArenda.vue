<template>
    <main class="main _container">
        
        <div class="arenda">
            <h1>Хочешь открыть свой магазин или нужна реклама?</h1>
            <p>ТЦ «МАНГО» - отличное решение! Всё объясним и расскажем!</p>
            <div class="tel">
                <img src="../assets/icons/tele.png" alt="tel">
                <div class="info_tel">
                    <a href="tel:8(83147)9-59-32">8 (83147) 9-59-32</a>
                    <a href="tel:8(910)121-15-30">8 (910) 121-15-30</a>
                </div>
            </div>
            <div class="ema">
                <img src="../assets/icons/email.png" alt="tel">
                <div class="info_tel">
                    <a href="mailto:mangomarketing@mail.ru">mangomarketing@mail.ru</a>
                    <a href="mailto:mangoarz@mail.ru">mangoarz@mail.ru</a>
                </div>
            </div>
            <h1>Есть замечания?</h1>
            <p>По всем общим вопросам, замечаниям и предложениям</p>
            <div class="tel">
                <img src="../assets/icons/tele.png" alt="tel">
                <div class="info_tel">
                    <a href="tel:8(910)385-29-67">8 (910) 385-29-67</a>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
    .arenda{
    @media (max-width: 400x) {
        display: flex;
        flex-direction: column;
    }
    h1{
        color: #e9592c;
    }
    p{
        font-size: 20pt;
        @media (max-width: 400px) {
            font-size: 12pt;
        }

    }
    .tel{
        padding-top: 37px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        
        .info_tel{
            display: flex;
            flex-direction: column;
            
            font-size: 32pt;
            @media (max-width: 400px) {
                font-size: 12pt;
            }
            a{
                color: #2F8F38;
                text-decoration: underline;
            }
        }
    }
    .ema{
        padding-top: 37px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        .info_tel{
            display: flex;
            flex-direction: column;
            
            font-size: 32pt;
            @media (max-width: 400px) {
                font-size: 12pt;
            }
            a{
                color: #2F8F38;
                text-decoration: underline;
            }
        }
    }

}
</style>