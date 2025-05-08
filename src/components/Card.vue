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
