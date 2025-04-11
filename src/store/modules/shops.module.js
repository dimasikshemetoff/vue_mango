import axios from 'axios'

export default {
    namespaced: true,

    state() {
        return {
            stores: [] // Хранит список магазинов
            // stores: [
            //     id_store: 1,
            //     floor_number: 1,
            //     title: 'Пятерочка',
            //     category: 'Продукты'
            // ]
        }
    },
    getters: {
        allStores(state) {
            return state.stores; // Возвращает все магазины
        },
        getStoreById: (state) => (id) => {
            return state.stores.find(store => store.id_store === id); // Возвращает магазин по id
        }
    },
    mutations: {
        addShop(state, payload) {
            const newStore = {
                id_store: payload.id_store, // Простой способ генерировать уникальный ID (лучше использовать что-то более надежное)
                floor_number: Number(payload.floor_number),
                title: payload.title,
                category: payload.category
            };
            state.stores.push(newStore); // Добавляем новый магазин

            console.log(state.stores)
        },
        fillShops(state, payload) {
            state.stores = payload; // Заполняем список магазинов
        },
        removeShop(state, id) {
            state.stores = state.stores.filter(store => store.id_store !== id); // Удаляем магазин по id
        }
    },
    actions: {
        async getStores({ commit }) {
            try {
                const response = await axios.get(process.env.VUE_APP_URL_API + '/api/stores');
                commit('fillShops', response.data); // Заполняем магазин после получения данных с сервера
            } catch (error) {
                console.error('Ошибка при получении магазинов:', error);
            }
        },
        async addStore({ commit }, newStore) {
            // const token = 'Authorization: Bearer '+ localStorage.getItem('token')
            // console.log(token)
            try {
                const response = await axios.post(process.env.VUE_APP_URL_API + '/api/stores', newStore, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
                }); // Отправка нового магазина на сервер
                console.log(response.data)
                commit('addShop', response.data); // Добавляем магазин в состояние после успешного добавления на сервер
            } catch (error) {
                console.error('Ошибка при добавлении магазина:', error);
            }
        },
        async deleteStore({ commit }, id) {
            try {
                await axios.delete(`${process.env.VUE_APP_URL_API}/api/stores/${id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
                }); // Удаление
                commit('removeShop', id); // Удаляем магазин из состояния
            } catch (error) {
                console.error('Ошибка при удалении магазина:', error);
            }
        }
    },
}
