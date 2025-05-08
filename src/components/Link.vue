<script setup lang="ts">
defineProps({
  href: { type: String, default: '#' },
})
</script>

<template>
  <a :href="href" :target="href !== '#' ? '_blank' : ''" rel="noopener nofollow">
    <slot />
  </a>
</template>
