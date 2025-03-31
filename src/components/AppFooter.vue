<template>
    <footer>
        <div class="footer _container">

            <div class="link">
                <h3>МЫ В</h3>
                <a href="#"><img src="../assets/icons/vk.png" alt="vk"></a>
                <a href="#"><img src="../assets/icons/insta.png" alt="inst"></a>
                <a href="#"><img src="../assets/icons/ok.png" alt="ok"></a>
            </div>

            <h3>
                ©тц манго {{ currentYear }}
            </h3>

            <div id='my_time'>{{ currentDate + " " + currentTime }}</div>
            <!-- <script>
                var time = document.getElementById('my_time');
            setInterval(function(){
              var d = new Date();
              time.innerHTML = d.getHours() + ':' + d.getMinutes() +   ' ' + d.getDate() + '.' + (d.getUTCMonth() + 1) + '.' + d.getFullYear() 
              
            }, 950);
            </script> -->
            
        </div>

    </footer>
</template>

<script>
    export default {
        name: 'footer',
        data() {
        
            return { currentDate: '', 
                currentTime: '',
                currentYear: '',
            };
        },
        mounted() {
            const months = {
                1: "Января",
                2: "Февраля",
                3: "Марта",
                4: "Апреля",
                5: "Мая",
                6: "Июня",
                7: "Июля",
                8: "Августа",
                9: "Сентября",
                10: "Октября",
                11: "Ноября",
                12: "Декабря"
            };

            setInterval(() => {

                this.currentDate = new Date().getDate() + ' ' + months[(new Date().getUTCMonth() + 1)];
                this.currentYear = new Date().getFullYear();
                this.currentTime = new Date().getHours() + ":" + ('0' + new Date().getMinutes()).slice(-2);
            },1000);
        },
    };
</script>

<style lang="scss">

footer{
    margin-top: 37px;
    background-color: #3a3a3a;
.footer{
    display: flex;
    align-items: center;
    color: white;
    font-size: 24pt;
    justify-content: space-between;
    #my_time{
        font-size: 16pt;
        @media (max-width: 390px) {
            display: none;
        }
    }
    height: 90px;
    .link{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 7px;
    }
    @media (max-width: 390px) {
        font-size: 8pt;
        text-wrap: nowrap;
        img{
            transform: scale(0.7);
        }
    }
}

}

</style>