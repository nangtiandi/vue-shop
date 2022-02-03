<template>
  <div class='container-fluid mx-auto pt-2 mt-5 mb-5 col-12' style="text-align: center">
    <div class="hd">Why People Believe in Us</div>
    <p><small class="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
    <div class="row" style="justify-content: center">
      <AboutCard title="We're Free" excerpt="We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your" image="https://www.pngall.com/wp-content/uploads/2016/07/Dollar-Free-Download-PNG.png"></AboutCard>
      <AboutCard title="We're Unbiased" excerpt="We don't accept ads from anyone. We use actual data to match you who the best person for each job" image="https://i.imgur.com/xUWJuHB.png"></AboutCard>
      <AboutCard title="We Guide you" excerpt=" or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome." image="data:image/png;base64,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"></AboutCard>
    </div>
    <div class="ft mt-3">
      <div class="btn btn-primary">Read All Testimonials</div>
    </div>
  </div>
  <div class="container">
    <div class="main-timeline">
      <!-- start experience section-->
      <Timeline months="2 Years" year="2018" title="Visual Art &amp; Design" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie."></Timeline>
      <Timeline months="2 Years" year="2017" title="Designer" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie."></Timeline>
      <Timeline months="3 Years" year="2020" title="Developer" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie."></Timeline>
      <Timeline months="1 Years" year="2021" title="Manager" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie."></Timeline>
      <Timeline months="1 Years" year="2022" title="Editor" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie."></Timeline>
      <!-- end experience section-->
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import AboutCard from "../components/AboutCard";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";
export default {
  name: "About",
  components: {Footer, Timeline, AboutCard},
}
</script>

<style scoped>
/*======== about
==========*/
body {
  background-color: lightcyan
}

.card {
  cursor: pointer
}

.hd {
  font-size: 25px;
  font-weight: 550
}

.card.hover,
.card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, .2)
}

/*end about*/
.main-timeline {
  position: relative
}

.main-timeline:before {
  content: "";
  display: block;
  width: 2px;
  height: 100%;
  background: #c6c6c6;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0
}

.main-timeline .timeline {
  margin-bottom: 40px;
  position: relative
}

.main-timeline .timeline:after {
  content: "";
  display: block;
  clear: both
}

@media only screen and (max-width: 991px) {
  .main-timeline .date-content {
    margin-top: 35px
  }
  .main-timeline .date-content:before {
    width: 22.5%
  }
  .main-timeline .timeline-content {
    padding: 10px 0 10px 30px
  }
  .main-timeline .title {
    font-size: 17px
  }
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    padding: 10px 30px 10px 0
  }
}

@media only screen and (max-width: 767px) {
  .main-timeline:before {
    margin: 0;
    left: 7px
  }
  .main-timeline .timeline {
    margin-bottom: 20px
  }
  .main-timeline .timeline:last-child {
    margin-bottom: 0
  }
  .main-timeline .icon {
    margin: auto 0
  }
  .main-timeline .date-content {
    width: 95%;
    float: right;
    margin-top: 0
  }
  .main-timeline .date-content:before {
    display: none
  }
  .main-timeline .date-outer {
    width: 110px;
    height: 110px
  }
  .main-timeline .date-outer:before,
  .main-timeline .date-outer:after {
    width: 110px;
    height: 110px
  }
  .main-timeline .date {
    top: 30%
  }
  .main-timeline .year {
    font-size: 24px
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 95%;
    text-align: center;
    padding: 10px 0
  }
  .main-timeline .title {
    margin-bottom: 10px
  }
}
</style>