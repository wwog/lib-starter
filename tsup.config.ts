import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  const watchMode = !!options.watch
  const isProd = options?.env?.NODE_ENV === 'production'
  const isDev = !isProd

  return {
    target: 'es2015',
    format: ['cjs', 'esm', 'iife'],
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: isDev || watchMode,
    minify: isProd,
    clean: true,
    watch: watchMode,
    onSuccess: 'node dist/index.js',
    dts: isProd,
    treeshake: true,
  }
})
