<script setup lang="ts">
import List from './List.vue'

const items = [
  { label: 'Helping realize the web application ambitions of Futured' },
  { label: 'Marketing asset generation extravaganza at Imagelance' },
  { label: 'Projects projecting over in Dentsu' },
  { label: 'Developing dreamy backends for microsites in Isobar' },
  { label: 'Learning the craft in Bistro Agency' },
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
