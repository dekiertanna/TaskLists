<template>
  <nav class="navbar fixed-top navbar-dark bg-secondary">
    <h1 @click="redirectToDashboard()" class="tasker-title">TASKER</h1>
    <div class="user-fragment">
      Hello {{ email }}
      <font-awesome-icon icon="user" />
    </div>
  </nav>
</template>

<style>
.tasker-title {
  font-size: 28pt;
  font-weight: bold;
  color: white;
}

.user-fragment {
  color: white;
  font-size: 16pt;
}

.fa-user {
  color: white;
  font-size: 20pt;
}
.tasker-title {
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      email: "joe@tasker.com",
    };
  },
  methods: {
    redirectToDashboard() {
      this.$router.push("dashboard")
    },
  },
};
</script>
