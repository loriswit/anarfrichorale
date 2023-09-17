<script setup lang="ts">
import { useAudioStore } from "~/store/audio"

const props = defineProps({
  src: { type: String, required: true },
})

const store = useAudioStore()

let audio: HTMLAudioElement

let ready = ref(false)
let currentTime = ref(0)
let duration = ref(0)
let playing = ref(false)
let muted = ref(false)
let init = ref(true)

if (process.client) {
  audio = new Audio(props.src)
  audio.load()
  audio.addEventListener("canplaythrough", () => ready.value = true)
  audio.addEventListener("loadedmetadata", () => duration.value = audio.duration)
  audio.addEventListener("timeupdate", () => currentTime.value = audio.currentTime)
  audio.addEventListener("play", () => playing.value = true)
  audio.addEventListener("pause", () => playing.value = false)

  watchEffect(() => audio.muted = muted.value)

  store.register(audio)
}

function formatTime(time: number) {
  return Math.floor(time / 60) + ":" + Math.floor(time % 60).toString().padStart(2, "0")
}

function play() {
  store.stopAll(audio)
  audio.play()
  init.value = false
}

const shortTime = computed(() => init.value ? duration.value : currentTime.value)
</script>

<template>
<div class="player">
  <button v-if="!playing" :title="ready ? 'Lire' : 'Impossible de lire'" :disabled="!ready" @click="play()">
    <Icon name="mdi:play"/>
  </button>
  <button v-else title="Pause" @click="audio.pause()">
    <Icon name="mdi:pause"/>
  </button>

  <input type="range" v-model="currentTime"
         min="0" step="1" :max="duration"
         @input="audio.currentTime = currentTime"
         :disabled="!ready">
  <div class="time long">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</div>
  <div class="time short">{{ formatTime(shortTime) }}</div>

  <button v-if="!muted" class="mute-btn" title="Couper le son" @click="muted = true" :disabled="!ready">
    <Icon name="mdi:volume-high"/>
  </button>
  <button v-else class="mute-btn" title="Réactiver le son" @click="muted = false">
    <Icon name="mdi:volume-off"/>
  </button>
</div>
</template>

<style scoped>
.player {
  font-size: 1rem;
  font-family: system-ui;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

button {
  background: none;
  border-radius: 2rem;
  font-size: 1.5rem;
  color: inherit;
  border: none;
  padding: 0.3rem;
  height: 2rem;
  width: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

button:disabled {
  color: grey;
}

button:not(:disabled):hover {
  background-color: #fff4;
}

button:not(:disabled), input:not(:disabled) {
  cursor: pointer;
}

input {
  width: 100%;
}

.time {
  white-space: nowrap;
}

.short {
  display: none;
}

@media (max-width: 400px) {
  .long, .mute-btn {
    display: none;
  }

  .short {
    display: initial;
  }
}
</style>
