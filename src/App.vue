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
  // Background
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/home.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
