// vitest.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['components/**/*.spec.ts'],
        coverage: {
            exclude: [
                'coverage/**',
                'dist/**',
                '**/[.]**',
                'packages/*/test?(s)/**',
                '**/*.d.ts',
                '**/virtual:*',
                '**/__x00__*',
                '**/\x00*',
                'cypress/**',
                'test?(s)/**',
                'test?(-*).?(c|m)[jt]s?(x)',
                '**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
                '**/__tests__/**',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
                '**/vitest.{workspace,projects}.[jt]s?(on)',
                '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
                'app.vue',
                'nuxt.config.ts'
            ]
        }
    },

})