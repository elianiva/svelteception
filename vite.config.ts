import routify from "@roxi/routify/vite-plugin";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svg from "@poppanator/sveltekit-svg";

export default defineConfig(() => {
  return {
    plugins: [routify(), svelte(), svg()],
  };
});
