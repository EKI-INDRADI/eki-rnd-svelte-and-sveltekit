import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: { 
  //     // change directory/rename  main.js (src/m.js) , 
  //     // makesure  index.html rename src/main.js to src/m.js
  //     input : 'src/m.js'
  //   },
  // },
  plugins: [svelte()],
});
