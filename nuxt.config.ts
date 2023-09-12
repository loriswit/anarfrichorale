export default defineNuxtConfig({
    app: {
        head: {
            title: "Chorale Anarchiste de Fribourg",
            htmlAttrs: { lang: "fr" },
            meta: [{ name: "theme-color", content: "#14111c" }],
        },
    },
    modules: ["nuxt-icon", "@pinia/nuxt"],
    runtimeConfig: {
        public: {
            apiBase: undefined,
            assetsBase: undefined,
        },
    },
})
