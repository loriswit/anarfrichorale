<script setup lang="ts">
import { Recording } from "~/composables/use-content-fetch"
import { useAudioStore } from "~/store/audio"

const runtimeConfig = useRuntimeConfig()

const { data } = await useContentFetch<Recording[]>("content/items/recordings", {
  query: {
    fields: { title: true, file: true },
    sort: { _created: -1 },
  },
})

const recordings = computed(() => data.value?.map(item => ({
  id: item._id,
  title: item.title,
  filename: item.file.title,
  url: runtimeConfig.public.assetsBase + item.file.path,
})))

const store = useAudioStore()
onBeforeRouteLeave(() => store.stopAll())
</script>

<template>
<ul v-if="recordings.length">
  <li v-for="recording in recordings">
    <div class="recording">
      <div class="title">
        {{ recording.title }}
        <a :href="`/download/${recording.id}`" :download="recording.filename" title="Télécharger">
          <Icon name="mdi:download"/>
        </a>
      </div>
      <AudioPlayer :src="recording.url"></AudioPlayer>
    </div>
  </li>
</ul>
<template v-else>
  <h2>Aucune partition</h2>
</template>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.recording {
  font-size: 1.5em;
  color: white;
  text-align: left;
  background-color: var(--clr-card-dark);
  padding: 0.8em;
  border-radius: 1em;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5em;
  font-family: "Magical Brush", sans-serif;
  font-size: 0.75em;
  flex-grow: 1;
  padding: 0 0.2em;
}

a {
  color: white;
  font-size: 1.3em;
}

a:hover {
  color: #acfc;
}
</style>
