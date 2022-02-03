<template>
  <!--Section: Contact v.2-->
  <div class="container mb-4">
    <div class="row mt-5">
      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    </div>
    <div class="row">
      <div class="col-md-9 mb-md-0 mb-5">
        <form method="POST">
          <div class="row">
            <div class="col-md-6">
              <div class="md-form mb-0">
                <label for="name" class="">Your name</label>
                <input type="text" id="name" name="name" class="form-control">
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form mb-0">
                <label for="email" class="">Your email</label>
                <input type="text" id="email" name="email" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="md-form mb-0">
                <label for="subject" class="">Subject</label>
                <input type="text" id="subject" name="subject" class="form-control">
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12">
              <div class="md-form">
                <label for="message">Your message</label>
                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
              </div>
            </div>
          </div>
          <div class="text-center text-md-left">
          <a class="btn btn-primary" onclick="alert('Hello! Are You ready?')">Send Message</a>
        </div>
        </form>
        <div class="status"></div>
      </div>
      <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
          <li><i class="fas fa-map-marker-alt fa-2x"></i>
            <p>Thida Street,Kyauk Myaung,Yangon,Myanmar</p>
          </li>

          <li><i class="fas fa-phone mt-4 fa-2x"></i>
            <p>+95 9#########</p>
          </li>

          <li><i class="fas fa-envelope mt-4 fa-2x"></i>
            <p>contact@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "Contact",
  components: {Footer}
}
</script>

<style scoped>

</style>