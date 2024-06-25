<script setup lang="ts">
import type { Break, Location, Rehearsal } from "~/composables/use-content-fetch"

definePageMeta({
  alias: "/",
})

let rehearsals = ref<unknown>([])

const { data: rehearsalsBreak } = await useContentFetch<Break>("content/item/break",
    { query: { fields: { active: true, message: true } } })

if (!rehearsalsBreak.value?.active) {
  const now = new Date().toLocaleString("sv")
  const { data } = await useContentFetch<Rehearsal[]>("content/items/rehearsals", {
    query: {
      fields: { date: true, location: true },
      filter: { date: { $gte: now } },
      sort: { date: 1 },
      limit: 4,
    },
  })

  rehearsals = computed(() => data.value?.map(item => {
    const isoDate = item.date.replace(" ", "T") + ":00"
    const date = new Date(isoDate)
    return {
      ts: date.getTime(),
      date: date.toLocaleDateString("fr-CH", { dateStyle: "long" }),
      weekday: date.toLocaleDateString("fr-CH", { weekday: "long" }),
      time: date.toLocaleTimeString("fr-CH", { hour: "numeric", minute: "2-digit" }),
      location: item.location,
    }
  }))
}

const { data: location } = await useContentFetch<Location>("content/item/location",
    { query: { fields: { name: true, address: true, osmurl: true } } })

</script>

<template>
<template v-if="rehearsalsBreak.active">
  <BreakMsg :message="rehearsalsBreak.message"></BreakMsg>
</template>
<template v-else-if="rehearsals?.length">
  <div class="rehearsals">
    <div v-for="rehearsal in rehearsals" class="rehearsal">
      <span v-if="rehearsal.location === 'Red'" class="red">La Red</span>
      <span v-else-if="rehearsal.location === 'Coutellerie'" class="coutel">La Coutellerie</span>
      <span v-else class="terrier">Le Terrier</span>
      <span>{{ rehearsal.weekday }}</span>
      <span>{{ rehearsal.date }}</span>
      <span>à {{ rehearsal.time }}</span>
    </div>
  </div>
</template>
<template v-else>
  <h2>Aucune répétition programmée</h2>
  <p>Pour le moment...</p>
</template>
<div class="location">
  <div class="address">
    <h2>{{ location.name }}</h2>
    <p v-html="location.address.replaceAll('\n', '<br>')"></p>
  </div>
  <iframe :src="location.osmurl"></iframe>
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

  .location {
    flex-direction: column;
  }

  .location::before {
    content: "* * *";
    margin-bottom: 3em;
  }

  .location .address {
    margin-bottom: 2em;
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
  background-color: var(--clr-card-dark);
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

.terrier {
  color: var(--clr-teal);
}

p {
  font-size: 2em;
}

.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 680px;
  margin: 60px auto auto;
}

.location h2 {
  color: var(--clr-teal);
}

.location .address {
  text-align: left;
}

.location .address p {
  margin: 0;
}

.location iframe {
  border: none;
  border-radius: 1em;
  height: 260px;
  width: min(400px, 90vw);
}
</style>
