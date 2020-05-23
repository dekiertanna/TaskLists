<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view />
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import FooterNav from "./components/FooterNav";
export default {
  components: {
    TopBar,
    FooterNav
  },
  
};
</script>
<style lang="scss">
@import "./assets/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
body {
  padding-top: 75px;
  padding-bottom: 60px;
}
</style>
