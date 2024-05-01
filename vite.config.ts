import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // or 'es5' or other target as needed
    outDir: 'dist', // specify the output directory for the build
    // other build options as needed
  },
})
