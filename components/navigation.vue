<template>
<nav>
  <ul>
    <li>
      <NuxtLink to="/repetitions">
        <span><Icon name="mdi:calendar"/> Répétitions</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/evenements">
        <span><Icon name="mdi:party-popper"/> Évènements</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/partitions">
        <span><Icon name="mdi:music"/> Partitions</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/enregistrements">
        <span><Icon name="mdi:volume-high"/> Enregistrements</span>
      </NuxtLink>
    </li>
  </ul>
</nav>
</template>

<style scoped>
nav ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  justify-content: center;
  animation: slide-in 1s ease 0.3s both;
  margin-bottom: 20px;
  padding: 0;
}

nav a {
  font-family: "Magical Brush", sans-serif;
  display: flex;
  gap: 0.3em;
  font-size: 1.5em;
  text-decoration: none;
  padding: 10px 20px;
  color: white;
  transition: transform 0.1s, opacity 0.2s;
  position: relative;
  perspective: 10em;
}

nav a:hover {
  transform: scale(1.1);
}

nav ul:has(li > a:hover) a:not(:hover) {
  opacity: 0.7;
}

nav a:before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: var(--clr-red-dark);
  border-radius: 0.4em 0;
  transition: background-color 0.2s, transform 0.3s cubic-bezier(.5, 1.5, .5, 1);
}

nav li:nth-child(2n) > a:before {
  border-radius: 0 0.4em;
}

nav a:hover:before, nav a.router-link-active:before {
  background-color: var(--clr-red);
}

nav a.router-link-active {
  pointer-events: none;
}

nav li:first-child {
  transform: translateY(-50px) rotate(4deg);
}

nav li:first-child > a:before {
  transform: rotate3d(0, 1, 0, 20deg) translateX(7%);
}

nav li span {
  transform: translateZ(50px) scale(0.8);
}

nav li:first-child > a:hover:before {
  transform: rotate3d(0, 1, 0, -15deg) translateX(-7%);
}

nav li:nth-child(2) {
  transform: translateY(-30px) rotate(2deg);
}

nav li:nth-child(2) > a:before {
  transform: rotate3d(1, 0, 0, 20deg) translateY(-2%);
}

nav li:nth-child(2) > a:hover:before {
  transform: rotate3d(1, 0, 0, -15deg) translateY(2%);
}

nav li:nth-child(3) {
  transform: translateY(-20px);
}

nav li:nth-child(3) > a:before {
  transform: rotate3d(0, 1, 0, -20deg) translateX(-7%);
}

nav li:nth-child(3) > a:hover:before {
  transform: rotate3d(1, 0, 0, 15deg) translateY(2%);
}

nav li:nth-child(4) {
  transform: translateY(-35px) rotate(-3deg);
}

nav li:nth-child(4) > a:before {
  transform: rotate3d(1, 0, 0, -20deg) translateY(2%);
}

nav li:nth-child(4) > a:hover:before {
  transform: rotate3d(0, 1, 0, 15deg) translateX(7%);
}


@media (max-width: 930px) and (min-width: 485px) {
  nav {
    max-width: 500px;
    margin: auto;
  }

  nav li:first-child {
    transform: translateY(-35px) rotate(4deg);
  }

  nav li:nth-child(2) {
    transform: translateY(-35px) rotate(-4deg);
  }

  nav li:nth-child(3) {
    transform: translateY(-30px) rotate(-2deg);
  }

  nav li:nth-child(4) {
    transform: translateY(-25px) rotate(3deg);
  }
}

@media (max-width: 485px) {
  nav {
    max-width: 300px;
    margin: auto;
  }

  nav li:first-child {
    transform: translateY(-30px) rotate(2deg);
  }

  nav li:nth-child(2) {
    transform: translateY(-30px) rotate(-3deg);
  }

  nav li:nth-child(3) {
    transform: translateY(-30px) rotate(3deg);
  }

  nav li:nth-child(4) {
    transform: translateY(-30px) rotate(-2deg);
  }
}
</style>
<script setup lang="ts">
</script>
