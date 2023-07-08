import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/btsui3.github.io/',
  plugins: [react()],
  build: {
    assetsDir: 'assets', // your desired directory
  },
})
