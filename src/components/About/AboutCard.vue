<template>
  <div class="about-card" @click="handleClick">
    <div class="about-card-content">
      <div class="about-card-front">
        <div class="about-card-title">
          {{ formatString() }}
        </div>
      </div>
      <div class="about-card-back">
        <p class="about-card-body">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
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
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) {
        document.getElementsByClassName("about-card-content")[
          this.id
        ].style.transform = "rotateX(0.5turn)";
      } else
        document.getElementsByClassName("about-card-content")[
          this.id
        ].style.transform = "none";
    },
  },
  data() {
    return {
      isFlipped: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-card {
  // Set up card
  position: relative;
  width: 100%;
  height: 100%;
  // Clickable
  cursor: pointer;

  .about-card-content {
    // Sizing
    width: 100%;
    height: 100%;
    position: relative;
    // Position elements
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s;
    // Allow for 3D transforms
    transform-style: preserve-3d;
  }

  .about-card-front {
    // Positioning
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // Hide backwards text
    backface-visibility: hidden;
    // Position elements
    display: flex;
    justify-content: center;
    align-items: center;

    .about-card-title {
      // Typography
      font-size: clamp(3rem, 2.053rem + 3.368vw, 5rem);
      text-decoration: underline;
    }
  }

  .about-card-back {
    // Positioning
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // Flip text
    transform: rotateX(0.5turn);
    // Hide backwards text
    backface-visibility: hidden;
    // Position elements
    display: flex;
    justify-content: center;
    align-items: center;

    .about-card-body {
      // Typography
      font-size: clamp(0.8rem, 0.374rem + 1.516vw, 1.7rem);
      text-align: left;
    }
  }
}

// Media queries
@media screen and (max-width: 950px) {
  .about-card {
    .about-card-content {
      .about-card-back {
        .about-card-body {
          line-height: 1.5;
        }
      }
    }
  }
}

@media screen and (max-width: 625px) {
  .about-card {
    .about-card-content {
      .about-card-back {
        .about-card-body {
          line-height: 1.6;
        }
      }
    }
  }
}
</style>