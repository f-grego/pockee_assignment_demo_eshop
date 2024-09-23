import axios from 'axios';

const state = {
    productItems: []
}

const mutations = {
    UPDATE_PRODUCT_ITEMS (state, payload) {
        state.productItems = payload;
    }
}

const actions = {
    getProductItems ({ commit }) {
        axios.get(`${process.env.VUE_APP_ROOT_API}`)
            .then((response) => {
                commit('UPDATE_PRODUCT_ITEMS', response.data.data)
            })
            .catch(error => console.log(error));
    }
}

const getters = {
    productItems: state => state.productItems,
    productInOffer: state => {
        return state.productItems.filter(productItems => productItems.qty_max <= 25)
    },
    productItemById: (state) => (id) => {
        return state.productItems.find(productItem => productItem.id === id)
    }
}


const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;