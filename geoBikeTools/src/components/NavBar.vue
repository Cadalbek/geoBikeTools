<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <img style="width: 25px; margin-right: 15px;" alt="Vue logo" src="../assets/veloLogo.png" />
      <a class="navbar-brand" href="#">geoBikeTools</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carte">Carte</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/apropos">A Propos</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>


</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style>

</style>