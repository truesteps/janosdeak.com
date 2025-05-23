<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const {
  text,
  speed = 100,
  element = 'span',
} = defineProps<{
  text: string
  speed?: number
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
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

  onUnmounted(() => {
    if (!interval) {
      return
    }

    clearInterval(interval)
  })
})
</script>

<template>
  <component :is="element" class="typewriter">{{ displayText }}</component>
</template>
