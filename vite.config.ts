import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inspect from 'vite-plugin-inspect';
import virtual from './plugins/virtual-module'
import svgr from './plugins/svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ defaultExport: 'url' }), inspect()]
})
