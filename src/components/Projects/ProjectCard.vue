<template>
  <div class="project-card" @click="handleClick">
    <div class="project-card-content">
      <div class="project-card-front" :style="inlineStyling">
        <h3 class="project-card-title">
          {{ project.name }}
        </h3>
        <p class="project-card-subtitle">
          {{ project.tag }}
        </p>
      </div>
      <div class="project-card-back">
        <div class="project-card-header">
          <a class="card-icon github-icon" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a class="card-icon link-icon" target="_blank">
            <i class="fas fa-link"></i>
          </a>
        </div>
        <hr class="separator" />
        <p class="project-card-body">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
    },
    index: {
      type: null,
    },
  },
  computed: {
    bgImage() {
      if (this.index == 0) {
        return require("../../assets/img/projects/bruinbyte.jpg");
      } else if (this.index == 1) {
        return require("../../assets/img/projects/bruinshack.jpg");
      } else if (this.index == 2) {
        return require("../../assets/img/projects/hypepong.jpg");
      } else {
        return 0;
      }
    },
    inlineStyling() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
  mounted() {
      /* eslint no-unexpected-multiline: "off" */
      if (this.project.links[0].length > 0)
    document
      .getElementsByClassName("github-icon")
      [this.index].setAttribute("href", this.project.links[0]);
      if (this.project.links[1].length > 0)
    document
      .getElementsByClassName("link-icon")
      [this.index].setAttribute("href", this.project.links[1]);
  },
  methods: {
    handleClick() {
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) {
        document.getElementsByClassName("project-card-content")[
          this.index
        ].style.transform = "rotateY(0.5turn)";
      } else
        document.getElementsByClassName("project-card-content")[
          this.index
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
@import url("https://fonts.googleapis.com/css?family=Oswald:400,700");

.project-card {
  // Sizing
  height: 30rem;
  width: 25rem;
  // Typography
  font-family: "Oswald", sans-serif;
  // Spacing
  margin: 5rem 5rem;
  // Cursor
  cursor: pointer;

  .project-card-content {
    // Typography
    text-align: center;
    // Positioning
    position: relative;
    // Spacing
    padding: 15em 5em;
    // Animation
    transition: transform 2s;
    transform-style: preserve-3d;
    box-shadow: 0 0 30px #2187e7b3;


    .project-card-front,
    .project-card-back {
      // Positioning
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      // Spacing
      padding: 0 3em;
      // Position elements
      display: grid;
      align-content: center;
      // Hide backwards text
      backface-visibility: hidden;
      // Animation
      transform-style: preserve-3d;
    }

    .project-card-front {
      // Background
      background-color: $card-color;
      background-size: cover;
      background-blend-mode: overlay;
      background-position: center;
      // For border
      color: #333;

      .project-card-title {
        // Typography
        font-size: 3rem;
        margin: 2rem 0;
        color: white;
        text-shadow: 2px 2px black;
        text-transform: uppercase;
        // Bring into 3d space
        transform: $level-three;
      }

      .project-card-subtitle {
        // Bring into 3d space
        transform: $level-two;
        // Typography
        text-transform: uppercase;
        letter-spacing: 4px;
        font-size: 1rem;
        font-weight: 700;
        color: white;
        text-shadow: 1px 1px black;
      }

      &:before {
        // Positioning;
        content: "";
        position: absolute;
        top: 1em;
        bottom: 1em;
        left: 1em;
        right: 1em;
        // Border
        border: 3px solid black;
        // Bring into 3d space
        transform: $level-one;
      }
    }

    .project-card-back {
      // Animate
      transform: rotateY(0.5turn);
      // Typography
      color: $card-color;
      // Background
      background: #333;
      // Border
      border: 3px solid white;
      // Position elements
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .project-card-header {
        // Position elements
        display: flex;
        align-items: center;
        justify-content: center;
        // Sizing icons
        font-size: 2rem;
        // Bring to 3d space
        transform: $level-one;

        .card-icon {
          color: $card-color;
          margin: 0 3rem;
        }
      }

      .separator {
        // Get bar
        height: 2px;
        width: 60%;
        margin: 0.6rem 0;
      }

      .project-card-body {
        // Bring into 3d space
        transform: $level-two;
        // Typography
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.6;
        text-align: left;
        margin-bottom: 2rem;
      }
    }
  }
}

// Handle sticky hover
@media (hover: hover) {
  .project-card {
    .project-card-content {
      .project-card-back {
        .project-card-header {
          .card-icon {
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
}

// Mobile sizing
</style>