<template>
  <div class="btn-group" role="group" aria-label="Add a tasklist">
    <button-forms
      :btnText="btnTextAdd"
      :btnClass="btnTextPrimary"
    ></button-forms>
    <button-forms
      :btnText="btnTextDeleteAll"
      :btnClass="btnTextDanger"
    ></button-forms>
  </div>
</template>

<script>
import ButtonForms from "../components/ButtonForms";

export default {
  components: {
    "button-forms": ButtonForms,
  },
  data() {
    return {
      btnTextPrimary: "btn btn-primary mr-1",
      btnTextDanger: "btn btn-danger ml-1",
      btnTextAdd: "Add a task list",
      btnTextDeleteAll: "Delete all task lists",
    };
  },
};
</script>
