<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">

          <div class="modal-close" @click="$emit('close-modal-cart')">
            <icon-svg name="close" />
          </div>

          <div class="shopping-cart">
            <div class="title">
              {{ modalTitle }}
            </div>

            <CartModalProducts
                v-for="product in products"
                :key="product.id"
                :product="product" />
          </div>

          <CartSummaryPaymentCart />

        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import IconSvg from "@/resources/svg/IconSvg";
import CartModalProducts from "@/components/cart/CartModalProducts";
import CartSummaryPaymentCart from "@/components/cart/CartSummaryPaymentCart";

export default {
  props: ['modalActive', "modalTitle"],
  components: {CartModalProducts, CartSummaryPaymentCart, IconSvg},
  computed: {
    products() {
      return this.$store.getters.cartProducts
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  max-width:calc(100%);
  max-height:calc(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);

  .modal-inner {
    overflow:auto;
    max-height:calc(100vh - 125px);
    max-width: 800px;
    position: relative;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 0 64px 0 10px;
    border-radius: 8px;

    .modal-close {
      position: absolute;
      top: 35px;
      right: 35px;
      font-size: 20px;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.shopping-cart {
  width: 750px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  .title {
    font-weight: 600;
  }
}

@media (max-width: 900px) {
  .shopping-cart {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
}

.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
</style>