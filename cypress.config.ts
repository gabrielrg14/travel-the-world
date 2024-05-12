import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'e71ybk',
  e2e: {
    baseUrl: 'https://travels.gabrielrapucci.com.br',
    video: true
  }
})
