import { defineConfig } from "astro/config";
import node from "@astrojs/node"; // Importa el adaptador de Node

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
});
