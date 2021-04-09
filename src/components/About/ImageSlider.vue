<template>
  <div class="image-slider">
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
    variant: {
      type: String,
    },
  },
  methods: {
    formatString() {
      if (this.variant == "lifeStory") return "Life Story";
      else if (this.variant == "passions") return "Passions";
      else return "Hobbies";
    },
  },
};
</script>

<style lang="scss" scoped>
.image-slider {
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
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

  // For desktop
  &:hover .overlay {
    width: 100%;
  }
  &:hover .img {
    width: 0;
  }

  // For mobile
  &:active .overlay {
    width: 100%;
  }
  &:active .img {
    width: 0;
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