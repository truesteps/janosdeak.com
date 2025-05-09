<script setup lang="ts">
import Tooltip from './Tooltip.vue'
</script>

<template>
  <div class="container">
    <header>
      <h2>Previously:</h2>
    </header>

    <ul>
      <li>
        Helping realize the web application ambitions of
        <a href="https://futured.app" target="_blank" rel="noopener nofollow">Futured</a>
      </li>

      <li>
        Marketing asset generation extravaganza at
        <a href="https://imagelance.com" target="_blank" rel="noopener nofollow">Imagelance</a>
      </li>

      <li>
        Projects projecting over in
        <a href="https://dentsu.cz" target="_blank" rel="noopener nofollow">Dentsu</a>
      </li>

      <li>
        Developing dreamy backends for microsites in
        <Tooltip>
          <a href="#" class="disabled">Isobar</a>

          <template #content> Nothing to do with the weather, just another agency job </template>
        </Tooltip>
      </li>

      <li>
        Learning the craft in
        <Tooltip>
          <a href="#" class="disabled">Bistro Agency</a>

          <template #content>
            You might get it confused with a food truck, but it was a bona fide agency
          </template>
        </Tooltip>
      </li>
    </ul>
  </div>
</template>
