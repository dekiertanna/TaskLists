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
        text: "Don't have an account? Register",
        link: "/register"
      },
      btnText: "Log in",
      btnClass: "btn btn-primary",
      formTitle:"Log in"
    }
  },

};
</script>
<style>
.login{
  padding-top:10%
}
</style>