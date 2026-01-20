import { defineConfig } from "vite"
import { minify } from "html-minifier"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import svg from "@poppanator/sveltekit-svg"

const mode = process.env.NODE_ENV
const dev = mode === "production"

const minifyHtml = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html: string) {
      return minify(html, {
        collapseWhitespace: true
      })
    }
  }
}

export default defineConfig(() => {
  return {
    optimizeDeps: {
      exclude: ["@roxi/routify"]
    },
    plugins: [svelte(), dev && minifyHtml(), svg()],
    build: {
      minify: dev
    }
  }
})
