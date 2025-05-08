<script setup lang="ts">
import sanitizeHtml from 'sanitize-html'

export type ListItem = {
  label: string
}

const {
  items,
  sanitizeOptions = {
    allowedAttributes: {
      a: ['href', 'class'],
    },
  },
} = defineProps<{
  items: ListItem[]
  sanitizeOptions?: sanitizeHtml.IOptions
}>()
</script>

<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.label"
      v-html="sanitizeHtml(item.label, sanitizeOptions)"
    />
  </ul>
</template>
