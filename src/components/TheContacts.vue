<template>
    <main class="main _container">
        <div class="content">
           <div class="contact">
            <h1>КОНТАКТЫ</h1>
            <div class="telephone">
                <h3>Контактный телефон:</h3>
                <a href="#" type="telephone">8 (83147) 9-59-32</a>
            </div>
            <div class="email">
                <h3>Эл. почта:</h3>
                <a href="mail(mangomarketing@mail.ru)">mangomarketing@mail.ru</a>
                <a href="mail(mangoarz@mail.ru)">mangoarz@mail.ru</a>
            </div>
            <div class="address">
                <h3>Адрес ТЦ манго:</h3>
                <a href="#">г. Арзамас, ул. Мира, д. 13</a>
            </div>
            <div class="time">
                <h3>Время работы:</h3>
                <a>09:00 - 20:00</a>
            </div>
        </div> 
        <div>
            <iframe class="iframe" src="https://yandex.ru/map-widget/v1/?um=constructor%3A01b18e11d7963272e5b8e8c3a4706214cbb1696721f662f2cd18679a38ff4045&amp;source=constructor" width="700" height="370" frameborder="0"></iframe>
            <div class="link">
                <h3>МЫ В</h3>
                <a href="#"><img src="../assets/icons/vk.png" alt="vk"></a>
                <a href="#"><img src="../assets/icons/insta.png" alt="inst"></a>
                <a href="#"><img src="../assets/icons/ok.png" alt="ok"></a>
            </div>

        </div>
        
        
    </div>
        
        
    </main>
</template>

<style lang="scss">
.contact{
    display: flex;
    flex-direction: column;
    gap: 37px;
    @media (max-width: 390px) {
        text-align: center;
    }
    h1{
        color: #E9592C;
    }
    h3{
        color: black;
        font-size: 24pt;
        font-family: 'FE MussyPussy';
        @media (max-width: 390px) {
            font-size: 12pt;
        }
    }
    .email{
        display: flex;
        flex-direction: column;
        
        
    }
     a{  
        padding-top: 10px;
        display: block;
            font-size: 24pt;
            text-decoration: underline;
            color: #2F8F38;
            @media (max-width: 390px) {
                font-size: 12pt;
            }
        }

    .time{
        a{
            color: #E9592C;
            text-decoration: none;
        }
    }
    
}
.iframe{
    margin-top: 150px;
    border: 2px solid black;
    @media (max-width: 390px) {
        width: 100%;
        margin-top: 37px;
    }
}
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    .link{
        display: flex;
        padding-top: 10px;
        justify-content: flex-end;
        align-items: center;
        color: #E9592C;
        gap: 7px;
    }
    @media (max-width: 390px) {
        flex-direction: column;
        .link{
            justify-content: center;
        }
    }
}</style>