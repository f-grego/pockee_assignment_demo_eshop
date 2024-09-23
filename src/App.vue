<template>
  <nav>
    <div id="navbar">
      <div id="navbar-logo">
        <img src="@/assets/images/logo.png" alt="Grego's DemoShop">
      </div>
      <div id="navbar-links">
        <router-link :class="{active: $route.name === 'Home'}" class="router-links" to="/">Home</router-link>
        <router-link :class="{active: $route.name === 'Products'}" class="router-links" to="/Products">Products</router-link>

        <div id="navbar-tools">
          <a id="cart-link" href="#" @click="toggleModal">
            <icon-svg name="shopping-basket" />
            <span v-if="products"> {{ numOfProducts }} </span>
          </a>
        </div>
      </div>
    </div>

    <CartModal
        :modalActive="active.modal_active"
        :modalTitle="active.modal_title"
        v-on:close-modal-cart="closeProductDrawer()" />

  </nav>
  <router-view/>
</template>

<script>
import CartModal from '@/components/modals/CartModal.vue'
import IconSvg from "@/resources/svg/IconSvg";

  export default {
    components: {
      IconSvg,
      CartModal
    },
    data () {
      return {
        active: {
          modal_active: false,
          modal_title: "Shopping Bag"
        },
      }
    },
    created() {
      this.$store.dispatch('getProductItems');
    },
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    },
    computed: {
      products() {
        return this.$store.getters.cartProducts
      },
      numOfProducts() {
        let totalProducts = 0
        for (let product of this.products) {
          totalProducts = totalProducts + product.quantity
        }
        return totalProducts
      }
    },
    methods: {
      toggleModal() {
        this.active.modal_active = !this.active.modal_active
      },
      closeProductDrawer() {
        this.active.modal_active = false
      }
    }
  }
</script>

<style lang="scss">
nav {
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 99999;
  transition: 0.3s ease-in-out;
}
#navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
  width: 85%;
  margin: auto;
  padding: 12px 12px 5px 12px;
}
#navbar-logo {
  img {
    width: 290px;
    height: 70px;
  }
}
#navbar-links {
  display: flex;
  place-items: center;
  flex-direction: row;

  .router-links {
    margin-left: 60px;

    &:hover {
      color: #2aa79a;
    }

    &.active {
      background-color: #2c3e50;
      border-radius: 15px;
      color: white;
      padding: 10px 15px;
    }
  }

  a {
    text-decoration: none;
    color: rgb(64, 64, 64);
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    transition: 0.3s ease-in-out;
  }

  #navbar-tools {
    display: flex;
    flex-direction: row;
    margin-left: 60px;

    a {
      display: flex;
      place-items: center;
    }

    span {
      background-color: red;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      color: white;
      font-size: 13px;
      display: flex;
      justify-content: center;
      place-items: center;
      position: relative;
      bottom: 8px;
      right: 10px;
    }
  }
}

@media (max-width: 760px) {
  #navbar {
    width: 100%;
    height: 75px;
    justify-content: space-around;
  }

  #navbar-logo {
    img {
      width: 170px;
      height: 40px;
    }
  }

  #navbar-links {
    .router-links {
      margin-left: 20px;

      &.active {
        padding: 10px;
      }
    }
    #navbar-tools {
      margin: 0 20px 0 10px;
    }
  }
}

@media (max-width: 399px) {
  #navbar {
    width: 100%;
    height: 75px;
    justify-content: center;
  }

  #navbar-logo {
    img {
      width: 150px;
      height: 40px;
    }
  }

  #navbar-links {
    .router-links {
      margin-left: 5px;

      &.active {
        padding: 8px;
      }
    }
    a{
      font-size: 14px;
    }
    #navbar-tools {
      margin: 0 20px 0 5px;
    }
  }
  .modal {
    padding: 0!important;
  }
}
</style>
