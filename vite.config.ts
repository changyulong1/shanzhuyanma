import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { svgstore } from './src/vite_plugins/svgstore';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  //优化打包逻辑 本别打包多对应的文件夹
  return {
    //设置环境变量 == 全局变量(DEBUG)
    define: command === 'build' ? {
      DEBUG: false
    } : {
      DEBUG: true
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: any) {
            if (id.includes('echarts')) {
              return 'echarts';
            }
            if (id.includes('mock') || id.includes('faker')) {
              return 'mock';
            }
            if (id.includes('vant')) {
              return 'vant';
            }
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
        transformOn: true,
        mergeProps: true
      }),
      svgstore(),
      styleImport({
        resolves: [VantResolve()],
      }),
    ],
    server: {
      proxy: {
        '/api/v1': {
          target: 'https://mangosteen2.hunger-valley.com/',
          changeOrigin: true
        }
      }
    }
  }
})
