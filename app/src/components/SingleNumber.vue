<template>
  <div class="number">
    <p>8</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.number {
  background: #e8e8e8;
  width: 45px;
  border-radius: 2px;
  p {
    font-family: "Martian Mono";
    font-size: 40px;
    padding: 0 8px;
    font-weight: 900;
    display: flex;
    margin: 0;
  }
}
</style>
