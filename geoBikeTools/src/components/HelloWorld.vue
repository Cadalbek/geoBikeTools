<script>
import NavBar from './NavBar.vue'
export default {
  name: "helloworld",
      components: {
      NavBar
  }
}
</script>

<template>
  <NavBar></NavBar>
  <img style="width: 200px;" alt="Vue logo" src="../assets/veloLogo.png" />
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/Cadalbek/geoBikeTools/tree/main/geoBikeTools" target="_blank">Cadalbek Git URL</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>Edit<code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
