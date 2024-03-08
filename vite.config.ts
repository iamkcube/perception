import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@landingpage": resolve(__dirname, "./src/components/LandingPage/"),
			"@eventspage": resolve(__dirname, "./src/components/EventsPage/"),
			"@loginsignuppage": resolve(__dirname, "./src/components/LoginSignupPage/"),
			"@merchpage": resolve(__dirname, "./src/components/MerchPage/"),
			"@utils": resolve(__dirname, "./src/utils/"),
			"@pages": resolve(__dirname, "./src/pages/"),
			"@assets": resolve(__dirname, "./src/assets/"),
			"@api": resolve(__dirname, "./src/api/"),
			"@components": resolve(__dirname, "./src/components/"),
			"@": resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "build",
		sourcemap: true,
	},
});
