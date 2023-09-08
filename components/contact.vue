<script setup lang="ts">
import { Contact } from "@/composables/use-content-fetch"

async function sendEmail() {
  const runtimeConfig = useRuntimeConfig()
  const contact = await $fetch<Contact>("content/item/contact", {
    baseURL: runtimeConfig.public.apiBase,
    query: { fields: { email: true } },
  })
  window.open(`mailto:${ contact.email }`, "_blank")
}
</script>

<template>
<h2>Contact</h2>
<button @click="sendEmail">
  <Icon name="mdi:email"/>
  <span>E-mail</span>
</button>
</template>

<style scoped>
button {
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
  transition: background-color 0.2s, transform 0.1s;
}

button:hover {
  background-color: var(--clr-red);
  transform: scale(1.05);
}

button span {
  font-size: 1.2em;
}
</style>
