<script setup lang="ts">
import LanguageUsed from './LanguageUsed.vue'
</script>

<template>
  <div class="languages-used container">
    <header>
      <h2>Languages used:</h2>
    </header>

    <div class="languages-used__languages">
      <LanguageUsed label="TypeScript" color="#3178c6" :colspan="3" />
      <LanguageUsed label="PHP" color="#777bb4" :colspan="3" />
      <LanguageUsed label="SCSS" color="#c6538c" :colspan="2" />
      <LanguageUsed label="Python" color="#3572a5" :colspan="1" />
      <LanguageUsed label="Bash" color="#d62728" :colspan="1" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.languages-used {
  margin-bottom: var(--global-line-height);

  &__languages {
    grid-template-columns: repeat(10, 1fr);
    display: grid;
    width: 100%;
    gap: 6px;

    & .language-used {
      flex: 1;
    }
  }
}
</style>
