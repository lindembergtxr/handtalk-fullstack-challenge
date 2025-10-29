/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { loadEnv } from 'vite'

export default ({ mode }: { mode: any }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return defineConfig({
        plugins: [vue(), tailwindcss()],
        server: {
            port: parseInt(env.VITE_APP_PORT, 10) || 5173,
        },
        test: {
            environment: 'jsdom',
            globals: true,
        },
    })
}
