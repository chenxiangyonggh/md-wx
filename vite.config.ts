import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  return {
    plugins: [
      react(),
      commonjs(),
      isBuild && dts({
        insertTypesEntry: true,
      }),
    ].filter(Boolean),
    optimizeDeps: {
      include: ['markdown-it', 'markdown-it-table-of-contents', 'markdown-it-task-lists'],
    },
    build: isBuild ? {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'MdWxReact',
        fileName: (format) => `index.${format}.js`,
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    } : undefined,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
