<script setup>
import VueBackgroundGradient from "~/components/VueBackgroundGradient.vue";
</script>

<template>
  <div
    class="h-full w-screen block relative isolate overflow-hidden bg-gray-900"
  >
    <div class="h-full py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
      <div class="flex flex-col justify-center items-center h-full w-full">
        <slot />
      </div>
    </div>

    <footer class="flex flex-row w-full items-center justify-center mt-[-40px]">
      <p class="text-xs leading-5 text-white md:order-0 md:mt-0 mr-2">
        &copy; {{ new Date().getFullYear() }} Patrik Jánosdeák. All rights
        reserved.
      </p>

      <span class="block">
        <a
          href="https://github.com/truesteps/janosdeak.com"
          target="_blank"
          rel="noopener nofollow"
          title="View source code"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
          >
            <path
              d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z"
              fill="#000000"
            />
          </svg>
        </a>
      </span>
    </footer>

    <VueBackgroundGradient />
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}
</style>
