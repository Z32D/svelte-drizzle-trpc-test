import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from "@sveltejs/enhanced-img";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		visualizer({
			emitFile: true,
			filename: "stats.html",
		}),
	]
});
