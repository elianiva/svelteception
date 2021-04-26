const svelte = require("@sveltejs/vite-plugin-svelte")
const { defineConfig } = require("vite")
const { minify } = require("html-minifier")
const { createFilter } = require("@rollup/pluginutils")
const { extname } = require("path")
const image = require("@rollup/plugin-image")
const svelteSVG = require("rollup-plugin-svelte-svg")
const mode = process.env.NODE_ENV
const dev = mode === "production"

const minifyHtml = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return minify(html, {
        collapseWhitespace: true
      })
    }
  }
}

const svgPlugin = svelteSVG({ dev })
const origSvgPluginTransform = svgPlugin.transform
const filter = createFilter()
svgPlugin.transform = (source, id) => {
  if (!filter(id) || extname(id) !== ".svg") {
    return null
  }
  // @rollup/plugin-image the code that this plugin generate
  // is looks like
  // var img = ".."; export default img;
  // We need to remove that in order to make SVG
  // works as expected for rollup-plugin-svelte-svg;
  // otherwise this string will appears on
  // the frontend
  source = decodeURIComponent(source)
    .replace('</svg>";', "</svg>")
    .replace(`export default img;`, "")
  const { code: transformed, map } = origSvgPluginTransform(source, id)
  // regex to findout the tranformed class
  // export default {LookAtThiString};
  const className = transformed.match("export default (.*);")[1]
  // render '' for SSR
  return {
    code: transformed.replace(
      `export default ${className};`,
      `${className}.$$$render = () => '';export default ${className};`
    ),
    map
  }
}

module.exports = defineConfig(() => {
  return {
    optimizeDeps: {
      exclude: ["@roxi/routify"]
    },
    plugins: [
      svelte(),
      dev && minifyHtml(),
      { ...image(), enforce: "pre" },
      svgPlugin,
    ],
    build: {
      minify: dev
    }
  }
})
