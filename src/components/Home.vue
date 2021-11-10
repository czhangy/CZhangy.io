<template>
  <div id="home">
    <div id="home-picture" />
    <div id="home-text">
      <h1 id="home-title">Hi, I'm Charles.</h1>
      <hr class="separator" />
      <div class="nav-row">
        <a
          href="https://github.com/czhangy"
          class="social-icon"
          target="_blank"
        >
          <i class="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/charles-zhang-14746519b/"
          class="social-icon"
          target="_blank"
          ><i class="fab fa-linkedin" /></a>
        <a
          href="https://twitter.com/czhangy_"
          class="social-icon"
          target="_blank"
          ><i class="fab fa-twitter" /></a>
        <a
          href="https://www.facebook.com/charles.zhang.14268769/"
          class="social-icon"
          target="_blank"
          ><i class="fab fa-facebook" /></a>
        <a
          href="https://www.instagram.com/c.zhangg/"
          class="social-icon"
          target="_blank"
          ><i class="fab fa-instagram" /></a>
      </div>
      <hr class="separator" />
      <div class="nav-row">
        <button class="nav-button" @click="onClick('about')">ABOUT</button>
        <button class="nav-button" @click="onClick('skills')">SKILLS</button>
        <button class="nav-button" @click="onClick('projects')">
          PROJECTS
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  // Sizing
  width: 100vw;
  height: 100vh;
  // Set colors
  color: white;
  // Position elements
  display: flex;
  align-items: center;
  justify-content: center;

  #home-picture {
    // Sizing
    height: clamp(15rem, 7.895rem + 25.263vw, 30rem);
    width: clamp(15rem, 7.895rem + 25.263vw, 30rem);
    // Image
    background-image: url("~@/assets/img/headshot.jpeg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    // Border
    border-radius: 100%;
    border: solid white 3px;
    // Centering
    margin-right: 6rem;
  }

  #home-text {
    // Position elements
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #home-title {
      // Spacing
      margin: 16px 0;
      // Typography
      font-size: clamp(3rem, 2.444rem + 1.778vw, 4rem);
      font-weight: 250;
    }

    .separator {
      // Get bar
      height: 2px;
      width: 70%;
      // Style bar
      background-color: white;
    }

    .nav-row {
      // Position elements
      display: flex;
      justify-content: center;
      // Get content area
      width: 70%;
      // Spacing
      margin: 16px 0;

      .social-icon {
        // Styling
        font-size: clamp(1.5rem, 1.263rem + 0.842vw, 2rem);
        color: white;
        // Clickable
        cursor: pointer;
        // Spacing
        margin: 0 clamp(0.5rem, 0.026rem + 1.684vw, 1.5rem);
        // Smooth animation
        transition: transform ease-in-out 0.3s;
      }

      .nav-button {
        // Spacing
        margin: 0 clamp(0.2rem, -0.274rem + 1.684vw, 1.2rem);
        padding: 0.6rem 0.4rem;
        height: 3rem;
        // Typography
        font-family: $main-font;
        font-size: clamp(1.25rem, 1.132rem + 0.421vw, 1.5rem);
        text-decoration: none;
        color: white;
        // Smooth animation
        transition: transform ease-in-out 0.3s;
        // Remove default styling
        background: transparent;
        border: none;
        // Clickable
        cursor: pointer;
      }
    }
  }
}

// Smaller layout
@media screen and (max-width: 1400px) {
  #home {
    // Column layout
    flex-direction: column;

    #home-picture {
      // Respace
      margin: 32px 0;
    }
  }
}

// Handle sticky hover
@media (hover: hover) {
  #home > #home-text > .nav-row {
    .nav-button:hover {
      // Animate
      transform: scale(1.1);
    }

    .social-icon {
      // Animate
      &:hover {
        transform: scale(1.1);
      }

      .fa-github:hover {
        color: $github-primary;
      }

      .fa-linkedin:hover {
        color: $linkedin-primary;
      }

      .fa-twitter:hover {
        color: $twitter-primary;
      }

      .fa-facebook:hover {
        color: $facebook-primary;
      }

      .fa-instagram:hover {
        color: $instagram-primary;
      }
    }
  }
}
</style>
