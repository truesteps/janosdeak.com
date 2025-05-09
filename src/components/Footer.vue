<script setup lang="ts">
import Github from './Icons/Github.vue'
import Link from './Link.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      &copy; {{ new Date().getFullYear() }} Patrik Jánosdeák. All rights reserved.

      <Link
        href="https://github.com/truesteps/janosdeak.com"
        class="view-source-code-link"
        title="View source code on Github"
      >
        <Github :width="18" :height="18" />
      </Link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  padding: 10px 0;
  width: 100%;
  font-size: 12px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .view-source-code-link {
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: transparent;
    }
  }
}
</style>
