<template>
  <div class="about-card" @click="handleClick">
    <div class="card-content">
      <div class="card-front">
        <div class="card-title">
          {{ formatString() }}
        </div>
      </div>
      <div class="card-back">
        <div class="card-body">{{ content }}</div>
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
        document.getElementsByClassName("card-content")[
          this.id
        ].style.transform = "rotateX(0.5turn)";
      } else
        document.getElementsByClassName("card-content")[
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

  .card-content {
    // Sizing
    width: 100%;
    height: 100%;
    position: relative;
    // Position elements
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 1s;
    // Allow for 3D transforms
    transform-style: preserve-3d;
  }

  .card-front {
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

    .card-title {
      // Typography
      font-size: clamp(3rem, 2.053rem + 3.368vw, 5rem);
      text-decoration: underline;
    }
  }

  .card-back {
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

    .card-body {
      // Typography
      font-size: clamp(0.8rem, 0.374rem + 1.516vw, 1.7rem);
      text-align: left;
    }
  }
}

// Media queries
@media screen and (max-width: 950px) {
  .about-card {
    .card-content {
      .card-back {
        .card-body {
          line-height: 1.5;
        }
      }
    }
  }
}

@media screen and (max-width: 625px) {
  .about-card {
    .card-content {
      .card-back {
        .card-body {
          line-height: 1.6;
        }
      }
    }
  }
}
</style>