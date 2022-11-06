<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>


      <nav>
        <RouterLink class="px-1" to="/">Home</RouterLink>
        <RouterLink class="px-1" to="/pg2">pg2</RouterLink>
        <RouterLink class="px-1" to="/pg3">pg3</RouterLink>
        <RouterLink class="px-1" to="/pg4">pg4</RouterLink>
        <RouterLink class="px-1" to="/pg5">pg5</RouterLink>
        <RouterLink class="px-1" to="/pg6">pg6</RouterLink>
        <RouterLink class="px-1" to="/pg7">pg7</RouterLink>
        <RouterLink class="px-1" to="/login">login</RouterLink>
        <RouterLink class="px-1" to="/register">register</RouterLink>
        <RouterLink class="px-1" to="/testcode">testcode</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

