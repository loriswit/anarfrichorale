<script setup lang="ts">
import { Event } from "~/composables/use-content-fetch"
import MarkdownIt from "markdown-it"

const md = new MarkdownIt({ linkify: true })

const { data } = await useContentFetch<Event[]>("content/items/events", {
  query: {
    fields: { title: true, date: true, description: true },
    sort: { date: 1 },
  },
})

const events = computed(() => data.value.map(event => {
  const isoDate = event.date.replace(" ", "T") + ":00"
  const date = new Date(isoDate)
  return {
    title: event.title,
    description: event.description,
    date,
    dateStr: date.toLocaleDateString("fr-CH", { dateStyle: "full" }),
    timeStr: date.toLocaleTimeString("fr-CH", { timeStyle: "short" }),
  }
}))

const nextEvents = computed(() => events.value.filter(event =>
    event.date.getTime() >= new Date().getTime() + 24 * 60 * 60 * 1000))

const pastEvents = computed(() => events.value.filter(event => !nextEvents.value.includes(event)))

const eventGroups = computed(() => [
  { title: null, events: nextEvents.value, past: false },
  { title: "Évènements passés", events: pastEvents.value, past: true },
].filter(({ events }) => events.length > 0))
</script>

<template>
<template v-for="group in eventGroups">
  <h2 v-if="group.title" class="group-title">{{ group.title }}</h2>
  <div class="events" v-if="group.events.length">
    <div class="event" v-for="event in group.events">
      <div class="title">{{ event.title }}</div>
      <div class="date">{{ event.dateStr }}</div>
      <div class="time" v-if="!group.past">
        <Icon name="mdi:clock"/>
        {{ event.timeStr }}
      </div>
      <div class="description" v-if="event.description" v-html="md.render(event.description)"></div>
    </div>
  </div>
</template>

<h2 v-if="events.length === 0">Il n'y a aucun évènement pour l'instant</h2>
</template>

<style scoped>
.group-title:not(:first-child) {
  margin-top: 2em;
}

.events {
  max-width: 750px;
  margin: auto;
}

.event {
  text-align: left;
  font-size: 1.6em;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5em;
  padding: 0.8em;
  background: var(--clr-card-dark);
  border-radius: 1em;
}

.title {
  font-family: "Magical Brush", sans-serif;
  font-size: 1.4em;
  color: var(--clr-teal);
}

.date {
  flex-grow: 1;
}

.date, .time {
  text-align: right;
  font-size: 1.6em;
}

.time {
  flex-basis: 100%;
}

.time > .icon {
  font-size: 0.5em;
}

.description {
  flex-basis: 100%;
  border-top: 1px solid #fff3;
  margin-top: 0.5em;
}

.description :deep(h2) {
  font-size: 1em;
}

.description :deep(h3) {
  font-size: 0.8em;
}

.description :deep(h4) {
  font-size: 0.8em;
}

.description :deep(h5) {
  font-size: 0.8em;
}
</style>
