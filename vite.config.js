import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath };

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
