<template>
  <div class="login h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-8 col-md-6 col-lg-2">
        <h3 v-bind="formTitle">{{ formTitle }}</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button-forms :btnClass="btnClass" :btnText="btnText"></button-forms>
          <info-crumb :info="info"></info-crumb>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCrumb from "../components/InfoCrumb";
import ButtonForms from "../components/ButtonForms";

export default {
  components: {
    "info-crumb": InfoCrumb,
    "button-forms": ButtonForms,
  },
  props: {
    info: {
      text: String,
      link: String,
    },
    btnText: String,
    btnClass: String,
    formTitle: String,
  },
};
</script>

<style>
.login {
  padding-top: 10%;
}
</style>
