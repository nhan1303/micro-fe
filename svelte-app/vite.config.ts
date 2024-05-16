import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import federation from "@originjs/vite-plugin-federation";
import packages from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: "svelte-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./App": "./src/main.ts",
      },
      shared: ["svelte"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    host: true,
    port: 8088,
  },
});
