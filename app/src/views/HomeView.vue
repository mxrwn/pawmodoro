<template>
  <div class="home">
    <h1>paw.</h1>
    <h2>{{ minutes.value }}:{{ seconds.value }}</h2>
    <div class="numbers">
      <single-number />
      <single-number />
      <p>:</p>
      <single-number />
      <single-number />
    </div>
    <button v-if="!time.play" @click="startTimer()">Play</button>
    <button v-if="time.play" @click="pauseTimer()">Pause</button>
  </div>
</template>
<script lang="ts">
// import SingleTask from "@/components/SingleTask.vue";
import SingleNumber from "@/components/SingleNumber.vue";
import { defineComponent, reactive, ref, watchEffect } from "vue";

export default defineComponent({
  components: {
    SingleNumber,
  },
  name: "HomeView",
  setup() {
    let time = ref({ v: 5, play: false });

    const minutes = reactive({ value: Math.floor(time.value.v / 60) });
    const seconds = reactive({ value: time.value.v - minutes.value * 60 });
    const timerManager = () => {
      time.value.play = true;
      const timer = setInterval(() => {
        if (time.value.v > 0 && time.value.play) {
          time.value.v -= 1;
        }
        if (time.value.v === 0) {
          pauseTimer();
          time.value.v = 5;
        }
      }, 1000);
      return timer;
    };
    let timing: any = null;

    const startTimer = () => {
      timing = timerManager();
    };

    const pauseTimer = () => {
      time.value.play = false;
      clearInterval(timing);
    };

    watchEffect(() => {
      minutes.value = Math.floor(time.value.v / 60);
      seconds.value = time.value.v - minutes.value * 60;
    });

    return {
      time,
      minutes,
      seconds,
      startTimer,
      pauseTimer,
    };
  },
});
</script>

<style lang="scss" scoped>
.numbers {
  display: flex;
  width: 209px;
  justify-content: space-between;
}
</style>
