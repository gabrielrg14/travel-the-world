import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://travels.gabrielrapucci.com.br',
    video: true
  }
})
