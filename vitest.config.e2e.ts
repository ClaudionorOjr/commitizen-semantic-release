import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/e2e-tests/*.{test,spec}.{js,mjs,ts,mts,jsx,tsx}'],
    reporters: 'verbose',
  },
})
