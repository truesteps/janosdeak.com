<script setup lang="ts">
export type ListItem = {
  label: string
}

defineProps<{
  items: ListItem[]
}>()
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.label">
      {{ item.label }}
    </li>
  </ul>
</template>
