<template>
  <div class="home">
    <h1>Pawmodoro</h1>
    <h2>{{ minutes.value }} : {{ seconds.value }}</h2>
    <button v-if="!time.play" @click="startTimer()">Play</button>
    <button v-if="time.play" @click="stopTimer()">Pause</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    let time = ref({ v: 70, play: false });

    const minutes = reactive({ value: Math.floor(time.value.v / 60) });
    const seconds = reactive({ value: time.value.v - minutes.value * 60 });
    const timerManager = () => {
      const timer = setInterval(() => {
        if (time.value.v > 0 && time.value.play) {
          time.value.v -= 1;
        }
      }, 1000);
      return timer;
    };
    const timing = timerManager();

    const startTimer = () => {
      time.value.play = true;
    };

    const stopTimer = () => {
      time.value.play = false;
      clearInterval(timing);
    };

    watchEffect(() => {
      minutes.value = Math.floor(time.value.v / 60);
      seconds.value = time.value.v - minutes.value * 60;

      console.log(time.value.play);
    });

    return {
      time,
      minutes,
      seconds,
      startTimer,
      stopTimer,
    };
  },
});
</script>
