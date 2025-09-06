import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // 生成 types 入口
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'TiptapEditor',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 不打包这些依赖，交给用户项目自己安装
      external: [
        'react',
        'react-dom',
        "@tiptap/react"
      ],
      output: {
        // 这里控制 JS 输出文件名
        entryFileNames: `[name].${'[format]'}.js`,
        chunkFileNames: `[name].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'style.css' // 👈 自定义 CSS 输出文件名
          }
          return '[name].[ext]'
        }
      }
    },
    cssCodeSplit: true, // 如果有多个 CSS chunk，可以拆分；false 则打包成单个 CSS
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
