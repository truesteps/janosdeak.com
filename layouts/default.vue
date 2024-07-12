<script setup>
	import VueBackgroundGradient from '~/components/VueBackgroundGradient.vue';
</script>

<template>
	<div class="h-full w-screen block relative isolate overflow-hidden bg-gray-900">
		<div class="h-full py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
			<div class="flex flex-col justify-center items-center h-full w-full">
				<slot />
			</div>
		</div>

		<footer class="flex flex-row w-full items-center justify-center mt-[-40px]">
			<p class="text-xs leading-5 text-white md:order-0 md:mt-0 mr-2">
				&copy; {{ new Date().getFullYear() }} Patrik Jánosdeák. All rights reserved.
			</p>

			<span class="block">
				<a
					href="https://github.com/truesteps/janosdeak.com"
					target="_blank"
					rel="noopener nofollow"
					title="View source code"
				>
					<VueIcon name="bi-github" />
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
