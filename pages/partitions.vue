<script setup lang="ts">
import type { Sheet } from "~/composables/use-content-fetch"

const runtimeConfig = useRuntimeConfig()

const { data } = await useContentFetch<Sheet[]>("content/items/sheets", {
  query: {
    fields: { title: true, file: true },
    filter: { file: { $ne: null } }, // skip if missing file
    sort: { title: 1 },
  },
})

const sheets = computed(() => data.value?.map(item => ({
  title: item.title,
  size: item.file.size,
  url: runtimeConfig.public.assetsBase + item.file.path,
})))
</script>

<template>
<ul v-if="sheets.length">
  <li v-for="sheet in sheets">
    <a :href="sheet.url">
      <Icon name="mdi:file-document"/>
      <span class="title">{{ sheet.title }}</span>
      <span class="size">{{ (sheet.size / 1000000).toFixed(1) }} Mo</span>
    </a>
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

a {
  font-size: 1.5em;
  color: white;
  text-align: left;
  background-color: var(--clr-card-dark);
  padding: 0.8em 1.2em;
  border-radius: 3em;
  max-width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 0.5em;

  transition: background-color 0.2s, transform 0.1s;
}

a:hover {
  text-decoration: none;
  background-color: var(--clr-card);
  transform: scale(1.02);
}

.title {
  font-family: "Magical Brush", sans-serif;
  font-size: 0.75em;
  flex-grow: 1;
}

a:hover > .title {
  text-decoration: underline;
}

.size {
  font-size: 1.4em;
  color: #fffa;
}

svg, .size {
  flex-shrink: 0;
}

@media (max-width: 485px) {
  .size {
    display: none;
  }
}
</style>
