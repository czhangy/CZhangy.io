<template>
  <div class="skills">
    <div class="title">MY UH... TALENTS?</div>
    <hr class="separator" />
    <div class="text">
        I have none lol.
        (jk this page is in development)
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style lang="scss" scoped>
.skills {
  position: relative;
  // Position elements
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // Background
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/home.png");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  // Typography
  color: white;
  // Prevent highlighting
  user-select: none;

  .title {
    // Spacing
    margin: 2rem;
    // Typography
    font-size: 4rem;
  }

  .separator {
    // Get bar
    height: 2px;
    width: 60%;
    // Style bar
    background-color: white;
  }
}
</style>