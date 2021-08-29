<template>
  <div id="skills">
    <h1 id="skills-title" class="hide">What I Know</h1>
    <div id="skills-icons" class="hide">
      <div class="skills-icon" v-for="(skill, i) in skills" :key="i">
        <img :src="require(`@/assets/img/logos/${skill.toLowerCase()}.png`)" />
        <label>{{ skill }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Node",
        "Express",
        "C++",
        "Python",
        "Git",
      ],
    };
  },
  methods: {
    // Animation functions
    handleLeftFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#skills-title").offsetTop + 100)
        document
          .getElementById("skills-title")
          .classList.add("start-left-fade");
    },
    handleBottomFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#skills-icons").offsetTop + 100)
        document
          .getElementById("skills-icons")
          .classList.add("start-bottom-fade");
    },
  },
  mounted() {
    // Constantly check if section is in viewport
    document.addEventListener("scroll", this.handleLeftFade);
    document.addEventListener("scroll", this.handleBottomFade);
  },
  beforeUnmount() {
    // Clean up
    document.removeEventListener("scroll", this.handleLeftFade);
    document.removeEventListener("scroll", this.handleBottomFade);
  },
};
</script>

<style lang="scss" scoped>
#skills {
  // Position elements
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  // Typography
  color: white;
  // Sizing
  min-height: 100vh;
  padding: 0 5%;

  .hide {
    // Hide initially
    opacity: 0;
  }

  #skills-title {
    // Spacing
    margin-bottom: 32px;
    // Typography
    font-size: clamp(3rem, 2.444rem + 1.778vw, 4rem);
    font-weight: 200;
    // Alignment
    text-align: left;
    // Underline
    border-bottom: 2px solid white;
    padding-bottom: 32px;
    padding-right: 64px;
  }

  #skills-icons {
    // Flexbox for layout
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    // Wrap to next line
    flex-wrap: wrap;
    // Sizing
    width: 100%;
    // Spacing
    margin-top: 32px;

    .skills-icon {
      // Flexbox for layout
      display: flex;
      flex-direction: column;
      align-items: center;
      // Spacing
      margin: 32px 5%;

      img {
        // Sizing
        height: 96px;
        // Spacing
        margin-bottom: 16px;
      }

      label {
        // Typography
        font-size: 1.1rem;
        letter-spacing: 0.05em;
      }
    }
  }

  // Animation classes
  .start-left-fade {
    --animate: 1s ease forwards;
    // Animate
    animation: fadeInLeft var(--animate);
    -webkit-animation: fadeInLeft var(--animate);
    -moz-animation: fadeInLeft var(--animate);
    -ms-animation: fadeInLeft var(--animate);
    -o-animation: fadeInLeft var(--animate);
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
}

// Animations
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

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
  #skills > #skills-icons > .skills-icon {
    // Smooth animation
    transition: transform 0.2s ease;

    &:hover {
      // Animate
      transform: scale(1.1);

      img {
        // Clear greyscale
        filter: none;
      }
    }

    img {
      // Dim logo
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
      filter: grayscale(1) brightness(70%); /* Microsoft Edge and Firefox 35+ */
    }
  }
}

// Smaller layouts
@media screen and (max-width: $laptop-l) {
  #skills > #skills-icons > .skills-icon {
    // Respace
    margin: 4%;
  }
}

@media screen and (max-width: $laptop) {
  #skills > #skills-icons > .skills-icon > img {
    // Resize
    height: 72px;
  }
}

@media screen and (max-width: $tablet) {
  #skills {
    // Realign
    align-items: center;

    #skills-title {
      // Underline
      border-bottom: 2px solid white;
      padding: 0 16px;
      padding-bottom: 16px;
    }

    #skills-icons > .skills-icon {
      // Respace
      margin: 16px;

      img {
        // Resize
        height: 48px;
      }
    }
  }
}

@media screen and (max-width: $tablet) {
  #skills > #skills-icons > .skills-icon {
    // Respace
    margin: 16px;

    img {
      // Resize
      height: 48px;
    }
  }
}
</style>