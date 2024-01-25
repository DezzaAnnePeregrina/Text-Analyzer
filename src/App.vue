<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="d-flex py-3">
      <ul class="nav nav-pills">
        <RouterLink to="/"><li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li></RouterLink>
        <RouterLink to="/about"><li class="nav-item"><a href="#" class="nav-link">About</a></li></RouterLink>
      </ul>
    </header>

  <RouterView />
</template>

<style scoped>

</style>
