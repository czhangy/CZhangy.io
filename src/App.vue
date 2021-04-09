<template>
  <NavModal />
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
  background-color: black;
}

// .home-button {
//   font-size: 3rem;
//   color: white;
//   // Place in top corner
//   position: fixed;
//   top: 3rem;
//   right: 5rem;
//   z-index: 999;

//   &:hover {
//     color: gray;
//     transform: scale(1.1);
//   }
// }

@media screen and (max-width: 900px) {
  .home-button {
    font-size: 2.5rem;

    top: 2rem;
    right: 3.5rem;
  }
}

@media screen and (max-width: 650px) {
  .home-button {
    font-size: 2rem;

    top: 2rem;
    right: 2rem;
  }
}
</style>
