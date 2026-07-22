import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Emit source maps so production stack traces name the real file/line
    // instead of a minified `n is not a function`. Only fetched when devtools
    // is open, so no cost for normal visitors.
    sourcemap: true,
  },
})
