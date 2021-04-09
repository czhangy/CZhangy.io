<template>
  <div class="image-slider" @click="handleClick">
    <div class="img">{{ formatString() }}</div>
    <div class="overlay">
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  props: {
    content: {
      type: String,
    },
    id: {
      type: null,
    },
  },
  methods: {
    formatString() {
      if (this.id == "0") return "Life Story";
      else if (this.id == "1") return "Passions";
      else return "Hobbies";
    },
    handleClick() {
      this.open = !this.open;
      if (this.open) {
        document.getElementsByClassName("img")[this.id].style.width = "0";
        document.getElementsByClassName("overlay")[this.id].style.width =
          "100%";
      } else {
        document.getElementsByClassName("img")[this.id].style.width = "100%";
        document.getElementsByClassName("overlay")[this.id].style.width = "0";
      }
    },
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.image-slider {
  // Set up slider
  position: relative;
  width: 100%;
  height: 50%;
  // Position elements
  display: flex;
  justify-content: center;
  align-items: center;
  // Clickable
  cursor: pointer;

  .img {
    // Set up block
    display: block;
    width: 100%;
    min-height: 100%;
    // For slide
    transition: 0.1s ease;
    overflow: hidden;
    // Typography
    text-align: center;
    font-size: 5rem;
    text-decoration: underline;
  }

  .overlay {
    // For slide
    transition: 0.1s ease;
    overflow: hidden;
    // Sizing
    width: 0;
    height: 45vh;
    // Position element
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      // Typography
      font-size: 2rem;
      text-align: left;
    }
  }
}

// Media queries
@media screen and (max-width: 1400px) {
  .image-slider {
    .overlay {
      .content {
        font-size: 1.5rem;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .image-slider {
    .img {
      font-size: 3rem;
    }
    .overlay {
      .content {
        font-size: 1.2rem;
      }
    }
  }
}

@media screen and (max-width: 625px) {
  .image-slider {
    .overlay {
      .content {
        font-size: 0.9rem;
      }
    }
  }
}
</style>