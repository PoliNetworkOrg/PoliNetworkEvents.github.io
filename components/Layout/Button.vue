<template>
  <div class="buttonContainer">
    <button class="button">
      <slot />
    </button>
  </div>
</template>

<style scoped>
.buttonContainer {
  width: 100%;
}

.button {
  overflow: hidden;
  border-radius: 0.6em;
  padding: 1em 2em;
  background-color: #1156ae;
  color: white;
  cursor: pointer;
  border: 0;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);
  position: relative;
  width: 100%;
  word-wrap: break-word;
  background-clip: border-box;
  box-sizing: border-box;
  font-weight: bold;
}
.button:hover {
  background-color: #0c3c7d;
}
</style>
