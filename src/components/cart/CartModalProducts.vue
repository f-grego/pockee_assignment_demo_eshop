<template>
    <div class="item">
      <div class="group-container">
        <div class="buttons" >
          <button @click="removeAllProductsFromCart" class="remove-btn" type="button" name="button">
            <icon-svg name="recycle-bin" />
          </button>
        </div>

        <div class="product-image-container">
          <img v-if="product.image_versions" :src="product.image_versions.thumb" alt="" />
          <img v-else src="https://media.licdn.com/dms/image/v2/C4D0BAQHl6LBbwNiCWQ/company-logo_200_200/company-logo_200_200/0/1663855385812/pockeesuite_logo?e=1734566400&v=beta&t=76lny9ATDX4bBS3pejgaK4NSYr6nxdXHnaZVXF7yOAc" alt="" />
        </div>

        <div class="description">
          <span>{{ product.name }}</span>
        </div>
      </div>

      <div class="group-container">
        <div class="quantity">
          <button @click="removeFromCart" class="minus-btn" type="button" name="button">
            <icon-svg name="minus" />
          </button>
          <input type="text" name="name" :value="product.quantity">
          <button @click="addToCart" class="plus-btn" type="button" name="button">
            <icon-svg name="plus" />
          </button>
        </div>
        <div class="total-price">{{ item_cost.toFixed(2) }}€</div>
      </div>

    </div>
</template>

<script>
import IconSvg from "@/resources/svg/IconSvg";

export default {
  props: ['product'],
  components: {IconSvg},
  computed: {
    item_cost() {
      return this.product.suggested_price * this.product.quantity
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product)
    },
    removeFromCart() {
      this.$store.commit('removeProduct', this.product)
    },
    removeAllProductsFromCart() {
      this.$store.commit('removeHoleProduct', this.product)
    }
  }
}
</script>

<style lang="scss">

.title {
  border-bottom: 3px solid #E1E8EE;
  padding-bottom: 20px;
  color: #5E6977;
  font-size: 18px;
  font-weight: 400;
}

.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
  place-items: center;
  flex-direction: row;
  background: rgba(240, 243, 242, 0.8);
  border-radius: 20px;
  margin: 10px;

  &:hover {
    background: rgba(42, 167, 154, 0.6);
    border-radius: 20px;
    padding: -30px;

    .description span:last-child {
      color: white;
    }
    .total-price {
      color: white;
    }
  }

  .buttons {
    position: relative;

    button {
      border: none;
      background-color: white;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: scale(0.9);
      }
    }
  }
  .remove-btn {
    border-radius: 6px;
    padding-top: 4px
  }
  .delete-btn {
    display: inline-block;
    Cursor: pointer;
    width: 18px;
    height: 17px;
  }

  .is-active {
    animation-name: animate;
    animation-duration: .8s;
    animation-iteration-count: 1;
    animation-timing-function: steps(28);
    animation-fill-mode: forwards;
  }

  .product-image-container {
    background: white;
    border-radius: 20px;
    margin: 0 20px 0 20px;
    padding: 20px 0;
    width: 150px;
    height: 100px;
    display: flex;
    justify-content: center;
    place-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .description {
    margin: 0 30px;
    width: 130px;
  }
  .description span {
    display: block;
    font-size: 14px;
    color: #43484D;
    font-weight: 400;
  }
  .description span:last-child {
    font-weight: 400;
    color: #86939E;
  }

  .quantity {
    margin: 0 30px;
    display: flex;
    align-items: center;

    button[class*=btn] {
      width: 30px;
      height: 30px;
      background-color: #E1E8EE;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }
  }


  .quantity input {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 32px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }
  .minus-btn img {
    margin-bottom: 3px;
  }
  .plus-btn {
    margin-top: 1.5px;
  }

  button:focus,
  input:focus {
    outline:0;
  }

  .total-price {
    margin: 0 40px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 600;
  }
  .group-container {
    display: flex;
    flex-direction: row;
    place-items: center;
  }
}

@keyframes animate {
  0%   { background-position: left;  }
  50%  { background-position: right; }
  100% { background-position: right; }
}

@media (max-width: 900px) {
  .item {
    padding: 10px 10px!important;
    height: auto;
    flex-direction: column;
  }
  .group-container {
    justify-content: space-around!important;
    padding: 20px 10px!important;
    margin: 0!important;
    width: 100%;
  }
}

@media (max-width: 370px) {
  .group-container {
    flex-direction: column!important;
    padding: 5px 0;
  }
  .remove-btn {
    display: none;
  }
  .description {
    padding-top: 15px;
  }
  .total-price {
    padding-top: 15px;
  }
}
</style>