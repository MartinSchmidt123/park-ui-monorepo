import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths({ root: './' })
    ],
    base: "/",
    build: {
        rollupOptions: {
            external: "@park-ui-monorepo/styled-system"
        }
    }
})


