<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container">
        <div class="row">
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="nav">
            <div class="container-fluid">
              <router-link :to="{name: 'Home'}" class="me-5">
                <img src="https://media.istockphoto.com/vectors/abstract-business-arrow-up-logo-icon-vector-design-template-vector-id1140553971?k=20&m=1140553971&s=612x612&w=0&h=7-a1JjWAf8c5qKF46FRgdFg-3jva9qo80hqh0z_Y34A=" alt="" style="width: 39px; height: 39px; object-fit: cover">
              </router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{name: 'About'}" class="nav-link">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{name: 'Services'}" class="nav-link">Services</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{name: 'Contact'}" class="nav-link">Contact</router-link>
                  </li>
                </ul>
                <router-link :to="{name:'Cart'}">
                  <div class="d-flex align-items-center">
                    <box-icon name='cart-add' type='solid' animation='tada' size="md"></box-icon>
                    <span class="badge bg-info ">{{carts.length}}</span>
                  </div>
                </router-link>
                <router-link :to="{name: 'Login'}" class="nav-link">Sign In</router-link>
                <router-link :to="{name: 'Register'}" class="nav-link">Sign Up</router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import store from "@/store/index.js";

export default {
  name: "NavBar",
  setup() {
    const carts = computed(()=>{
      return store.state.carts
    })
    return {
      carts
    }
  },
  mounted() {
    store.commit('getStorageCart')
  }
}
</script>

<style scoped>

</style>