<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h1 class="navbar-brand">Text Analyzer</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="d-flex nav-item active">
              <RouterLink to="/"><a class="nav-link" href="#">Home</a></RouterLink>
              <RouterLink to="/about"><a class="nav-link" href="#">About</a></RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>

</style>
