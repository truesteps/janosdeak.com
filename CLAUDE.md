# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for janosdeak.com. A single page built with Vue 3, TypeScript, Sass and [terminal.css](https://terminalcss.xyz), prerendered with `vite-ssg`.

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: runs `type-check` and `build-only` in parallel
- `npm run build-only`: `vite-ssg build` into `dist/` (Netlify runs this one, so it does not type-check)
- `npm run preview`: serve the built `dist/`
- `npm run type-check`: `vue-tsc --build`
- `npm run lint`: oxlint, then eslint. **Both run with `--fix` and rewrite files.**
- `npm run format`: prettier on `src/` (no semicolons, single quotes, 100 char width)

There is no test suite.

## Architecture

- **Prerendering.** `src/main.ts` exports `createApp = ViteSSG(App)` from `vite-ssg/single-page` instead of mounting. At build time the page renders in Node and is then hydrated in the browser. Browser APIs (`window`, observers, timers) belong in `onMounted`, as `Tooltip.vue` and `Typewriter.vue` do.
- **Reveal sequence.** `Typewriter` types the name and emits `done`. `Header` then shows the social menu and emits `typewriterDone`, and `App.vue` sets `revealed`, which fades in the content sections. The sections use `v-show` rather than `v-if` so their text stays in the prerendered HTML for SEO. Keep new sections on `v-show` inside `<Transition name="fade">`. The `fade` classes are global in `src/assets/main.scss`.
- **Styling.** Layout comes from terminal.css classes (`container`, `terminal-card`, `terminal-nav`, `terminal-menu`, `terminal-prompt`). The theme is the CSS variable overrides in `src/assets/main.scss`. Use those variables, not new colors.
- **Links.** `Link.vue` is the external link component (`target="_blank"`, `rel="noopener nofollow"`). Companies that no longer exist are shown as `<a href="#" class="disabled">` inside a `Tooltip`, as in `OldEmployments.vue`.
- **SEO metadata lives by hand in `index.html`**: title, description, Open Graph, Twitter and a JSON-LD `Person` block. It repeats page content: `worksFor` mirrors Mailstep in the intro card and Rodly in `Rodly.vue`, and `sameAs` mirrors `menuItems` in `Header.vue`. Update both places together. `public/sitemap.xml` and `public/robots.txt` are static files.
- **App Store links** use the `/cz/` storefront. Paladin is only sold in the EU, so a `/us/` link returns 404 in desktop browsers.

## Deployment

Netlify (`netlify.toml`): Node 22, `npm run build-only`, publishes `dist/`, and sets `APP_ENV=production`. `vite.config.ts` includes `vite-plugin-vue-devtools` only when `APP_ENV` is not `production`.
