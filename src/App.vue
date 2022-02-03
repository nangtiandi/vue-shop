<template>
  <div>
    <NavBar></NavBar>
    <router-view />

  </div>
</template>

<style lang="scss">
#nav a.active{
  color: #0dcaf0;
}
</style>
<script>
import NavBar from "./components/NavBar";
export default {
  components: {NavBar}
}
</script>