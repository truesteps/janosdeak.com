<template>
  <div class="container">
    <div class="terminal-card">
      <header>
        <slot name="title" />
      </header>

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.terminal-card {
  margin-bottom: var(--global-line-height);
}
</style>
