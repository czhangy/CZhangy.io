<template>
  <div id="projects">
    <h1 id="projects-title" class="hide">What I've Done</h1>
    <div id="projects-display" class="hide">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
// Import local components
import ProjectCard from "./components/ProjectCard";

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          name: "Bruinbyte!",
          tag: "Front-end Development",
          links: [
            "https://github.com/czhangy/bruinbyte",
            "https://bruinbyte.netlify.app/",
          ],
          description:
            "Used React.js and the Material-UI library to create and deploy a full-stack web app designed to act as a local food review hub for UCLA students based on the FERN stack, while also employing Google Firebase to provide and user authentication to the application.",
        },
        {
          name: "Bruinshack",
          tag: "Full-stack Development",
          links: [
            "https://github.com/tangruler/bruinshack-frontend",
            "https://bruinshack.com/",
          ],
          description:
            "Designing a responsive review system using Vue and the Vuex library that facilitates ratings and reviews from 2,000 weekly active users looking for apartments in the Westwood area, using the MEVN stack to provide dynamic data to the deployed application.",
        },
        {
          name: "Splekbot",
          tag: "Game Development",
          links: ["", "https://aaisara12.itch.io/splekbot"],
          description:
            "Developing map and gameplay mechanics for a tennis-style role-playing game using the Unity engine and C#, while leading the level design unit tasked with modelling 3D assets and levels using Unity ProBuilder and related tools, operating using Agile methodologies.",
        },
        {
          name: "The Amplification Project",
          tag: "Front-end Development",
          links: [
            "https://github.com/czhangy/TheAmplificationProject",
            "https://theamplificationproject.netlify.app/",
          ],
          description:
            "Working to implement a design of the organization's main website using Vue while coordinating with a backend developer to raise awareness of forced migration through the documentation and preservation of related art and activism.",
        },
        {
          name: "CZhangy's Survival Guides",
          tag: "Academic",
          links: ["", "https://czhangy-survival-guides.netlify.app/"],
          description:
            "Composed, designed, and published academic guides to core UCLA coursework online, in an effort to assist struggling students approach challenging course material from a student perspective, while providing quick and accessible resources to study with.",
        },
        {
          name: "DARS++",
          tag: "Full-stack Development",
          links: [
            "https://github.com/czhangy/DARSPlusPlus",
            "http://darsplusplus.herokuapp.com/",
          ],
          description:
            "Developed a web application using the MEVN stack that allows users to engage in course planning and attempts to optimize their upcoming schedule using topological sorting, focusing on responsive design and RESTful principles.",
        },
      ],
    };
  },
  methods: {
    // Animation function
    handleRightFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#projects-title").offsetTop + 100)
        document
          .getElementById("projects-title")
          .classList.add("start-right-fade");
    },
    handleBottomFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#projects-display").offsetTop + 100)
        document
          .getElementById("projects-display")
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
    document.removeEventListener("scroll", this.handleBottomFade);
  },
};
</script>

<style lang="scss" scoped>
#projects {
  // Typography
  color: white;
  // Flexbox for centering
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .hide {
    // Hide initially
    opacity: 0;
  }

  #projects-title {
    // Spacing
    margin: 32px;
    margin-right: 5%;
    // Typography
    font-size: clamp(3rem, 2.444rem + 1.778vw, 4rem);
    font-weight: 200;
    // Alignment
    text-align: right;
    // Underline
    border-bottom: 2px solid white;
    padding-bottom: 32px;
    padding-left: 64px;
  }

  #projects-display {
    // Flexbox for layout
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
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
  #projects {
    background-attachment: initial;
  }
}

// Smaller layouts
@media screen and (max-width: $tablet) {
  #projects {
    // Realign
    align-items: center;

    #projects-title {
      // Underline
      border-bottom: 2px solid white;
      padding: 0 16px;
      padding-bottom: 16px;
    }
  }
}
</style>