import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const __dirname = path.resolve();

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@entities": path.resolve(__dirname, "./src/entities"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@widgets": path.resolve(__dirname, "./src/widgets"),
        },
    },
});
