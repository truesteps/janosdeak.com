<script setup lang="ts">
import Card from './components/Card.vue'
import Header from './components/Header.vue'
import Link from './components/Link.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />

  <Card>
    <template #title>
      Debugging more packages than I ship at
      <Link href="https://mailstep.cz" class="mailstep-link" title="Mailstep.cz website"
        >mailstep.cz</Link
      >
    </template>

    An ex pro-gamer wannabe turned programmer. 👉&nbsp;Full-stack dev&nbsp;👈 working with
    <Link href="https://www.typescriptlang.org/" title="TypeScript website">TypeScript</Link>,
    <Link href="https://nodejs.org/" title="Node website">Node</Link>,
    <Link href="https://laravel.com/" title="Laravel website">Laravel</Link>
    and <Link href="https://vuejs.org/" title="Vue website">Vue</Link>. Fueled by shit tons of ☕.
  </Card>

  <Footer />
</template>

<style lang="scss" scoped>
.mailstep-link {
  text-decoration: underline;
  color: var(--invert-font-color);

  &:hover {
    background-color: var(--font-color);
  }
}
</style>
