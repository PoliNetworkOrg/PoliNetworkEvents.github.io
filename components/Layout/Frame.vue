<template>
  <div :class="classParam" :style="styleParam">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    classParam: {
      type: String,
      default: "",
    },
    styleParam: {
      type: String,
      default: "",
    },
  },
};
</script>
