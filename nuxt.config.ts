// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/assets/css/global.scss',
  ],
  modules: [
    "@nuxt/image",
  ],
  image: {
    provider: 'netlify',
    netlify: {
      baseUrl: process.env.IMAGES_URL
    }
  },
})