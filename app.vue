<script setup lang="ts">
import { Break } from "~/composables/use-content-fetch"

const { data: rehearsalsBreak } = await useContentFetch<Break>("content/item/break",
    { query: { fields: { active: true, message: true } } })
</script>

<template>
<div>
  <header>
    <MainTitle></MainTitle>
  </header>
  <main>
    <section v-if="rehearsalsBreak">
      <BreakMsg v-if="rehearsalsBreak.active" :message="rehearsalsBreak.message"></BreakMsg>
      <Rehearsals v-else></Rehearsals>
    </section>
    <section>
      <Contact></Contact>
    </section>
  </main>
</div>
</template>

<style>
@font-face {
  font-family: "Junkyard Plush";
  src: url("assets/junkyard_plush.otf");
}

@font-face {
  font-family: "Magical Brush";
  src: url("assets/dk_magical_brush.otf");
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  background-color: #14111c;
  color: #cfcfee;
  font-family: "Junkyard Plush", sans-serif;
  text-align: center;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Magical Brush", sans-serif;
  font-weight: normal;
  margin: 0 0 20px;
}

h2 {
  font-size: 2.2em;
}

a {
  color: cornflowerblue;
  text-decoration: none;
}

a:hover {
  color: lightskyblue;
  text-decoration: underline;
}

main {
  animation: slide-in 1s ease 0.4s both;
  margin: 0 25px 25px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: initial;
  }
}
</style>
