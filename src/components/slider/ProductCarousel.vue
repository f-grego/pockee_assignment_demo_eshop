<template>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000">
    <Slide v-for="product in products" :key="product.id">
      <div class="product-cards-container">
        <div class="slider-image-basket-container">
          <div class="product-card">
            <div class="product-image-container">
              <img v-if="product.image_versions" :src="product.image_versions.thumb" alt="" />
              <img v-else src="https://media.licdn.com/dms/image/v2/C4D0BAQHl6LBbwNiCWQ/company-logo_200_200/company-logo_200_200/0/1663855385812/pockeesuite_logo?e=1734566400&v=beta&t=76lny9ATDX4bBS3pejgaK4NSYr6nxdXHnaZVXF7yOAc" alt="" />
            </div>
            <div class="product-text-container">
              <h1>{{ productName(product.name) }}</h1>
              <p>{{ product.suggested_price.toFixed(2) }}€</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
// @ is an alias to /src
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  props: ['products'],
  components: {
    Carousel, Slide, Pagination, Navigation
  },
  data () {
    return {
      breakpoints: {
        // 550px and up
        550: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        // 770px and up
        770: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        // 869 and up
        869: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
        // 870 and up
        870: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        // 1150 and up
        1150: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
        // 1700 and up
        1700: {
          itemsToShow: 4,
          snapAlign: 'start',
        },
      }
    }
  },
  methods: {
    productName(str) {
      return str.substring(0, 40)
    }
  }
}
</script>


<style lang="scss" scoped>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.product-cards-container {
  width: 100%;
  display: inline-flex;
  justify-content: center;

  .slider-image-basket-container {
    display: inline-flex;
    flex-wrap: nowrap;
    overflow: hidden;
    max-width: 800px;
  }
}

.product-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(71, 71, 71, 0.1);
  text-align: center;
  overflow: hidden;
  min-width: 220px;
  height: 329px;
  transition: 0.8s ease-in-out;
  justify-content: space-between;
  margin: 20px 15px 20px 15px;

  &:hover {
    transform: scale(1.1);
  }
}

.product-text-container {
  h1 {
    color: #333;
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 4px;
    height: 55px;
    overflow: hidden;
  }

  p {
    color: rgb(102, 102, 102);
    font-size: 18px;
  }
}

.product-image-container {
  padding: 10px;
  height: 198px;
  display: flex;
  justify-content: center;
  place-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 180px;
  }
}
</style>