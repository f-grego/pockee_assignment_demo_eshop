<template>
  <div class="main-container">
    <div class="product-container">

      <grid-loader style="margin-top: 200px" :loading="!productItems.length" :color="color" :size="size"></grid-loader>

      <ProductsCard
          v-for="productItem in productItems"
          :key="productItem.id"
          :product="productItem" />
    </div>

  </div>
</template>

<script>
import ProductsCard from "@/components/products/ProductsCard.vue";
import GridLoader from 'vue-spinner/src/GridLoader.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'ProductsView',
  components: {
    ProductsCard, GridLoader
  },
  data () {
    return {
      color: '#2c3e50',
      size: '45px',
    }
  },
  computed: {
    ...mapGetters([
      'productItems'
    ])
  },
}
</script>

<style lang="scss">
  .main-container {
    padding-top: 50px;
  }
  .product-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
  }
</style>