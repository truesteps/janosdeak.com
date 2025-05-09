<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'
import { computed, ref } from 'vue'

const isVisible = defineModel<boolean>({ default: false })

const triggerEl = ref<HTMLDivElement>()
const tooltipEl = ref<HTMLDivElement>()

const { width: triggerWidth, top: triggerTop, left: triggerLeft } = useElementBounding(triggerEl)
const tooltipOffsetHeight = computed(() => tooltipEl.value?.offsetHeight ?? 0)
const tooltipTop = computed(() => {
  if (!triggerWidth.value) {
    return '0px'
  }

  return `${triggerTop.value - tooltipOffsetHeight.value - 7}px`
})
const tooltipLeft = computed(() => {
  if (!triggerWidth.value || !tooltipEl.value) {
    return '0px'
  }

  const left = triggerLeft.value + triggerWidth.value / 2 - tooltipEl.value.offsetWidth / 2

  if (left < 0) {
    return '0px'
  }

  return `${left}px`
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
    transform: rotate(45deg);
    position: absolute;
    bottom: -6px;
    left: calc(50% - 6px);
  }

  &__trigger {
    display: inline-block;
    width: fit-content;
  }
}
</style>
