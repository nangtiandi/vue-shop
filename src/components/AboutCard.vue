<template>
  <div class="card col-md-3 col-12 ml-2">
    <div class="card-content">
      <div class="card-body"> <img class="img" :src="image" />
        <div class="card-title"> {{title}} </div>
        <div class="card-subtitle">
          <p> <small class="text-muted"> {{excerpt}} </small> </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props:{
    title:{
      type: String,
      required: true
    },
    excerpt:{
      type: String,
      required: true
    },
    image:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
head,

.img {
  width: 120px;
  height: auto;
  margin-bottom: 35px;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222)
}

.card-title {
  font-weight: 600
}

button.focus,
button:focus {
  outline: 0;
  box-shadow: none !important
}

.ft {
  margin-top: 25px
}

.chk {
  margin-bottom: 5px
}

.rck {
  margin-top: 20px;
  padding-bottom: 15px
}
</style>