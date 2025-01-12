<template>
  <div>
    <h3>{{ task.title }}</h3>
    <p>{{ task.completed_sessions }}/ {{ task.sessions }}</p>
    <p>done: {{ task.done }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import Task from "@/schemes/task.scheme";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const task: Task = {
      title: "First title",
      completed_sessions: 0,
      sessions: 3,
      done: false,
    };
    return {
      task,
    };
  },
});
</script>

<style scoped></style>
