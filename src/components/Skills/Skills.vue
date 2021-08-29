<template>
  <div id="skills">
    <h1 id="skills-title" class="hide">What I Know</h1>
    <div id="skill-bars">
      <SkillBar />
    </div>
    <div id="skills-body">
      <p>
        Right off the bat, let's set something straight here. I'm a second-year
        student in college. My skillset is, well, reflective of that. I've
        picked up web development this year with my first part-time internship,
        and I've LeetCoded by heart out for a whole summer, but none of that
        makes me an expert at what I do. What it does make me is a developer
        that's hungry to learn more as I work my way through my degree, and
        hopefully, into industry.
        <br /><br />
        Over the course of my computer science career, I've picked up a working
        knowledge of a handful of languages, including Python, C++, Java, and
        C#. This includes a fairly extensive understanding of data structures
        and algorithms, along with object-oriented principles. As I branched
        into web development, I started working with React and Vue, allowing me
        to hone my understanding of the classic HTML/CSS/JavaScript
        architecture. Until now, I've leaned heavily into front-end development,
        but am now working on picking up backend technologies like the
        Node/Express framework and database management through Firebase and
        MongoDB.
        <br /><br />
        I'd like to think of myself as a fast learner, and I believe my academic
        and (admittedly limited) professional performance is reflective of that.
        So, if you'd like to take the chance and work with me, feel free to
        contact me!
      </p>
    </div>
  </div>
</template>

<script>
// Import local components
import SkillBar from "./components/SkillBar";
import ContactForm from "./components/ContactForm";

export default {
  name: "Skills",
  components: {
    SkillBar,
    ContactForm,
  },
  methods: {
    // Animation function
    handleLeftFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#skills-title").offsetTop + 100)
        document
          .getElementById("skills-title")
          .classList.add("start-left-fade");
    },
  },
  mounted() {
    // Constantly check if section is in viewport
    document.addEventListener("scroll", this.handleLeftFade);
  },
  beforeUnmount() {
    // Clean up
    document.removeEventListener("scroll", this.handleLeftFade);
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

  .hide {
    // Hide initially
    opacity: 0;
  }

  #skills-title {
    // Spacing
    margin: 32px;
    margin-left: 5%;
    // Typography
    font-size: clamp(2rem, 1.053rem + 3.368vw, 4rem);
    font-weight: 200;
    // Alignment
    text-align: left;
    // Underline
    border-bottom: 2px solid white;
    padding-bottom: 32px;
    padding-right: 64px;
  }

  #skill-bars {
    // Sizing
    width: 100%;
    // Spacing
    margin: 32px auto;
  }

  #skills-body {
    // Sizing
    width: 90%;
    // Centering
    margin: 0 auto;

    p {
      // Typography
      font-size: clamp(0.8rem, 0.468rem + 1.179vw, 1.5rem);
      line-height: 1.5;
      text-align: left;
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

// Mobile layout
@media screen and (max-width: 450px) {
  #skills > p {
    // Spacing
    line-height: 1.6;
  }
}

// Desktop layout
@media screen and (min-width: 1400px) {
  #skills > #skills-body {
    // Spacing
    margin-bottom: 4rem;
    // Flexbox for layout
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      // Sizing
      width: 90%;
      // Spacing
      margin-right: 16px;
    }

    #skills-form {
      // Sizing
      width: 50%;
      // Spacing
      margin-left: 32px;
    }
  }
}
</style>