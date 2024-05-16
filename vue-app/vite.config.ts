import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vue-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./App": "./src/main.ts",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  // build: {
  //   target: "esnext",
  //   assetsInlineLimit: 40960,
  //   minify: false,
  //   cssCodeSplit: false,
  //   sourcemap: true,
  //   rollupOptions: {
  //     output: {
  //       minifyInternalExports: false,
  //     },
  //   },
  // },
});
