import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000, strictPort: true },
  preview: { host: "0.0.0.0", port: 8080, strictPort: true },
});
