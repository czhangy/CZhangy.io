<template>
  <div class="project-card hide">
    <div class="card-header">
      <p class="card-name">{{ project.name }}</p>
      <div class="card-icons">
        <a class="card-icon github-icon" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a class="card-icon link-icon" target="_blank">
          <i class="fas fa-link"></i>
        </a>
      </div>
    </div>
    <p class="card-category">{{ project.category }}</p>
    <hr />
    <div class="card-tags">
      <Tag :name="tag" v-for="(tag, i) in project.tags" :key="i" />
    </div>
  </div>
</template>

<script>
// Import local components
import Tag from "./Tag.vue";

export default {
  name: "ProjectCard",
  components: {
    Tag,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleLinkAssignment: function () {
      /* eslint no-unexpected-multiline: "off" */
      if (this.project.links[0].length > 0)
        document
          .getElementsByClassName("github-icon")
          [this.index].setAttribute("href", this.project.links[0]);
      else
        document.getElementsByClassName("github-icon")[
          this.index
        ].style.display = "none";
      if (this.project.links[1].length > 0)
        document
          .getElementsByClassName("link-icon")
          [this.index].setAttribute("href", this.project.links[1]);
      else
        document.getElementsByClassName("link-icon")[this.index].style.display =
          "none";
    },
    // Animation function
    handleBottomFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (
        top >
        document.getElementsByClassName("project-card")[this.index].offsetTop +
          100
      )
        document
          .getElementsByClassName("project-card")
          [this.index].classList.add("start-bottom-fade");
    },
  },
  mounted() {
    // Bind available hrefs to links
    this.handleLinkAssignment();
    // Constantly check if section is in viewport
    document.addEventListener("scroll", this.handleBottomFade);
  },
  beforeUnmount() {
    // Clean up
    document.removeEventListener("scroll", this.handleBottomFade);
  },
};
</script>

<style lang="scss" scoped>
// Special font
@import url("https://fonts.googleapis.com/css?family=Oswald:400,700");

.project-card {
  // Sizing
  width: calc(min(80%, 700px));
  // Centering + spacing
  margin: 48px auto;
  // Card styling
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.6);
  // Border
  box-shadow: 0 0 30px $glow-color;
  // Inner spacing
  padding: 16px 24px;

  .card-header {
    // Flexbox for layout
    display: flex;
    justify-content: space-between;
    align-items: center;
    // Typography
    color: white;
    text-transform: uppercase;
    font-size: calc(clamp(1rem, -0.141rem + 2.381vw, 2rem));
    text-align: left;
    font-family: Oswald;
    font-weight: bold;
    // Spacing
    margin: 8px 0;

    .card-icons {
      --icon-size: calc(clamp(1rem, 0.429rem + 1.19vw, 1.5rem));
      // Centering
      line-height: var(--icon-size);

      .card-icon {
        // Spacing
        margin-left: 16px;
        // Icon styling
        color: white;
        font-size: var(--icon-size);
      }
    }
  }

  hr {
    // Sizing
    width: 40%;
  }

  .card-category {
    // Typography
    font-size: 1rem;
    text-transform: uppercase;
    font-family: Oswald;
    // Alignment
    text-align: left;
    // Spacing
    margin-bottom: 8px;
  }

  .card-tags {
    // Flexbox for layout
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    // Sizing
    width: 100%;
    // Spacing
    margin-top: 16px;
  }
}

.hide {
  // Hide initially
  opacity: 0;
}

.start-bottom-fade {
  --animate: 2s ease forwards;
  // Animate
  animation: fadeInBottom var(--animate);
  -webkit-animation: fadeInBottom var(--animate);
  -moz-animation: fadeInBottom var(--animate);
  -ms-animation: fadeInBottom var(--animate);
  -o-animation: fadeInBottom var(--animate);
}

// Animations
@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

// Sticky hover
@media (hover: hover) {
  .project-card > .card-header > .card-icons > .card-icon {
    &:hover {
      // Animate
      color: $glow-color;
    }
  }
}
</style>