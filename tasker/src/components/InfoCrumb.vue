<template>
  <div v-bind="info" class="bg-light info-crumb">
      {{ info.text }}
    <router-link :to="info.link">here</router-link>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      text: String,
      link: String,
    },
  },
};
</script>
<style>
.info-crumb {
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
