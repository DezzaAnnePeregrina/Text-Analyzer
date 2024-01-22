<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Text Analyzer</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/twitter">Twitter</RouterLink>
        <RouterLink to="/Linkedin">Linkedin</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav{
  display: flex;
  gap: 10px;
}
</style>
