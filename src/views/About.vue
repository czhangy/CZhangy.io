<template>
  <div class="about">
    <div class="about-title">MEET THE NERD</div>
    <hr class="separator" />
    <div class="about-text">
      <div class="about-slide">
        <AboutCard :content="lifeStory" id="0" />
      </div>
      <div class="about-slide">
        <AboutCard :content="passions" id="1" />
      </div>
      <div class="about-slide">
        <AboutCard :content="hobbies" id="2" />
      </div>
    </div>
  </div>
</template>

<script>
import AboutCard from "@/components/About/AboutCard";

export default {
  name: "About",
  components: {
    AboutCard,
  },
  data() {
    return {
      lifeStory:
        "I grew up in a small-ish town in the South Bay called Manhattan Beach. My childhood was unremarkable for the most part: I had a great family, grew up in a great town, got decent grades, and played a lot of video games. Somewhere along the way I must’ve developed a little bit of leadership skill considering I was able to achieve the rank of Eagle Scout after 7 years. Yeah, I don’t really know how either. Once college application season arrived, I decided on computer science as my passion of choice and shot my shot. I ended up accepting a spot to study at UCLA, where I'm now completing my second-year of my CS degree.",
      passions:
        "Like I said above, I've spent a lot of my life playing video games. Honestly, I wouldn't be where I am today without them. Gaming sparked my interest in software, and, to this day, I believe that games have an unmatched capacity to do good for the world. For most of my life, I figured I'd end up working to explore that potential, but I guess I've taken a wrong turn somewhere along the way. Instead, I find myself entrenched in the world of web development, and trying to get just a little bit better at it everyday. As of right now, I'm working a web dev internship at a local organization and I couldn't be happier, no matter how many times my CSS breaks on me.",
      hobbies:
        "Well, you might've figured out by now that I like playing video games. My favorite games have to be some assortment of Pokemon, COD, Diablo, and Borderlands. I also played a bit of tennis in my childhood and, considering it's the only sport I can remotely play, I still play every now and then for fun. On the topic of sports, I've also picked up quite an obsession for the NBA over quarantine, so you'll catch me bingeing that while the season's running. Go Dubs. Last but not least, I really enjoy web development. Why else would I be making this website? As a portfolio to show off my personal projects in hopes of getting hired? Of course not, how desparate do you think I am? @recruiters I'm kidding, give job pls.",
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  // Position elements
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // Typography
  color: white;
  // Prevent highlighting
  user-select: none;
  // Background
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/home.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .about-title {
    // Spacing
    margin: 2rem;
    // Typography
    font-size: clamp(2rem, 1.053rem + 3.368vw, 4rem);
  }

  .separator {
    // Get bar
    height: 2px;
    width: 60%;
    // Style bar
    background-color: white;
  }

  .about-text {
    // Container
    height: 120vh;
    width: 80%;
    // Spacing
    margin: 0rem 10rem 2rem 10rem;
    padding: 0 5rem;

    .about-slide {
      height: 30%;
      width: 100%;
      margin: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

// Media Queries
@media screen and (max-width: 900px) {
  .about {
    .about-text {
      width: 95%;
      padding: 0 3rem;

      .about-slide {
        margin: 1.5rem 0;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .about {
    .text {
      .slide {
        margin: 1rem 0;
      }
    }
  }
}

// Workaround for background attachment on mobile
@media (hover: none) {
  .about {
    background-attachment: initial;
  }
}
</style>
