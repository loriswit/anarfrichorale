<script setup lang="ts">
import type { Contact } from "@/composables/use-content-fetch"

async function sendEmail() {
  const { data: { value: { email } } } = await useContentFetch<Contact>("content/item/contact",
      { query: { fields: { email: true } } })

  window.location.href = `mailto:${email}`
}

async function openTelegram() {
  const { data: { value: { telegram } } } = await useContentFetch<Contact>("content/item/contact",
      { query: { fields: { telegram: true } } })

  window.location.href = `tg://join?invite=${telegram}`
}
</script>

<template>
<h2>Nous contacter</h2>
<div class="links">
  <button class="link" @click="sendEmail" title="Envoyer un e-mail">
    <Icon name="mdi:email"/>
  </button>
  <button class="link" @click="openTelegram" title="Groupe telegram">
    <Icon name="mdi:telegram"/>
  </button>
  <a class="link" href="https://github.com/loriswit/anarfrichorale" title="Code source">
    <Icon name="mdi:github"/>
  </a>
</div>
</template>

<style scoped>
h2 {
  font-size: 1.5em;
}

.links {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.link {
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

.link:hover {
  color: white;
  background-color: var(--clr-red);
  transform: scale(1.05);
}

.link {
  width: 1.75em;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
