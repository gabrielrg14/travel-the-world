import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transformIgnorePatterns: [
    './node_modules/(?!(react-leaflet/lib|@react-leaflet/core/lib)/)'
  ]
}

export default config
