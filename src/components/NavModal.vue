<template>
  <div class="nav-modal">
    <div class="modal-button" @click="openModal">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="modal" @click="closeModal">
      <router-link to="/" class="home-button">
        <i class="fas fa-home"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavModal",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openModal() {
      this.open = true;
      document.getElementsByClassName("nav-modal")[0].style.width =
        window.innerWidth + "px";
      document.getElementsByClassName("nav-modal")[0].style.background =
        "rgba(0,0,0,0.7)";
      document.getElementsByClassName("modal-button")[0].style.display = "none";
      document.getElementsByClassName("modal")[0].style.width = "100%";
      document.getElementsByClassName("home-button")[0].style.display = "block";
    },
    closeModal() {
      this.open = false;
      document.getElementsByClassName("nav-modal")[0].style.width = "6rem";
      document.getElementsByClassName("nav-modal")[0].style.background =
        "transparent";
      document.getElementsByClassName("modal-button")[0].style.display = "flex";
      document.getElementsByClassName("modal")[0].style.width = 0;
      document.getElementsByClassName("home-button")[0].style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-modal {
  // Position modal
  position: fixed;
  top: 0;
  right: 0;
  // Sizing
  height: 100%;
  width: 6rem;
  // Overlay
  z-index: 900;
  // Position elements
  display: flex;
  justify-content: center;
  align-items: center;
  // Add transition
  transition: all 0.3s ease;

  .modal-button {
    // Get button area
    border: 2px solid white;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    // Position elements
    display: flex;
    justify-content: center;
    align-items: center;
    // Style arrow
    color: white;
    font-size: 1rem;
    // Make button disappear
    transition: all 0.1s ease;
    // Cursor
    cursor: pointer;
  }
  .modal {
    // Sizing
    height: 100%;
    width: 0;
    // Position elements
    display: flex;
    justify-content: center;
    align-items: center;

    .home-button {
      // Default to hidden
      display: none;
      // Style icon
      color: white;
      font-size: 10rem;
      // Overlay
      z-index: 999;
      // Cursor
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        color: gray;
        transition: all 0.2s ease;
      }
    }
  }
}
</style>    