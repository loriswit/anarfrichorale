<script setup lang="ts">
import { Rehearsal } from "@/composables/use-content-fetch"

const now = new Date().toLocaleString("sv")
const { data } = await useContentFetch<Rehearsal[]>("content/items/rehearsals", {
  query: {
    fields: { date: true, location: true },
    filter: { date: { $gte: now } },
    sort: { date: 1 },
    limit: 4,
  },
})

const rehearsals = computed(() => data.value?.map(item => {
  const date = new Date(item.date)
  return {
    ts: date.getTime(),
    date: date.toLocaleDateString("fr-CH", { dateStyle: "long" }),
    weekday: date.toLocaleDateString("fr-CH", { weekday: "long" }),
    time: date.toLocaleTimeString("fr-CH", { hour: "numeric", minute: "2-digit" }),
    location: item.location,
  }
}))
</script>

<template>
<h2>Prochaines répétitions</h2>
<div class="rehearsals">
  <div v-for="rehearsal in rehearsals" class="rehearsal">
    <span v-if="rehearsal.location === 'Red'" class="red">La Red</span>
    <span v-else class="coutel">La Coutellerie</span>
    <span>{{ rehearsal.weekday }}</span>
    <span>{{ rehearsal.date }}</span>
    <span>à {{ rehearsal.time }}</span>
  </div>
</div>
</template>

<style scoped>
.rehearsals {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

@media (max-width: 960px) {
  .rehearsals {
    max-width: 500px;
    margin: auto;
  }
}

.rehearsal {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 200px;
  aspect-ratio: 1 / 1;
  gap: 5px;
  font-size: 1.6em;
  background-color: #22223d;
  border-radius: 100%;
}

.rehearsal span:first-child {
  font-family: "Magical Brush", sans-serif;
  white-space: nowrap;
  font-size: 1.2em;
}

.rehearsal :not(:first-child) {
  font-size: 1.4em;
  letter-spacing: 1.5px;
}

.red {
  color: #16b652;
}

.coutel {
  color: #e7c940;
}
</style>
