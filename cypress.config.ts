import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'e71ybk',
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: true
  }
})
