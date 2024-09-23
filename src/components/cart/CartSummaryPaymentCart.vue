<template>
  <div class="cart-item-card">
    <h3>{{ text }}
      <span>{{ cart_total.toFixed(2) }} €</span>
    </h3>

    <button class="view-product-button">Pay by Credit Card</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: "Cart Total:"
      }
    },
    computed: {
      cart_total() {
        return this.$store.getters.cartTotal
      }
    }
  }
</script>

<style lang="scss">
.cart-item-card {
  width: auto;
  margin: 5% 10%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 20px;
  padding: 20px;
  text-align: left;

  display: flex;
  justify-content: space-around;

  button.view-product-button {
  padding: 0 10px;
  background-color: #ff9f43;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 20px;
  cursor: pointer;
  }

  span {
    margin-left: 0.5rem;
    color: #2183a2;
  }
}

@media (max-width: 425px) {
  .cart-item-card {
    margin: 5px;

    h3 {
      font-size: 14px;
    }
  }
  button.view-product-button {
    font-size: 1rem!important;
    margin: -2px;
  }
}
</style>