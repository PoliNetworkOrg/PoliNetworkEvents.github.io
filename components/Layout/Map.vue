<template>
  <div>
    <div class="titleMap">{{ "📌 " + where }}</div>
    <iframe
      class="map"
      :src="
        'https://maps.google.com/maps?q=' +
        encodeURIComponent(where) +
        '&t=&z=15&ie=UTF8&iwloc=&output=embed'
      "
      frameborder="20"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    where: {
      type: String,
      default: "",
      require: false,
    },
  },
};
</script>

<style>
.map {
  border-radius: 20px;
  width: 100%;
  height: auto;
  min-height: 20rem;
  min-width: 20rem;
  padding: 0rem;
}

.titleMap {
  text-align: center;
  font-weight: bold;
  font-size: calc(1px + 0.7rem + 0.2vw);
  padding-bottom: 0.3rem;
}
</style>