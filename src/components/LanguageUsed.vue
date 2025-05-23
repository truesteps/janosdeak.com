<script setup lang="ts">
defineProps<{
  label: string
  color: string
  colspan: number
}>()
</script>

<template>
  <div class="language_used">
    <div class="language_used__strip" />
    <div class="language_used__label">{{ label }}</div>
  </div>
</template>

<style lang="scss" scoped>
.language_used {
  grid-column: span v-bind(colspan);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &__strip {
    width: 100%;
    height: 8px;
    background: v-bind(color);
  }
}
</style>
