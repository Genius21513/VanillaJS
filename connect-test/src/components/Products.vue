<template>
  <div>
      <h1>Products</h1>
      <div class="products">
        <div v-for="product in products" :key="product.id">
          <img :src="product.image" />
          <h3>{{product.title}}</h3>
          <div>{{product.price}}</div>
          <button v-on:click="addToCart(product)">Add to cart</button>
        </div>
      </div>
  </div>
</template>

<script>

import { reactive, computed, toRefs } from "vue";

const products = [
	{id: 1,title: 'Macbook Pro', price: 2500.00, qty: 1, image: 'http://lorempixel.com/150/150/'},  
	{id: 2,title: 'Asus ROG Gaming',price: 1000.00, qty: 1,image: 'http://lorempixel.com/150/150/'},  
	{id: 3,title: 'Amazon Kindle',price: 150.00,qty: 1,image: 'http://lorempixel.com/150/150/'},  
	{id: 4,title: 'Another Product',price: 10, qty: 1, image: 'http://lorempixel.com/150/150/'},  
];

export default {
  name: 'Products',
  data: () => {
    return {
      page: "products",
      products: products
    }
    
  },
  methods: {
		// Add Items to cart
    addToCart(product) {
      this.$emit('addToCart', product);
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