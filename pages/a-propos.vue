<script setup lang="ts">
import MarkdownIt from "markdown-it"
import MarkdownItVideo from "markdown-it-video"
import MarkdownItCenterText from "markdown-it-center-text"

const md = new MarkdownIt({
  linkify: true,
  html: true,
  typographer: true,
})
    .use(MarkdownItVideo, {
      youtube: { width: 750, height: 420 },
      vimeo: { width: 750, height: 420 },
    })
    .use(MarkdownItCenterText)

const { data: about } = await useContentFetch<About>("content/item/about")
</script>

<template>
<div class="about" v-html="md.render(about.content)"></div>
</template>

<style scoped>
.about {
  font-size: 2em;
  text-align: left;
  display: inline-block;
  margin: auto;
}

.about :deep(h2) {
  font-size: 1.6em;
}

.about :deep(iframe) {
  width: 100%;
}

.about :deep(img) {
  width: 100%;
}

.about :deep(a > img) {
  max-width: 250px;
}

.about :deep(.text-align-center) {
  text-align: center;
}
</style>
