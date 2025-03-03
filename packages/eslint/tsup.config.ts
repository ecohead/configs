import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts"],
	format: "esm",
	target: "esnext",
	dts: true,
	clean: true,
	outDir: "lib",
	bundle: false,
	platform: "node",
});
