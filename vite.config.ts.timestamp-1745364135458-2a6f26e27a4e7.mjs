// vite.config.ts
import { defineConfig } from "file:///C:/Users/GAMER/Desktop/roll-with-us-landing-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/GAMER/Desktop/roll-with-us-landing-main/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///C:/Users/GAMER/Desktop/roll-with-us-landing-main/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname =
  "C:\\Users\\GAMER\\Desktop\\roll-with-us-landing-main";
var vite_config_default = defineConfig(({ mode }) => ({
  base: mode === "production" ? "/NousDojoStefanoCorrea/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
    },
  },
}));
export { vite_config_default as default };
