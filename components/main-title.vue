<template>
<h1>
  <span><i>lA</i></span>
  <span><i>&nbsp;CHoRalE</i></span>
  <br>
  <span><i>Anarchiste</i></span>
  <br>
  <span><i>dE FRIbOuRg</i></span>
</h1>
</template>

<style scoped>
h1 {
  font-size: min(15vw, 8em);
  line-height: 0.85;
  white-space: nowrap;
  overflow: hidden;
  padding: min(15vw, 100px) 0 min(8vw, 50px);
  margin: 0;

  --ease-fct: cubic-bezier(.18, .67, .18, 1.07);
}

h1 span {
  display: inline-block;
}

h1 i {
  display: inline-block;
  font-style: normal;
  opacity: 0;
}

h1 span:not(:first-child, :last-child) {
  color: #d20645;
}

/* LA */

h1 span:first-child {
  font-size: 0.9em;
  transform: rotate(-90deg) translate(0.1em, 0.2em);
  perspective: 1em;
}

h1 span:first-child i {
  transform-origin: top;
  animation: anim1 1.5s var(--ease-fct) 0.3s both;
}

@keyframes anim1 {
  from {
    opacity: 0;
    transform: rotate3d(1, 0, 0, 80deg) translate(0.5em, -0.5em);
  }
  to {
    opacity: 1;
    transform: initial;
  }
}

/* CHORALE */

h1 span:nth-of-type(2) {
  font-size: 1.22em;
  transform: translateX(-0.2em);
  perspective: 2em;
}

h1 span:nth-of-type(2) i {
  transform-origin: top;
  animation: anim2 1.2s var(--ease-fct) both;
}

@keyframes anim2 {
  from {
    opacity: 0;
    transform: rotate3d(1, 1, 0, 80deg) translate(1em, -1em);
  }
  to {
    opacity: 1;
    transform: initial;
  }
}

/* ANARCHISTE */

h1 span:nth-of-type(3) {
  perspective: 2em;
}

h1 span:nth-of-type(3) i {
  transform-origin: bottom;
  animation: anim3 1.4s var(--ease-fct) 0.1s both;
}

@keyframes anim3 {
  from {
    opacity: 0;
    transform: rotate3d(1, 1, 0, -80deg) translate(-1em, 1em);
  }
  to {
    opacity: 1;
    transform: initial;
  }
}

/* DE FRIBOURG */

h1 span:last-child {
  font-size: 0.48em;
  transform: translate(2.7em, -0.7em);
  perspective: 5.5em;
}

h1 span:last-child i {
  transform-origin: right;
  animation: anim4 2s var(--ease-fct) 0.4s both;
}

@keyframes anim4 {
  from {
    opacity: 0;
    transform: rotate3d(0, 1, 0, 70deg) translateY(0.5em);
  }
  to {
    opacity: 1;
    transform: initial;
  }
}
</style>
