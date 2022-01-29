
<template>
  <div id="app" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>My online store</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart products="products.length"/>
      </div>
    </div>

    <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>

  </div>
</template>


<script>
import Item from '@/components/Item.vue';
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'products',
  data: {
    showModal: false
  },
  computed: {
    forSale() { return this.$store.getters.forSale; },
    inCart() { return this.$store.getters.inCart; },
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
  },
  components: {
    Item,
    ShoppingCart,
  },
};
</script>
