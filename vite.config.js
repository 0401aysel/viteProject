import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    server: {
        port: 3000
    },
    build:{
        rollupOptions:{
            input:{
                main:'index.html',
                about:'about.html',
                contact:'contact.html'
            }
        }
    }
});