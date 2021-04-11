<template>
  <NavModal :key="$route"/>
  <router-view />
</template>

<script>
import NavModal from "./components/NavModal";
export default {
  name: "App",
  components: {
    NavModal,
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;400&display=swap");

#app {
  font-family: "Exo 2", Helvetica, Arial, sans-serif;
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
}
</style>
