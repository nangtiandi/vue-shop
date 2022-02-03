<template>
  <footer class="footer-10">
    <div class="container">
      <div class="row mb-5 pb-3 no-gutters">
      </div>
      <div class="row">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">About</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="d-block">Out story</a></li>
                <li><a href="#" class="d-block">Awards</a></li>
                <li><a href="#" class="d-block">Our Team</a></li>
                <li><a href="#" class="d-block">Career</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">Company</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="d-block">Our services</a></li>
                <li><a href="#" class="d-block">Clients</a></li>
                <li><a href="#" class="d-block">Contact</a></li>
                <li><a href="#" class="d-block">Press</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">Resources</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="d-block">Blog</a></li>
                <li><a href="#" class="d-block">Newsletter</a></li>
                <li><a href="#" class="d-block">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5 mb-md-0 mb-4">
          <h2 class="footer-heading">Subscribe</h2>
          <form action="#" class="subscribe-form">
            <div class="form-group d-flex">
              <input type="text" class="form-control rounded-left" placeholder="Enter email address">
              <button type="submit" class="form-control submit rounded-right">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-5 pt-4 border-top">
        <div class="col-md-6 col-lg-8 mb-md-0 mb-4">
          <p class="copyright mb-0">
            Copyright &copy;All rights reserved. |
            <a href="https://cmprogrammer.com" target="_blank">cmprogrammer.com</a>
          </p>
        </div>
        <div class="col-md-6 col-lg-4 text-md-right">
          <ul class="ftco-footer-social p-0">
            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span><box-icon name='twitter' type='logo' animation='fade-right' size="md" color="#1DA1F2"></box-icon></span></a></li>
            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span><box-icon name='facebook-circle' type='logo' animation='tada' size="md" color="#4267B2"></box-icon></span></a></li>
            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span><box-icon name='instagram' type='logo' animation='spin' size="md" color="#833AB4"></box-icon></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.ftco-footer-social li {
  list-style: none;
  margin: 0 10px 0 0;
  display: inline-block; }
.ftco-footer-social li a {
  height: 40px;
  line-height: 40px;
  width: 40px;
  display: block;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  position: relative; }
.ftco-footer-social li a span {
  line-height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); }
.ftco-footer-social li a:hover {
  color: #fff; }

.form-control {
  height: 52px;
  background: #fff;
  color: #000;
  font-size: 18px;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.1); }
.form-control:focus, .form-control:active {
  outline: none !important;
  -webkit-box-shadow: none;
  box-shadow: none; }

textarea.form-control {
  height: inherit !important; }

.ftco-section {
  padding: 12em 0; }
.ftco-section h2 {
  margin-bottom: 0; }

footer {
  padding: 7em 0; }

.footer-10 {
  background: #7d8989;
  padding: 0 0 4em 0; }
.footer-10 .border-top, .footer-10 .border-bottom {
  border-color: rgba(255, 255, 255, 0.1) !important; }
.footer-10 .footer-heading {
  font-size: 18px;
  color: #fff;
  margin-bottom: 30px; }
.footer-10 p {
  color: rgba(255, 255, 255, 0.3); }
.footer-10 a {
  color: #1089ff; }
.footer-10 .con.con-1 {
  background: #1e1e1e; }
.footer-10 .con.con-2 {
  background: #1c1c1c; }
.footer-10 .con.con-3 {
  background: #252525; }
.footer-10 .list-unstyled li a {
  color: rgba(255, 255, 255, 0.2); }
.footer-10 .list-unstyled li a:hover {
  color: #fff; }
.footer-10 .con-info .icon {
  width: 50px;
  height: 50px;
  background: #1089ff;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px; }
.footer-10 .con-info .icon span {
  color: #fff;
  font-size: 24px; }
.footer-10 .con-info span {
  color: rgba(255, 255, 255, 0.8); }
.footer-10 .subscribe-form .form-group {
  position: relative;
  margin-bottom: 0;
  border-radius: 0; }
.footer-10 .subscribe-form .form-group input {
  background: white !important;
  border: none !important;
  outline: none !important;
  color: rgba(0, 0, 0, 0.3) !important;
  font-size: 16px;
  border-radius: 0; }
.footer-10 .subscribe-form .form-group input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgba(0, 0, 0, 0.3) !important; }
.footer-10 .subscribe-form .form-group input::-moz-placeholder {
  /* Firefox 19+ */
  color: rgba(0, 0, 0, 0.3) !important; }
.footer-10 .subscribe-form .form-group input:-ms-input-placeholder {
  /* IE 10+ */
  color: rgba(0, 0, 0, 0.3) !important; }
.footer-10 .subscribe-form .form-group input:-moz-placeholder {
  /* Firefox 18- */
  color: rgba(0, 0, 0, 0.3) !important; }
.footer-10 .subscribe-form .form-group input:focus {
  outline: none !important;
  -webkit-box-shadow: none;
  box-shadow: none; }
.footer-10 .subscribe-form .form-group .submit {
  color: #fff !important;
  display: block;
  width: 130px;
  height: 52px;
  font-size: 16px;
  background: #1089ff !important;
  border: none;
  border-radius: 0; }
.footer-10 .subscribe-form .form-group .submit:hover, .footer-10 .subscribe-form .form-group .submit:focus {
  text-decoration: none !important;
  outline: none !important; }
.footer-10 .ftco-footer-social li a {
  background: rgba(255, 255, 255, 0.1);
  color: #fff; }

</style>