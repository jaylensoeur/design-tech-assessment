import { defineConfig } from "tsup";

const env = process.env["NODE_ENV"];

export default defineConfig(() => ({
  dts: true,
  clean: true,
  splitting: true,
  skipNodeModulesBundle: true,
  bundle: true,
  treeshake: true,
  minify: env === "production",
  outDir: `dist/`,
  entry: ["src/components/index.ts"],
  format: ["esm"],
  external: ["react"],
  banner: { js: `"use client"` },
  tsconfig: "./tsconfig.json",
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.define = {
      ...options.define,
    };
  },
}));
