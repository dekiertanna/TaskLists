<template>
  <nav class="cntr navbar fixed-bottom navbar-dark bg-secondary">
    <div class="crumbs">
      <div class="row no-gutters">
        <div class="col text-white">
          {{ appFooterTitle }} {{ appFooterYear }}
        </div>
        <div class="github-link text-right col text-white">
          {{ appFooterAuthor }} <br />
          <a class="text-white" :href="appFooterLink.link">{{
            appFooterLink.title
          }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      appFooterTitle: "Tasker",
      appFooterYear: "2020",
      appFooterAuthor: "Anna Dekiert",
      appFooterLink: {
        title: "Github",
        link: "https://github.com/dekiertanna"
      }
    };
  }
};
</script>

<style>
.cntr {
  display: flex;
}
.crumbs {
  width: 100%;
}
</style>
