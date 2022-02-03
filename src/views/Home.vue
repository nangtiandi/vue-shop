<template>
  <Header></Header>
  <section class="my-3" style="background-color: #eee;">
      <div class="container py-5">
        <div class="row">
          <h3 class="text-decoration-underline mb-3">Latest Population</h3>
        </div>
        <div class="row">
            <ProductCard :product="product" v-for="(product,index) in products" :key="index"></ProductCard>
          </div>
      </div>
    </section>
  <Footer></Footer>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import {ref} from "vue";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Footer,
    Header,
    ProductCard
  },
  setup(){
    const products = ref([])
    function getProducts(){
      axios
      .get("https://fakestoreapi.com/products")
      .then(res=> {
        products.value = res.data;
      })
      .catch(error=>{
        console.log(error)
      })
    }
    return{
      products,
      getProducts,
    }
  },
  mounted() {
    this.getProducts();
  },
};
</script>
