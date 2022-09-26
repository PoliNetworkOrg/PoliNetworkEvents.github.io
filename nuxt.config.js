export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",
  
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
	  title: "PoliNetworkEvents",
	  htmlAttrs: {
		lang: "en",
	  },
	  meta: [
		{ charset: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ hid: "description", name: "description", content: "" },
	  ],
	  link: [{ rel: "icon", type: "image/x-icon", href: "/img/icon.png" }],
	  script: [
		{
		  src: "/jquery/jquery.min.js",
		  type: "text/javascript",
		},
		{
		  src: "/js/bootstrap.bundle.min.js",
		  type: "text/javascript",
		},
		{
		  src: "/js/custom.js",
		  type: "text/javascript",
		},
	  ],
	},
  
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	  "~/assets/bootstrap/bootstrap.css",
	  "~/assets/bootstrap/style.css",
	  "~/assets/css/style.css",
	],
  
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],
  
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
  
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],
  
	build: {
	  babel: {
		presets({ isServer }) {
		  const targets = isServer ? { node: "current" } : { ie: 11 };
		  return [[require.resolve("@babel/preset-env"), { targets }]];
		},
		plugins: [
		  "@babel/syntax-dynamic-import",
		  "@babel/transform-runtime",
		  "@babel/transform-async-to-generator",
		],
	  },
	},
  
	modules: ["nuxt-i18n"],
  
	i18n: {
	  locales: [
		{
		  code: "en",
		  name: "English",
		  file: "en.js",
		},
		{
		  code: "it",
		  name: "Italiano",
		  file: "it.js",
		},
	  ],
	  strategy: "prefix",
	  langDir: "lang/",
	  defaultLocale: "it",
	  vueI18n: {
		fallbackLocale: "it",
	  },
	},
	i18nEasy: {
	  directories: [
		// default directories for search
		"./layouts",
		"./pages",
		"./components",
	  ],
	  files: ["*.vue", "*.js"], // default files
	  sourceLanguage: "it", // default source language
	},
  };
  