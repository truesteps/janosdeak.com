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

const displayText = ref(text)
const started = ref(false)

let interval: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const splitText = text.split('')
  displayText.value = ''
  started.value = true

  interval = setInterval(() => {
    if (splitText.length === 0) {
      clearInterval(interval)
      emit('done')
      return
    }

    displayText.value += splitText.shift()
  }, speed)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <component :is="element" class="typewriter" :class="{ 'typewriter--ready': started }">{{
    displayText
  }}</component>
</template>

<style lang="scss" scoped>
.typewriter {
  display: inline;
  margin: 0;
  padding: 0;
  overflow: visible;
  font-size: inherit;
  font-weight: inherit;
  visibility: hidden;
}

.typewriter--ready {
  visibility: visible;
}
</style>
