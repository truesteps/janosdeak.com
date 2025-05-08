<script setup lang="ts">
import List from './List.vue'

const items = [
  {
    label:
      'Helping realize the web application ambitions of <a href="https://futured.app" target="_blank" rel="noopener nofollow">Futured</a>',
  },
  {
    label:
      'Marketing asset generation extravaganza at <a href="https://imagelance.com" target="_blank" rel="noopener nofollow">Imagelance</a>',
  },
  {
    label:
      'Projects projecting over in <a href="https://dentsu.cz" target="_blank" rel="noopener nofollow">Dentsu</a>',
  },
  {
    label: 'Developing dreamy backends for microsites in <a href="#" class="disabled">Isobar</a>',
  },
  {
    label: 'Learning the craft in <a href="#" class="disabled">Bistro Agency</a>',
  },
]
</script>

<template>
  <div class="container">
    <header>
      <h2>Previously:</h2>
    </header>

    <List :items="items" />
  </div>
</template>
