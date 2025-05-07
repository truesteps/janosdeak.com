<script setup>
defineProps({
  href: { type: String, default: "#" },
});
</script>

<template>
  <a
    :href="href"
    :target="href !== '#' ? '_blank' : ''"
    class="underline underline-offset-2 text-green-400"
    rel="noopener nofollow"
  >
    <slot />
  </a>
</template>
