import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: 'jsdom', // Simula o ambiente do navegador
  },
})