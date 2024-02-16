import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  alias :{
    "@": resolve( __dirname ,"/")
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  }
})