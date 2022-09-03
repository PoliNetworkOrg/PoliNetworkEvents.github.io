<template>
  <div>
    <LayoutNavigationBar />

    <div
      class="container2"
      style="padding-top: calc(6rem + 2vh + 10px); text-align: center"
    >
      <div>
        <h1>{{ $t("Errore") }} {{ error.statusCode }}</h1>
      </div>
      <div style="padding: 2rem"></div>
      <a href="/"><LayoutButton>&nbsp;{{ $t("Torna alla Home") }}&nbsp;</LayoutButton></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
