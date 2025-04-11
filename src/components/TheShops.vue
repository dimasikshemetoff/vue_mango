<template>
    <main class="main _container" v-show="!loading" v-if="stores.length !== 0">
        
        <h1>
            Магазины ТЦ "Манго"
        </h1>

        <div v-for="floor_number in uniqueFloors" :key="floor_number">
            <h2 class="hall">{{ floor_number }} этаж</h2>
            <div class="hall_list">
                <div v-for="store in stores.filter(s => s.floor_number === floor_number)" :key="store.id" class="hall_list_item">
                    <img src="../assets/icons/img/shop.png" width="40%" alt="shop">
                    
                    <dl>
                        <dd>{{ store.category }} </dd>
                        <dt>{{ store.title }}</dt>
                        <a class="exit" v-if="UserRole === 'admin'" @click="this.$store.dispatch('shops/deleteStore', store.id_store)">УДАЛИТЬ</a>
                    </dl>
                </div>
            </div>
        </div>
        <p id="added" v-if="UserRole === 'admin'" @click="showModal">Добавить</p>
        <popup-add v-show="isModalVisible" @close="closeModal" />
        
        
    </main>
    <app-loading :loading="loading"></app-loading>
    <main class="main _container" v-show="!loading" v-if="stores.length == 0">
        
        <h1>
            УПС(( 
        </h1>
        <h2 class="hall">В торговом центре закончились магазины!</h2>
        <p id="added" v-if="UserRole === 'admin'" @click="showModal">Добавить</p>
        <popup-add v-show="isModalVisible" @close="closeModal" />
    </main>
</template>

<script>
import AppLoading from './AppLoading.vue'; // Импорт компонента загрузки
import PopupAdd from './PopupAdd.vue';

export default {
    components: {
        PopupAdd,
        AppLoading // Добавляем компонент загрузки в секцию компонентов
    },
    data() {
        return {
            UserRole: localStorage.getItem('userRole'),
            isModalVisible: false,
            loading: true, // Переменная для отслеживания состояния загрузки
        };
    },
    async created() {
        this.loading = true; // Установлка состояния загрузки
        await this.$store.dispatch('shops/getStores');
        this.loading = false; // Скрытие загрузки после получения данных
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },
    computed: {
        uniqueFloors() {
            return [...new Set(this.stores.map(store => store.floor_number))].sort((a, b) => a - b);
        },
        stores() {
            return this.$store.state.shops.stores;
        }
    }
}
</script>


<style lang="scss">
.exit{
    cursor: pointer;
    color: white;
    padding: 0 5px;
    background-color: red;
}
.hall_list{
    background-color: #d9d9d9;
    padding: 45px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: stretch;
    
    &_item{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 5px;
        width: 180px;
        dt{
            color: #2F8F38;
        }
        dd{
            color: #E9592C;
            font-weight: 600;
        }
        @media (max-width: 950px) {
                
                flex-direction: row;
                text-align: start;
                gap: 10px;
            
            }
        
    }
    @media (max-width: 950px) {
                padding: 25px 25px;
                flex-direction: column;
                gap: 30px;
            
            }

}
.hall{
    padding-top: 30px;
        color: #E9592C;
        font-family: 'FE MussyPussy';
        font-size: 32pt;
        padding-bottom: 10px;
    
    @media (max-width: 950px) {
                font-size: 20pt;
            
            }}
#added{
    display: block;
    padding: 10px;
    margin: 10px auto;
    background-color: #E9592C;
    width: fit-content;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    

}
#added:hover{
        background-color: #d64519;
    }
</style>