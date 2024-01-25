<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="d-flex justify-content-between border p-2 px-3">
      <h1>Text Analyzer</h1>
      <ul class="d-flex align-items-center nav nav-pills">
        <RouterLink to="/"><li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li></RouterLink>
        <RouterLink to="/about"><li class="nav-item"><a href="#" class="nav-link">About</a></li></RouterLink>
      </ul>
    </header>

  <RouterView />

  <footer class="d-flex flex-wrap justify-content-between align-items-center border p-2 px-3">
      <h6>&copy; 2024</h6>
        <a href="https://dezzaanneperegrina.tech" >dezzaanneperegrina.tech</a>
    </footer>
</template>

<style scoped>

</style>
