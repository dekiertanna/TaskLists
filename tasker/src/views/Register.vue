<template>
  <form-template :formTitle="formTitle" :info="info" :btnText="btnText" :btnClass="btnClass"></form-template>
</template>

<script>
import FormTemplate from "../components/FormTemplate";

export default {
  components: {
    "form-template": FormTemplate,
  },
  data () {
    return {
      info: {
        text: "Already have an account? Log in",
        link: "/login"
      },
      btnText: "Register",
      btnClass: "btn btn-primary",
      formTitle:"Register"
    }
  },

};
</script>
<style>
.login{
  padding-top:10%
}
</style>