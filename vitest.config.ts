import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/unit-tests/*.{test,spec}.{js,mjs,ts,mts,jsx,tsx}'],
    reporters: 'verbose',
  },
})
