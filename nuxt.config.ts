import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-12-10",
	devtools: { enabled: true },
	devServer: {
		loadingTemplate: () => {
			return `
				<div class="flex justify-center items-center h-screen">
					<h1 class="text-3xl font-bold underline">Loading...</h1>
				</div>
			`
		}
	},

	app: {
		rootId: "app",
	},

	modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],

	vite: {
		plugins: [tailwindcss()],
	},

	css: ["~/assets/main.css"],
});
