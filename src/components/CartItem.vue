<template>
  <div class="product my-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mx-auto d-block image" :src="product.image">
      </div>
      <div class="col-md-8">
        <div class="info">
          <div class="row align-items-center">
            <div class="col-md-5 product-name">
              <div class="product-name">
                <a href="#">{{ product.title }}</a>
              </div>
            </div>
            <div class="col-md-2 quantity">
              <label>Quantity:</label>
              <input v-model="product.quantity" type="number" @input="inputQuantity()" min="1" class="form-control quantity-input">
            </div>
            <div class="col-md-3 price">
              <span>$ {{subTotal}}</span>
            </div>
            <div class="col-md-2">
              <button @click="removeItem(product)" class="btn text-danger"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="divider"></div>
</template>

<script>
import {computed} from "vue";
import store from "@/store/index.js";
export default {
  name: "CartItem",
  props:{
    product:{
      type: Object,
      required: true
    }
  },
  setup(props){
    const subTotal = computed(()=>{
      return (props.product.price * props.product.quantity).toFixed(2);
    });
    function removeItem(product){
      store.commit('removeFromCart',product);
      inputQuantity()
    }
    function inputQuantity(){
      store.commit('calSubtotal')
      store.commit('allTotal')
      store.commit('storeCart')
    }
    return{
      subTotal,
      removeItem,
      inputQuantity,
    }
  }
}
</script>

<style scoped>
.image{
  width: 60px;
  height: 80px;
  object-fit: contain;
}
.divider{
  margin: auto;
  width: 90%;
  height: 1px;
  background: dimgrey;
}
</style>