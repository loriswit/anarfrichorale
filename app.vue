<script setup lang="ts">
const { isLoading } = useLoadingIndicator()
</script>

<template>
<header>
  <NuxtLoadingIndicator :height="5" color="var(--clr-red)"/>
  <MainTitle/>
  <Navigation/>
</header>
<main :class="{ loading: isLoading }">
  <NuxtPage/>
</main>
<footer>
  <Links/>
</footer>
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

:root {
  --clr-red: #d20645;
  --clr-red-dark: #751633;
  --clr-red-light: #e04c7a;

  --clr-card: #2e2e79;
  --clr-card-dark: #22223d;

  --clr-teal: #16a3b6;
  --clr-white: #cfcfee;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  background-color: #14111c;
  color: var(--clr-white);
  font-family: "Junkyard Plush", sans-serif;
  text-align: center;
  margin: 0;
  overflow-x: hidden;
  height: 100%;
}

#__nuxt {
  height: 100%;
  display: flex;
  flex-direction: column;
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
  margin: 0 25px 60px;
  animation: slide-in 1s ease 0.4s both;
  flex-grow: 1;
  transition: 0.5s filter;
}

main.loading {
  filter: opacity(50%);
  pointer-events: none;
}

footer {
  padding-bottom: 25px;
  animation: appear 1s ease 0.6s both;
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

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
