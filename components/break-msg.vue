<script setup lang="ts">
import MarkdownIt from "markdown-it"

defineProps({
  message: { type: String, required: true },
})

const md = new MarkdownIt({ linkify: true })
</script>

<template>
<div class="message" v-html="md.render(message)"></div>
</template>

<style scoped>
.message {
  max-width: 600px;
  margin: auto;
  font-size: 2.5em
}

:deep(h2) {
  font-size: 1em;
}

:deep(h3) {
  font-size: 0.8em;
}

:deep(h4) {
  font-size: 0.8em;
}

:deep(h5) {
  font-size: 0.8em;
}
</style>
