<script setup lang="ts">
import Card from './Card.vue'

defineProps<{
  label: string
  name: string
  tagline: string
  status: string
}>()
</script>

<template>
  <Card class="project">
    <template #title>{{ label }}</template>

    <div class="project__heading">
      <div class="project__icon">
        <slot name="icon" />
      </div>

      <div>
        <h2 class="project__name">{{ name }}</h2>
        <p class="project__tagline">{{ tagline }}</p>
      </div>
    </div>

    <slot />

    <div class="project__actions">
      <slot name="actions" />
      <span class="project__status">{{ status }}</span>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;

  :deep(.terminal-card) {
    display: flex;
    flex: 1;
    flex-direction: column;

    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  }

  &__heading {
    display: flex;
    align-items: center;
    gap: calc(var(--global-space) * 1.5);
    margin-bottom: var(--global-line-height);
  }

  &__icon {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 14px;
    overflow: hidden;
    background-color: var(--primary-color);

    :slotted(img) {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &__name {
    margin: 0;
    font-size: 1.6em;
  }

  &__tagline {
    margin: 0;
    color: var(--secondary-color);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--global-space) calc(var(--global-space) * 2);
    margin-top: auto;

    :slotted(.btn) {
      text-decoration: none;
    }
  }

  &__status {
    color: var(--secondary-color);
    font-size: 0.9em;
  }
}
</style>
