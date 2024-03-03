// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/google-fonts'
  ],
  css: [
    '~/style/global.css'
  ],
  googleFonts: {
    families: {
      'Poppins': [400, 500, 600, 700],
    },
  },
})
