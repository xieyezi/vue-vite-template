import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config = defineConfig({
  alias: [
    {find: '@src', replacement: './src'},
    {find: '@hooks', replacement: './src/hooks'},
    {find: '@typing', replacement: './src/types'},
    {find: '@store', replacement: './src/store'}
  ],
  plugins: [vue()]
})

export default config
