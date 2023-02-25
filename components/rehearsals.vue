<script setup lang="ts">
const { data } = await useContent("content/items/rehearsals?sort={date:1}&limit=4")

const rehearsals = computed(() => data.value?.map((item: any) => {
  const date = new Date(item.date)
  return {
    ts: date.getTime(),
    date: date.toLocaleDateString("fr-FR", { dateStyle: "long" }),
    weekday: date.toLocaleDateString("fr-FR", { weekday: "long" }),
    time: date.toLocaleTimeString("fr-FR", { hour: "numeric", minute: "2-digit" }),
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
h2 {
  font-size: 2.2em;
}

.rehearsals {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.rehearsal {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 210px;
  aspect-ratio: 1 / 1;
  gap: 10px;
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
