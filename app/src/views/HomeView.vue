<template>
  <div class="home">
    <h1>Pawmodoro</h1>
    <h2>{{ minutes.value }} : {{ seconds.value }}</h2>
    <button v-if="!time.play" @click="startTimer()">Play</button>
    <button v-if="time.play" @click="pauseTimer()">Pause</button>
  </div>
  <single-task />
</template>
<script lang="ts">
import SingleTask from "@/components/SingleTask.vue";
import { defineComponent, reactive, ref, watchEffect } from "vue";

export default defineComponent({
  components: { SingleTask },
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
