<template>
  <div class="main-container">
    <div class="header__wrapper">

      <div class="cols__container">
        <div class="left__col">
          <UserAccountCard />
        </div>

        <div class="right__col">
          <div class="products-section" id="product-section-all">
            <div class="product-section-top-container">
              <div class="section-category-container">

                <div class="section-category-type">
                  <span class="blue-line"></span>
                  <span v-if="products.length" class="section-category-text">Current Basket</span>
                  <span v-else class="section-category-text">Hot Products</span>
                </div>
                <h1 v-if="products.length">Products in Shopping Cart</h1>
                <h1 v-else>Explore Best Sellers</h1>
              </div>
            </div>

            <div class="loading-container" v-show="!productInOffer.length">
              <fade-loader :loading="!productInOffer.length" :color="color" :size="size"></fade-loader>
            </div>

            <div v-show="productInOffer.length">
              <ProductCarousel v-if="products.length > 2" :products="products" />
              <ProductCarousel v-else :products="productInOffer" />
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ProductCarousel from "@/components/slider/ProductCarousel";
import UserAccountCard from "@/components/user/UserAccountCard";
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import { mapGetters } from "vuex";

export default {
  name: 'HomeView',
  components: {
    UserAccountCard, ProductCarousel, FadeLoader
  },
  data () {
    return {
      color: '#2c3e50',
      size: '65px',
    }
  },
  computed: {
    ...mapGetters([
      'productInOffer'
    ]),
    products() {
      return this.$store.getters.cartProducts
    },
    productInOffer () {
      return this.$store.getters.productInOffer
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  padding-top: 90px;
}

.products-section {
  text-align: center;
  margin-top: 50px;
  padding-bottom: 40px;

  display: flex;
  flex-direction: column;
  width: 55vw;
}

.product-section-top-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
}

.section-category-container {
  display: block;

  h1 {
    color: rgb(64, 64, 64);
    font-size: 40px;
    font-weight: bold;
    text-align: left;
  }
}

.section-category-type {
  display: flex;
  place-items: center;

  .section-category-text {
    color: rgb(64, 64, 64);
    font-size: 25px;
    font-weight: 500;
  }

  .blue-line {
    height: 40px;
    width: 15px;
    margin-right: 15px;
    background-color: #3b71dc;
    border-radius: 20px;
  }
}

.loading-container {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}

@media (min-width: 950px) {
  .header__wrapper .cols__container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;
  }
  .header__wrapper .cols__container .left__col {
    padding: 25px 0;
  }
}
@media (min-width: 1300px) {
  .header__wrapper .cols__container {
    max-width: 1500px;
  }
}
@media (min-width: 1800px) {
  .header__wrapper .cols__container {
    max-width: 1800px;
  }
}
@media (max-width: 950px) {
  .left__col {
    padding: 35px 30px;
    text-align: center;
    margin: 0 auto;
  }
  .products-section {
    margin-left: 4rem;
    width: 80vw;
  }
}
</style>

