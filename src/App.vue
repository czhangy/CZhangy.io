<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;400&display=swap");

#app {
  font-family: $main-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

// Clean up bounce on mobile
html {
  background: black;
  height: 100%;
  // Set custom scrollbar
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
    position: relative;

    &-track {
      cursor: pointer;
    }

    &-thumb {
      background: #aaa;
      border-radius: 12px;

      &:hover {
        background: #999;
      }
    }
  }
}

body {
  height: 100%;
}
</style>
