<template>
    <div>
        <button class="btn btn-primary" @click="!showModal">Cart ({{ numInCart }})</button>

        <div class="modal is-active"  @close="showModal = false">
            <div class="modal-header">
                <h5 class="modal-title">Shopping cart</h5>
                <button class="close" @click="$emit('close')>
                &times;
                </button>
            </div>
            <div class="modal-body">
                Shopping cart items will go here.
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" @click="$emit('close')>Keep shopping</button>
                <button class="btn btn-primary">Check out</button>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
        </div>
    </div>
</template>


<script>
export default {
  name: 'shoppingCart',
  data: {
    showModal: false
  },
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
  },
};

</script>

