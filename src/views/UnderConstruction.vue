<template>
  <div class="main">
    <div class="title">THIS PAGE IS UNDER CONSTRUCTION</div>
    <hr class="separator" />
    <div class="subtitle">Check back later!</div>
  </div>
</template>

<script>
export default {
  name: "Under Construction",
};
</script>

<style lang="scss" scoped>
.main {
  // Set container
  position: relative;
  width: 100vw;
  height: 100vh;
  // Set colors
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/home.png");
  background-position: center;
  // Position elements
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // Prevent highlighting
  user-select: none;

  .title {
    // Typography
    font-size: 5rem;
  }

  .separator {
    // Get bar
    height: 2px;
    width: 70%;
    // Style bar
    background-color: white;
    border-radius: 100%;
    // Spacing
    margin: 1rem;
  }

  .subtitle {
    // Typography
    font-size: 2rem;
  }
}

@media screen and (max-width: 650px) {
  .main {

    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }
  }
}
</style>