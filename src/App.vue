<script setup lang="ts">
import { ref } from 'vue'

import Card from './components/Card.vue'
import Header from './components/Header.vue'
import Link from './components/Link.vue'
import Footer from './components/Footer.vue'
import LanguagesUsed from './components/LanguagesUsed.vue'
import OldEmployments from './components/OldEmployments.vue'
import Projects from './components/Projects.vue'

const revealed = ref(false)
</script>

<template>
  <main class="content">
    <Header @typewriterDone="revealed = true" />

    <Transition name="fade">
      <Card v-show="revealed">
        <template #title>
          Debugging more packages than I ship at
          <Link href="https://mailstep.cz" class="mailstep-link" title="Mailstep.cz website"
            >mailstep.cz</Link
          >
        </template>

        An ex pro-gamer wannabe turned programmer. 👉&nbsp;Full-stack dev&nbsp;👈 working with
        <Link href="https://www.php.net/docs.php" title="PHP documentation">PHP</Link>,
        <Link href="https://www.typescriptlang.org/" title="TypeScript website">TypeScript</Link>,
        <Link href="https://nodejs.org/" title="Node website">Node</Link>,
        <Link href="https://laravel.com/" title="Laravel website">Laravel</Link>
        and <Link href="https://vuejs.org/" title="Vue website">Vue</Link>. Fueled by shit tons of
        ☕.
      </Card>
    </Transition>

    <Transition name="fade">
      <Projects v-show="revealed" />
    </Transition>

    <Transition name="fade">
      <LanguagesUsed v-show="revealed" />
    </Transition>

    <Transition name="fade">
      <OldEmployments v-show="revealed" />
    </Transition>
  </main>

  <Footer />
</template>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding-bottom: 20px;
}

.mailstep-link {
  text-decoration: underline;
  color: var(--invert-font-color);

  &:hover {
    background-color: var(--font-color);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-delay: 0.2s;
}
</style>
