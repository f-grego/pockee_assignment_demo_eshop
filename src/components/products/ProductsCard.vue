<template>
  <div class="content">
    <div class="image-container">
      <img v-if="product.image_versions" :src="product.image_versions.original" alt="" />
      <img v-else src="https://media.licdn.com/dms/image/v2/C4D0BAQHl6LBbwNiCWQ/company-logo_200_200/company-logo_200_200/0/1663855385812/pockeesuite_logo?e=1734566400&v=beta&t=76lny9ATDX4bBS3pejgaK4NSYr6nxdXHnaZVXF7yOAc" alt="" />
    </div>
    <h3>{{ product.name }}</h3>
    <p> {{ description }}</p>
    <h6>{{ product.suggested_price }} €</h6>

    <button class="btn-color" @click="addToCart">
      {{ checkout }}
    </button>
  </div>
</template>


<script>
export default {
  props: ['product'],
  data () {
    return {
      checkout: 'Add to Cart'
    }
  },
  computed: {
    description() {
      return this.product.description.substring(0, 40)
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product)
    },
  }
}
</script>

<style lang="scss">
.content {
  width: 20%;
  margin: 15px;
  box-sizing: border-box;
  float: left;
  text-align: center;
  border-radius: 20px;
  padding-top: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: .4s;
  background: #f2f2f2;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translate(0px, -8px);
  }

  .image-container {
    background: white;
    border-radius: 20px;
    margin-top: -10px;

    padding: 15px;
    height: 150px;
    display: flex;
    justify-content: center;
    place-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  h3 {
    place-items: center;
    justify-items: center;
    text-align: center;
    font-size: 24px;
    margin: inherit;
    padding-top: 10px;
    height: 140px;
    overflow: hidden;
  }
  a {
    text-decoration: none;
  }
  p {
    text-align: center;
    color: #b2bec3;
    padding: 0 8px;
    height: 50px;
  }
  h6 {
    font-size: 26px;
    text-align: center;
    color: #222f3e;
    margin: 0;
  }
  button {
    text-align: center;
    font-size: 24px;
    color: white;
    width: 100%;
    padding: 15px;
    border: 0;
    outline: none;
    cursor: pointer;
    margin-top: 5px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .btn-color {
    background: #3b3e6e;
  }
}

@media (max-width: 1400px) {
  .content {
    width: 25%;
  }
}

@media (max-width: 1000px) {
  .content {
    width: 45%;

    h3 {
      height: 75px!important;
    }
  }
}

@media (max-width: 750px) {
  .content {
    width: 100%;

    h3 {
      height: 75px!important;
    }
  }
}

</style>