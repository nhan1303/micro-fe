import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/

const STATIC_SERVER_URL = "http://localhost:3000/projects/super-app";
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell-app",
      remotes: {
        "@react-mfe": `${STATIC_SERVER_URL}/react-app/dist/assets/remoteEntry.js`,
        "@vue-mfe": `${STATIC_SERVER_URL}/vue-app/dist/assets/remoteEntry.js`,
        "@svelte-mfe": `${STATIC_SERVER_URL}/svelte-app/dist/assets/remoteEntry.js`,
        "@angular-mfe": `${STATIC_SERVER_URL}/angular-app/dist/remoteEntry.js`
        // "@angular-mfe": {
        //   external: `${STATIC_SERVER_URL}/angular-app/dist/remoteEntry.js`,
        //   externalType: "url",
        //   format: "esm",
        //   from: "webpack",
        // },
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "/assets/[name].js",
        minifyInternalExports: false,
      },
    },
  },
  server: {
    host: true,
    port: 5000,
  },
  // preview: {
  //   port: 5001,
  // },
});
