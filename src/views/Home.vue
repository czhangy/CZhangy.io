<template>
  <div class="home">
    <div class="picture"></div>
    <div class="text">
      <div class="title anim-text-flow">CZHANGY.IO</div>
      <hr class="separator" />
      <div class="nav">
        <router-link to="/under-construction" class="link">SKILLS</router-link>
        <router-link to="/under-construction" class="link"
          >PROJECTS</router-link
        >
        <router-link to="/about" class="link">ABOUT</router-link>
      </div>
      <hr class="separator" />
      <div class="nav">
        <a href="https://github.com/czhangy" class="icon" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/charles-zhang-14746519b/"
          class="icon"
          target="_blank"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a href="https://twitter.com/czhangy_" class="icon" target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          href="https://www.facebook.com/charles.zhang.14268769/"
          class="icon"
          target="_blank"
          ><i class="fab fa-facebook"></i
        ></a>
        <a
          href="https://www.instagram.com/c.zhangg/"
          class="icon"
          target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
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
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/home.png");
  background-position: center;
  // Position elements
  display: flex;
  align-items: center;
  justify-content: center;
  // Prevent highlighting
  user-select: none;
  // Prevent bounce on mobile
  overflow: hidden;

  .text {
    // Position elements
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      // Spacing
      margin: 1rem 0;
      // Typography
      font-size: 4rem;
      font-weight: 250;
    }

    .separator {
      // Get bar
      height: 2px;
      width: 70%;
      // Style bar
      background-color: white;
    }

    .nav {
      // Position elements
      display: flex;
      justify-content: center;
      // Get content area
      width: 70%;
      // Spacing
      margin: 1rem 0;

      .link {
        // Spacing
        margin: 0 1.2rem;
        padding: 0.6rem 0.4rem;
        height: 3rem;
        // Typography
        font-size: 1.5rem;
        text-decoration: none;
        color: $accent;
        // For hover
        border-bottom: 1px solid transparent;
        transition: all ease-in-out 0.3s;

        &:hover {
          // Highlight
          border-color: white;
          transform: scale(1.1);
        }
      }

      .icon {
        // Styling
        font-size: 2rem;
        color: white;
        // Clickable
        cursor: pointer;
        // Spacing
        margin: 0 1.5rem;
        // For hover
        transition: all ease-in-out 0.3s;

        &:hover {
          color: grey;
          transform: scale(1.1);
        }
      }
    }
  }

  .picture {
    // Sizing
    height: 30rem;
    width: 30rem;
    // Image
    background-image: url("~@/assets/img/headshot.jpeg");
    background-position: center;
    background-size: cover;
    // Border
    border-radius: 100%;
    border: solid white 3px;
    // Centering
    margin-right: 6rem;
  }
}

// Media Queries
@media screen and (max-width: 450px) {
  .home {
    flex-direction: column;

    .text {
      .title {
        font-size: 3rem;
      }
      .nav {
        .link {
          margin: 0 0.2rem;
        }
        .icon {
          margin: 0 0.5rem;
        }
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  .home {
    flex-direction: column;

    .picture {
      height: 20rem;
      width: 20rem;
      margin: 2rem 0 2rem 0;
    }
  }
}
</style>
