import axios from 'axios'

export default {
    namespaced: true,

    state() {
        return {
            stores: []
        }
    },
    getters: {
        state(state) {
            return state.stores;
        }
    },
    mutations: {
        addShop(state, payload){
            state.stores.push({
                'floor': payload.floor,
                'name': payload.name,
                'category': payload.category
            })
        },
        fillShops(state, payload) {
            state.stores = payload
        }
    },
    actions: {
        async getStores({ commit }) {
            try {
                const response = await axios.get(process.env.VUE_APP_URL_API + '/api/stores');
                commit('fillShops', response.data)
                // state.stores = response.data;
                // console.log(process.env.VUE_APP_URL_API)
            } catch (error) {
                console.error('Ошибка при получении магазинов:', error);
            }
        }
    },

}