export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'PoliNetwork Events 🥳',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/img/icon.png' }
		],
		script: [
			{
				src: "/jquery/jquery.min.js",
				type: "text/javascript"
			},
			{
				src: "/js/bootstrap.bundle.min.js",
				type: "text/javascript"
			},
			{
				src: "/js/custom.js",
				type: "text/javascript"
			},
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/bootstrap/bootstrap.css',
		'~/assets/bootstrap/style.css',
		'~/assets/css/style.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	modules: [
		'@nuxtjs/i18n',
	],
	i18n: {
		strategy: 'prefix',
		langDir: 'locales/',
		locales: [
		  {
			code: 'en',
			iso: 'en-US',
			file: 'en-US.js',
			isCatchallLocale: true
		  },
		  {
			code: 'it',
			iso: 'it-IT',
			file: 'it-IT.js'
		  }
		],
		defaultLocale: 'it',
		vueI18n: {
		  fallbackLocale: 'it'
		}
	  },

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		babel: {
			presets({ isServer }) {
				const targets = isServer ? { node: 'current' } : { ie: 11 }
				return [
					[require.resolve("@babel/preset-env"), { targets }]
				]
			},
			plugins: [
				"@babel/syntax-dynamic-import",
				"@babel/transform-runtime",
				"@babel/transform-async-to-generator"
			]
		}
	}
}
