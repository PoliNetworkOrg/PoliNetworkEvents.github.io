export { default as LayoutButton } from '../..\\components\\Layout\\Button.vue'
export { default as LayoutDescrizione } from '../..\\components\\Layout\\Descrizione.vue'
export { default as LayoutFooter } from '../..\\components\\Layout\\Footer.vue'
export { default as LayoutFrame } from '../..\\components\\Layout\\Frame.vue'
export { default as LayoutHorizontalLine } from '../..\\components\\Layout\\HorizontalLine.vue'
export { default as LayoutLogo } from '../..\\components\\Layout\\Logo.vue'
export { default as LayoutMap } from '../..\\components\\Layout\\Map.vue'
export { default as LayoutNavigationBar } from '../..\\components\\Layout\\NavigationBar.vue'
export { default as LayoutQuestion } from '../..\\components\\Layout\\Question.vue'
export { default as LayoutXImage } from '../..\\components\\Layout\\XImage.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
