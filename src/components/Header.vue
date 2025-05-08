<script setup lang="ts">
import { ref } from 'vue'

import Typewriter from './Typewriter.vue'
import Link from './Link.vue'
import Menu, { type MenuItem } from './Menu.vue'
import Prompt from './Prompt.vue'

const emit = defineEmits<{
  (e: 'typewriterDone'): void
}>()

const menuItems: MenuItem[] = [
  {
    href: 'https://x.com/stepsovich',
    label: 'Twitter',
    icon: 'x',
  },
  {
    href: 'https://linkedin.com/in/patrik-janosdeak',
    label: 'Linkedin',
    icon: 'linkedin',
  },
  {
    href: 'https://github.com/truesteps',
    label: 'Github',
    icon: 'github',
  },
]

const showMenu = ref(false)

const onTypewriterDone = () => {
  showMenu.value = true
  emit('typewriterDone')
}
</script>

<template>
  <div class="container">
    <div class="terminal-nav">
      <header class="terminal-logo">
        <Prompt class="logo">
          <Link href="https://janosdeak.com" class="typewriter">
            <Typewriter text="Patrik Jánosdeák" @done="onTypewriterDone" />
          </Link>
        </Prompt>
      </header>

      <Transition name="fade">
        <Menu v-if="showMenu" :items="menuItems" />
      </Transition>
    </div>
  </div>
</template>
