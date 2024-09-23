import { createStore } from 'vuex'
import product from'./modules/product';

function updateLocaleStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return null
    },

    cartProducts: state => {
      return state.cart
    },

    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.suggested_price * b.quantity), 0)
    }
  },
  mutations: {
    addToCart (state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item) {
        item.quantity++
      } else {
        state.cart.push({...product, quantity: 1})
      }

      updateLocaleStorage(state.cart)
    },


    removeProduct (state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }

      updateLocaleStorage(state.cart)
    },


    removeHoleProduct (state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item) {
        item.quantity = 0;
        state.cart = state.cart.filter(i => i.id !== product.id)
      }

      updateLocaleStorage(state.cart)
    },


    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
    product
  }
})
