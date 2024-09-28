import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: true, titleProp: true },
      include: '**/*.svg',
    })
  ],
  resolve: {
    alias: [
      { find: '~', replacement: '/src'}
    ]
  }
})
