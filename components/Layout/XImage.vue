<template>
  <div>
    <img :src="imageUrl" :class="classParam" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
    classParam: {
      type: String,
      default: "",
    },
  },
};
</script>
