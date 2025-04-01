<template>
    <main class="main _container">
        <h1>
            Магазины ТЦ "Манго"
        </h1>

        <div v-for="floor in uniqueFloors" :key="floor">
            <h2 class="hall">{{ floor }} этаж</h2>
            <div class="hall_list">
                <div v-for="store in stores.filter(s => s.floor === floor)" :key="store.id" class="hall_list_item">
                    <img src="../assets/icons/img/shop.png" alt="shop">
                    <dl>
                        <dd>{{ store.info }}</dd>
                        <dt>{{ store.name }}</dt>
                        
                    </dl>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            stores: [],
        };
    },
    async created() {
        await this.getStores();
    },
    methods: {
        async getStores() {
            try {
                const response = await axios.get('http://localhost/stores');
                this.stores = response.data;
            } catch (error) {
                console.error('Ошибка при получении магазинов:', error);
            }
        }
    },
    computed: {
        uniqueFloors() {
            // Получаем уникальные этажи, в которых находятся магазины
            return [...new Set(this.stores.map(store => store.floor))].sort((a, b) => a - b);
        }
    }
}
</script>

<style lang="scss">
.hall_list{
    background-color: #d9d9d9;
    padding: 45px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    
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
    }
}
.hall{
    padding-top: 30px;
        color: #E9592C;
        font-family: 'FE MussyPussy';
        font-size: 32pt;
        padding-bottom: 10px;
    }
</style>