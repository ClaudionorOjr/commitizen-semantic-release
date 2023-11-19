import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/unit-tests/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: 'verbose',
  },
})
