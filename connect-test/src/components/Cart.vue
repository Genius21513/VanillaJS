<template>
  <div>
    <h1>Your Cart</h1>
    <div class="products">
      <div v-for="(product, index) in cart" :key="index">
        <h3>{{product.title}}</h3>
        <img :src="product.image" />
        <div>{{product.price}}</div>
        <button v-on:click="removeItemFromCart(product)">Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cart',
  props: [
    "cart"
  ],
  methods: {
		// Add Items to cart
    removeItemFromCart(product) {
      this.$emit('removeItemFromCart', product);
    }
  }
}
</script>

<style scoped>
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
  }

  header {
    height: 40px;
    background-color: #eee;
    box-shadow: 2px 2px 5px #999;
    text-align: right;
    font-size: 30px;
    padding-top: 20px;
  }
</style>