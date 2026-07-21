import 'terminal.css'
import './assets/main.scss'

import { ViteSSG } from 'vite-ssg/single-page'

import App from './App.vue'

// Prerendered at build time (SSG) for SEO, then hydrated on the client.
export const createApp = ViteSSG(App)
