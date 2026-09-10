<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

import Paladin from './Paladin.vue'
import Rodly from './Rodly.vue'

const projects = [Rodly, Paladin]

const track = useTemplateRef('track')
const activeIndex = ref(0)

const updateActiveIndex = () => {
  if (!track.value) {
    return
  }

  const maxScroll = track.value.scrollWidth - track.value.clientWidth
  const progress = maxScroll > 0 ? track.value.scrollLeft / maxScroll : 0

  activeIndex.value = Math.round(progress * (projects.length - 1))
}

const goTo = (index: number) => {
  const first = track.value?.children[0]
  const target = track.value?.children[index]

  if (!track.value || !first || !target) {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  track.value.scrollTo({
    left: target.getBoundingClientRect().left - first.getBoundingClientRect().left,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  })
}

const revealFocusedCard = ({ target }: FocusEvent) => {
  if (!track.value || !(target instanceof Node)) {
    return
  }

  goTo(Array.from(track.value.children).findIndex((card) => card.contains(target)))
}
</script>

<template>
  <div class="container projects">
    <div
      ref="track"
      class="projects__track"
      @scroll.passive="updateActiveIndex"
      @focusin="revealFocusedCard"
    >
      <component :is="project" v-for="(project, index) in projects" :key="index" />
    </div>

    <div class="projects__controls">
      <button
        type="button"
        class="btn btn-ghost btn-small"
        aria-label="Previous project"
        :aria-disabled="activeIndex === 0"
        @click="goTo(activeIndex - 1)"
      >
        ←
      </button>

      <span class="projects__position">{{ activeIndex + 1 }} / {{ projects.length }}</span>

      <button
        type="button"
        class="btn btn-ghost btn-small"
        aria-label="Next project"
        :aria-disabled="activeIndex === projects.length - 1"
        @click="goTo(activeIndex + 1)"
      >
        →
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  &__track {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    column-gap: calc(var(--global-space) * 2);

    > .container {
      padding: 0;
    }
  }

  &__controls {
    display: none;
  }

  @media (max-width: 48em) {
    &__track {
      grid-auto-columns: 85%;
      margin-inline: calc(var(--global-space) * -2);
      padding-inline: calc(var(--global-space) * 2);
      overflow-x: auto;
      overscroll-behavior-x: contain;
      scroll-snap-type: x mandatory;
      scroll-padding-inline: calc(var(--global-space) * 2);
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      > .container {
        scroll-snap-align: start;
      }
    }

    &__controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: calc(var(--global-space) * 2);
      margin-bottom: var(--global-line-height);

      .btn[aria-disabled='true'] {
        border-color: var(--font-color);
        color: var(--font-color);
        opacity: 0.4;
        cursor: default;
      }
    }
  }

  &__position {
    color: var(--secondary-color);
    font-size: 0.9em;
  }
}
</style>
