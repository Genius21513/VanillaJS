;
<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <button v-on:click="fireEvent">FireEvt</button>
        <HelloWorld msg="Welcome to Your Vue.js App" />

    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import EcomEvents from "../../connect/src/events/ecommerce/add-ecommerce-event-listener";

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    methods:{
        fireEvent:()=>{
            let evt = new EcomEvents();
            evt.registerProductListImpression({test:'hello'})
            console.log('testFire');
        }
    }
}
</script>
