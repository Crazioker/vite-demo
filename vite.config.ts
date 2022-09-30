import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
import vitePrerender from 'vite-plugin-prerender'

const path = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePrerender({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/about'],
      })
],
  resolve:{
    alias:{
        '@': path.resolve(__dirname, 'src')
    }
  }
})
