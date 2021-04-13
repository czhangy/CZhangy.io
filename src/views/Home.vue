<template>
  <div class="home">
    <div class="home-picture"></div>
    <div class="home-text">
      <h1 class="home-title">CZHANGY.IO</h1>
      <hr class="separator" />
      <div class="home-nav">
        <a
          href="https://github.com/czhangy"
          class="social-icon"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/charles-zhang-14746519b/"
          class="social-icon"
          target="_blank"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a
          href="https://twitter.com/czhangy_"
          class="social-icon"
          target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          href="https://www.facebook.com/charles.zhang.14268769/"
          class="social-icon"
          target="_blank"
          ><i class="fab fa-facebook"></i
        ></a>
        <a
          href="https://www.instagram.com/c.zhangg/"
          class="social-icon"
          target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
      </div>
      <hr class="separator" />
      <div class="home-nav">
        <router-link to="/skills" class="home-link">SKILLS</router-link>
        <router-link to="/projects" class="home-link">PROJECTS</router-link>
        <router-link to="/about" class="home-link">ABOUT</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  // Set container
  position: relative;
  width: 100vw;
  height: 100vh;
  // Set colors
  color: white;
  // Position elements
  display: flex;
  align-items: center;
  justify-content: center;
  // Prevent highlighting
  user-select: none;
  // Background
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/home.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .home-text {
    // Position elements
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .home-title {
      // Spacing
      margin: 1rem 0;
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

    .home-nav {
      // Position elements
      display: flex;
      justify-content: center;
      // Get content area
      width: 70%;
      // Spacing
      margin: 1rem 0;

      .home-link {
        // Spacing
        margin: 0 clamp(0.2rem, -0.274rem + 1.684vw, 1.2rem);
        padding: 0.6rem 0.4rem;
        height: 3rem;
        // Typography
        font-size: clamp(1.25rem, 1.132rem + 0.421vw, 1.5rem);
        text-decoration: none;
        color: white;
        // For hover
        border-bottom: 1px solid transparent;
        transition: all ease-in-out 0.3s;
      }

      .social-icon {
        // Styling
        font-size: clamp(1.5rem, 1.263rem + 0.842vw, 2rem);
        color: white;
        // Clickable
        cursor: pointer;
        // Spacing
        margin: 0 clamp(0.5rem, 0.026rem + 1.684vw, 1.5rem);
        // For hover
        transition: all ease-in-out 0.3s;
      }
    }
  }

  .home-picture {
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
}

// Media Queries
// Column layout
@media screen and (max-width: 1400px) {
  .home {
    flex-direction: column;

    .home-picture {
      margin: 2rem 0;
    }
  }
}

// Handle sticky hover
@media (hover: hover) {
  .home {
    .home-text {
      .home-nav {
        .home-link {
          &:hover {
            // Highlight
            border-color: white;
            transform: scale(1.1);
          }
        }

        .social-icon {
          &:hover {
            transform: scale(1.1);
          }
          .fa-github {
            &:hover {
              color: $github-primary;
            }
          }
          .fa-linkedin {
            &:hover {
              color: $linkedin-primary;
            }
          }
          .fa-twitter {
            &:hover {
              color: $twitter-primary;
            }
          }
          .fa-facebook {
            &:hover {
              color: $facebook-primary;
            }
          }
          .fa-instagram {
            &:hover {
              color: $instagram-primary;
            }
          }
        }
      }
    }
  }
}
</style>
