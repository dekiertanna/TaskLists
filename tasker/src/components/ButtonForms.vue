<template>
  <button v-bind="btnText" :class="btnClass">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  props: {
    btnText: String,
    btnClass: String
  },
};
</script>
