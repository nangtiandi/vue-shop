<template>
  <div class="col-md-4 mb-3">
    <div class="card p-3">
      <div class="d-flex flex-row mb-2">
        <img :src="image" width="70">
        <div class="d-flex flex-column ml-2">
          <span>{{ title }}</span>
          <span class="text-black-50">{{ subTitle }}</span>
          <span class="ratings">
            <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
          </span>
        </div>
      </div>
      <h6>{{excerpt}}</h6>
      <div class="d-flex justify-content-between install mt-3">
        <span>{{install}}</span>
        <a href="https://github.com/nangtiandi" class="text-primary" target="_blank">More Details&nbsp;<i class="fa fa-angle-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesCard",
  props:{
    title:{
      type: String,
      required: true
    },
    subTitle:{
      type: String,
      required: true
    },
    excerpt:{
      type: String,
      required: true
    },
    install:{
      type: String,
      required: true,
    },
    image:{
      type: String,
      required: true,
    }
  }

}
</script>

<style scoped>
body {
  background: #eee
}

.ratings i {
  color: green
}

.install span {
  font-size: 12px
}

.col-md-4 {
  margin-top: 27px
}
</style>