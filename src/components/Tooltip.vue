<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

const isVisible = defineModel<boolean>({ default: false })

const triggerEl = ref<HTMLDivElement>()
const tooltipEl = ref<HTMLDivElement>()
const boundingRect = ref<DOMRect>()

const tooltipOffsetHeight = computed(() => tooltipEl.value?.offsetHeight ?? 0)
const tooltipWidth = computed(() => tooltipEl.value?.offsetWidth ?? 0)

const tooltipTop = computed(() => {
  if (!boundingRect.value?.width || !tooltipEl.value) {
    return '0px'
  }

  return `${boundingRect.value.top - tooltipOffsetHeight.value - 7}px`
})

const tooltipLeft = computed(() => {
  if (!boundingRect.value?.width || !tooltipEl.value) {
    return '0px'
  }

  const triggerCenter = boundingRect.value.left + boundingRect.value.width / 2
  const tooltipHalfWidth = tooltipWidth.value / 2
  const windowWidth = window.innerWidth

  // Calculate the ideal position (centered on trigger)
  let left = triggerCenter - tooltipHalfWidth

  // Adjust if tooltip would overflow left edge
  if (left < 0) {
    left = 0
  }
  // Adjust if tooltip would overflow right edge
  else if (left + tooltipWidth.value > windowWidth) {
    left = windowWidth - tooltipWidth.value
  }

  return `${left}px`
})

const arrowLeft = computed(() => {
  if (!boundingRect.value?.width || !tooltipEl.value) {
    return '50%'
  }

  const triggerCenter = boundingRect.value.left + boundingRect.value.width / 2
  const currentLeft = parseFloat(tooltipLeft.value)

  // Calculate how far the arrow should be from the left edge of the tooltip
  const arrowOffset = triggerCenter - currentLeft - 5 // 5px is half the arrow width

  return `${arrowOffset}px`
})

const updateBoundingRect = () => {
  if (!triggerEl.value) {
    return
  }

  boundingRect.value = triggerEl.value.getBoundingClientRect()
}

onMounted(() => {
  if (!triggerEl.value) {
    return
  }

  updateBoundingRect()

  const resizeObserver = new ResizeObserver(updateBoundingRect)
  resizeObserver.observe(triggerEl.value)

  const mutationObserver = new MutationObserver(updateBoundingRect)
  mutationObserver.observe(triggerEl.value, {
    attributes: true,
    childList: true,
    subtree: true,
  })

  window.addEventListener('scroll', updateBoundingRect, { passive: true })
  window.addEventListener('resize', updateBoundingRect, { passive: true })

  onUnmounted(() => {
    resizeObserver.disconnect()
    mutationObserver.disconnect()
    window.removeEventListener('scroll', updateBoundingRect)
    window.removeEventListener('resize', updateBoundingRect)
  })
})
</script>

<template>
  <div
    class="tooltip__trigger"
    @mouseover="isVisible = true"
    @mouseleave="isVisible = false"
    ref="triggerEl"
  >
    <slot />
  </div>

  <transition name="fade">
    <div v-if="isVisible" class="tooltip" ref="tooltipEl">
      <slot name="content" />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.tooltip {
  position: fixed;
  top: v-bind(tooltipTop);
  left: v-bind(tooltipLeft);
  border: 1px solid var(--secondary-color);
  padding: var(--global-space);
  background-color: var(--background-color);
  max-width: 300px;
  z-index: 400;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: var(--background-color);
    border-right: 1px solid var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
    left: v-bind(arrowLeft);
    transform: rotate(45deg);
    position: absolute;
    bottom: -6px;
  }

  &__trigger {
    display: inline-block;
    width: fit-content;
  }
}
</style>
