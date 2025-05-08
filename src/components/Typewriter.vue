<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { text, speed = 100 } = defineProps<{
  text: string
  speed?: number
}>()

const emit = defineEmits<{
  (e: 'done'): void
}>()

const splitText = text.split('')

const displayText = ref('')

onMounted(() => {
  const interval = setInterval(() => {
    if (splitText.length === 0) {
      clearInterval(interval)
      emit('done')
      return
    }

    displayText.value += splitText.shift()
  }, speed)
})
</script>

<template>
  <span>{{ displayText }}</span>
</template>
