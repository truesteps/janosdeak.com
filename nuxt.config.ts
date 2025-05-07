// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "Patrik Jánosdeák",
      meta: [
        {
          name: "description",
          content: "Software developer born and raised",
        },
        {
          name: "keywords",
          content:
            "backend, backend developer, php, laravel, vue, frontend, frontend developer, fullstack developer, nodejs, node js, javascript, nuxt, vue, moleculer",
        },
        {
          name: "author",
          content: "Patrik Jánosdeák",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://janosdeak.com",
        },
        {
          property: "og:title",
          content: "Patrik Jánosdeák",
        },
        {
          property: "og:description",
          content: "Software developer born and raised",
        },
        {
          property: "og:image",
          content: "https://janosdeak.com/og_image.jpg",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#26262b",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  compatibilityDate: "2025-05-07",
  devtools: {
    enabled: false,
  },
});
