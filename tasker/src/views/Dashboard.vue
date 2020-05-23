<template>
  <div class="dashboard">
    <button-group></button-group>
    <div class="row card-row border rounded">
      <tasklist-card></tasklist-card>
      <tasklist-card></tasklist-card>
    </div>
  </div>
</template>

<script>
import ButtonGroup from "../components/ButtonGroup";
import TasklistCard from "../components/TasklistCard";

export default {
  components: {
    "button-group": ButtonGroup,
    "tasklist-card": TasklistCard,
  },
};
</script>

<style scoped>
.dashboard {
  padding-left: 25px;
  padding-top: 15px;
}
.card-row {
  padding: 20px;
  border: 2px;
}
</style>
