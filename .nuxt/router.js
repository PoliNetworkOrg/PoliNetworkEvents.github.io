import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fd2dac5 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _27068ae8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5f21a62e = () => interopDefault(import('..\\pages\\mma2021\\index.vue' /* webpackChunkName: "pages/mma2021/index" */))
const _66d34b8d = () => interopDefault(import('..\\pages\\mma2022\\index.vue' /* webpackChunkName: "pages/mma2022/index" */))
const _73a7d336 = () => interopDefault(import('..\\pages\\signature2022\\index.vue' /* webpackChunkName: "pages/signature2022/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact-us",
    component: _2fd2dac5,
    name: "contact-us"
  }, {
    path: "/en",
    component: _27068ae8,
    name: "index___en"
  }, {
    path: "/it",
    component: _27068ae8,
    name: "index___it"
  }, {
    path: "/mma2021",
    component: _5f21a62e,
    name: "mma2021"
  }, {
    path: "/mma2022",
    component: _66d34b8d,
    name: "mma2022"
  }, {
    path: "/signature2022",
    component: _73a7d336,
    name: "signature2022"
  }, {
    path: "/en/contact-us",
    component: _2fd2dac5,
    name: "contact-us___en"
  }, {
    path: "/en/mma2021",
    component: _5f21a62e,
    name: "mma2021___en"
  }, {
    path: "/en/mma2022",
    component: _66d34b8d,
    name: "mma2022___en"
  }, {
    path: "/en/signature2022",
    component: _73a7d336,
    name: "signature2022___en"
  }, {
    path: "/it/contact-us",
    component: _2fd2dac5,
    name: "contact-us___it"
  }, {
    path: "/it/mma2021",
    component: _5f21a62e,
    name: "mma2021___it"
  }, {
    path: "/it/mma2022",
    component: _66d34b8d,
    name: "mma2022___it"
  }, {
    path: "/it/signature2022",
    component: _73a7d336,
    name: "signature2022___it"
  }, {
    path: "/",
    component: _27068ae8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
