<template>
  <div class="col-md-4 col-lg-3 item">
    <div class="box" style="background-image:url(https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg)">
      <div class="cover">
        <h3 class="name">{{ name }}</h3>
        <p class="title">{{subTitle}}</p>
        <div class="social">
          <a href="#"><box-icon name='facebook-circle' type='logo' animation='tada' ></box-icon></a>
          <a href="#"><box-icon name='twitter' type='logo' animation='tada' ></box-icon></a>
          <a href="#"><box-icon name='instagram' type='logo' animation='spin' color="#833AB4"></box-icon></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  props:{
    name:{
      type: String,
      required: true,
    },
    subTitle:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.team-grid {
  color:#313437;
  background-color:#fff;
}

.team-grid p {
  color:#7d8285;
}

.team-grid h2 {
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
}

@media (max-width:767px) {
  .team-grid h2 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.team-grid .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto;
}

.team-grid .intro p {
  margin-bottom:0;
}

.team-grid .people {
  padding:50px 0;
}

.team-grid .item {
  margin-bottom:30px;
}

.team-grid .item .box {
  text-align:center;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  height:280px;
  position:relative;
  overflow:hidden;
}

.team-grid .item .cover {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(31,148,255,0.75);
  transition:opacity 0.15s ease-in;
  opacity:0;
  padding-top:80px;
  color:#fff;
  text-shadow:1px 1px 1px rgba(0,0,0,0.15);
}

.team-grid .item:hover .cover {
  opacity:1;
}

.team-grid .item .name {
  font-weight:bold;
  margin-bottom:8px;
}

.team-grid .item .title {
  text-transform:uppercase;
  font-weight:bold;
  color:#bbd8fb;
  letter-spacing:2px;
  font-size:13px;
  margin-bottom:20px;
}

.team-grid .social {
  font-size:18px;
}

.team-grid .social a {
  color:inherit;
  margin:0 10px;
  display:inline-block;
  opacity:0.7;
}

.team-grid .social a:hover {
  opacity:1;
}


</style>