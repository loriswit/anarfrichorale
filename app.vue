<script setup lang="ts">
useHead({
  title: "Chorale Anarchiste de Fribourg",
  htmlAttrs: { lang: "fr" },
})
</script>

<template>
<div>
  <header>
    <MainTitle></MainTitle>
  </header>
  <main>
    <Rehearsals></Rehearsals>
  </main>
</div>
</template>

<style>
@font-face {
  font-family: "Junkyard Plush";
  src: url("@/assets/junkyard_plush.otf");
}

@font-face {
  font-family: "Magical Brush";
  src: url("@/assets/dk_magical_brush.otf");
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

h1, h2, h3, h4 {
  font-family: "Magical Brush", sans-serif;
  font-weight: normal;
}

main {
  animation: slide-in 1s ease;
  margin: 0 30px 40px;
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
