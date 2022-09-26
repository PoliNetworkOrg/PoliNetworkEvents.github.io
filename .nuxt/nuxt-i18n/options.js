import locale777d96b6 from '../..\\lang\\it.js'
import locale77427e78 from '../..\\lang\\en.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"it"},
  vueI18nLoader: false,
  locales: [{"code":"en","name":"English","file":"en.js"},{"code":"it","name":"Italiano","file":"it.js"}],
  defaultLocale: "it",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: false,
  langDir: "D:\\git\\PoliNetwork\\PoliNetworkEvents.github.io\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","name":"English","file":"en.js"},{"code":"it","name":"Italiano","file":"it.js"}],
  localeCodes: ["en","it"],
}

export const localeMessages = {
  'it.js': () => Promise.resolve(locale777d96b6),
  'en.js': () => Promise.resolve(locale77427e78),
}
