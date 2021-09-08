<template>
  <div id="about">
    <h1 id="about-title" class="hide">Who I Am</h1>
    <div id="about-content" class="hide">
      <img src="@/assets/img/about.png" alt="" />
      <p>
        Hi, I'm Charles Zhang, a Computer Science major in UCLA's class of '23.
        I have a year's worth of experience developing full-stack web
        applications, with a focus in front-end development. As I move on in my
        career, I look forward to continuing to discover ways that computer
        science can help make the world a better place, and hope to put myself
        in a position to be a part of that change.
        <br />
        <br />
        Outside of computer science, I'm a big fan of video games, tennis, and
        the NBA (go Dubs). I also do a little bit of magic and creative writing
        here and there, but none of that will <em>ever</em> be shown to the
        public.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    // Animation functions
    handleRightFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#about-title").offsetTop + 100)
        document
          .getElementById("about-title")
          .classList.add("start-right-fade");
    },
    handleBottomFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#about-content").offsetTop + 100)
        document
          .getElementById("about-content")
          .classList.add("start-bottom-fade");
    },
  },
  mounted() {
    // Constantly check if section is in viewport
    document.addEventListener("scroll", this.handleRightFade);
    document.addEventListener("scroll", this.handleBottomFade);
  },
  beforeUnmount() {
    // Clean up
    document.removeEventListener("scroll", this.handleRightFade);
  },
};
</script>

<style lang="scss" scoped>
#about {
  // Position elements
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  // Typography
  color: white;
  // Sizing
  min-height: 100vh;
  // Container spacing
  padding: 0 5%;

  .hide {
    // Hide initially
    opacity: 0;
  }

  #about-title {
    // Spacing
    margin: 32px;
    // Typography
    font-size: clamp(3rem, 2.444rem + 1.778vw, 4rem);
    font-weight: 200;
    // Underline
    border-bottom: 2px solid white;
    padding-bottom: 32px;
    padding-left: 64px;
  }

  #about-content {
    // Centering
    margin: 0 auto;
    // Flexbox for layout
    display: flex;
    justify-content: center;
    align-items: center;
    // Sizing
    width: 80%;

    img {
      // Spacing
      margin-right: 64px;
    }

    p {
      // Centering + spacing
      margin: 32px auto;
      // Typography
      font-size: calc(clamp(1.2rem, 1.008rem + 0.769vw, 1.5rem));
      letter-spacing: 0.05em;
      line-height: 1.7;
      // Alignment
      text-align: left;
    }
  }

  // Animation classes
  .start-right-fade {
    --animate: 1s ease forwards;
    // Animate
    animation: fadeInRight var(--animate);
    -webkit-animation: fadeInRight var(--animate);
    -moz-animation: fadeInRight var(--animate);
    -ms-animation: fadeInRight var(--animate);
    -o-animation: fadeInRight var(--animate);
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
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
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

// Workaround for background attachment on mobile
@media (hover: none) {
  #about {
    background-attachment: initial;
  }
}

// Smaller layouts
@media screen and (max-width: 1439px) {
  #about > #about-content {
    // Column layout
    flex-direction: column;
    // Resize
    width: 90%;

    img {
      // Respace
      margin: 0;
    }
  }
}

@media screen and (max-width: $tablet) {
  #about {
    // Realign
    align-items: center;

    #about-title {
      // Underline
      border-bottom: 2px solid white;
      padding: 0 16px;
      padding-bottom: 16px;
    }

    #about-content {
      img {
        // Resize
        height: 256px;
      }

      p {
        // Resize font
        letter-spacing: 0;
      }
    }
  }
}
</style>
