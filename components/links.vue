<script setup lang="ts">
import { Contact } from "@/composables/use-content-fetch"

async function sendEmail() {
  const runtimeConfig = useRuntimeConfig()
  const contact = await $fetch<Contact>("content/item/contact", {
    baseURL: runtimeConfig.public.apiBase,
    query: { fields: { email: true } },
  })
  window.open(`mailto:${contact.email}`, "_blank")
}
</script>

<template>
<div class="links">
  <button @click="sendEmail">
    <Icon name="mdi:email"/>
    <span>Nous contacter</span>
  </button>
  <a href="https://github.com/loriswit/anarfrichorale" title="Code source">
    <Icon name="mdi:github"/>
  </a>
</div>
</template>

<style scoped>
.links {
  display: flex;
  justify-content: center;
  gap: 1em;
}

button, a {
  font-family: inherit;
  font-size: 2em;
  display: inline-flex;
  align-items: flex-end;
  gap: 10px;
  padding: 6px 24px 12px;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  background-color: var(--clr-red-dark);
  color: white;
  height: 1.75em;
  transition: background-color 0.2s, transform 0.1s;
}

button:hover, a:hover {
  color: white;
  background-color: var(--clr-red);
  transform: scale(1.05);
}

button span {
  font-size: 1.2em;
}

a {
  width: 1.75em;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
