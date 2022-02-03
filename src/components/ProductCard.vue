<template>
  <div class="col-md-6 col-lg-4 mb-3 mb-md-3">
  <div class="card">
    <div class="d-flex justify-content-between p-3">
      <p class="lead mb-0">Today's Combo Offer</p>
      <div
          class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
          style="width: 35px; height: 35px;"
      >
        <p class="text-white mb-0 small">x3</p>
      </div>
    </div>
    <img :src="product.image" class="card-img-top img-fluid p-5" alt="Gaming Laptop" style="max-height: 320px;"/>
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <p class="small"><a href="#!" class="text-muted">{{ product.title }}</a></p>
        <p class="small text-danger"><s>$ {{product.price }}</s></p>
      </div>

      <div class="d-flex justify-content-between mb-3">
        <h5 class="mb-0">Toshiba B77</h5>
        <h5 class="text-dark mb-0">$ {{product.price - 4}}</h5>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-2">
        <p class="text-muted mb-0">Available: <span class="fw-bold">5</span></p>
        <div class="ms-auto">
          <button  @click="addToCart(product)" class="btn" :class="isAdded?'text-danger':'text-info'">
            <i v-if="!isAdded" class="fas fa-cart-plus fs-3"></i>
            <i v-else class="fas fa-window-close fs-3"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {ref,computed} from "vue";
import store from "@/store/index.js";

export default {
  name: "ProductCard",
  props:{
    product:{
      type: Object,
      require: true
    }
  },
  setup(props){
    const isAdded = ref(false);
    const carts = computed(()=>{
      return store.state.carts
    })
    function addToCart(product){
      isAdded.value = !isAdded.value
      if (isAdded.value){
        store.commit('addToCart',product);
        store.commit('storeCart');
      }else {
        store.commit('removeFromCart',product);
        store.commit('storeCart');
      }
    }
    function checkAdded(){
      let product = props.product.id;
      let check = carts.value.some((el)=>{
        return el.id == product;
      })
      if (check) {
        isAdded.value = true;
      }
    }
    return {
      carts,
      addToCart,
      isAdded,
      checkAdded
    }
  },
  mounted() {
    this.checkAdded();
  }
}
</script>

<style scoped>

</style>