<template>
  <div id="projects">
    <h1 id="projects-title" class="hide">What I've Done</h1>
    <div id="projects-display">
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
          category: "Front-end Development",
          links: [
            "https://github.com/czhangy/bruinbyte",
            "https://bruinbyte.netlify.app/",
          ],
          tags: ["React.js", "HTML", "CSS", "JavaScript", "Firebase", "Git"],
        },
        {
          name: "Bruinshack",
          category: "Full-stack Development",
          links: [
            "https://github.com/tangruler/bruinshack-frontend",
            "https://bruinshack.com/",
          ],
          tags: [
            "Vue.js",
            "HTML",
            "CSS",
            "SASS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git",
          ],
        },
        {
          name: "Splekbot",
          category: "Game Development",
          links: ["", "https://aaisara12.itch.io/splekbot"],
          tags: ["C#", "Unity"],
        },
        {
          name: "The Amplification Project",
          category: "Front-end Development",
          links: [
            "https://github.com/czhangy/TheAmplificationProject",
            "https://theamplificationproject.netlify.app/",
          ],
          tags: ["Vue.js", "HTML", "CSS", "SASS", "JavaScript", "Omeka"],
        },
        {
          name: "CZhangy's Survival Guides",
          category: "Academic",
          links: ["", "https://czhangy-survival-guides.netlify.app/"],
          tags: ["Vue.js", "HTML", "CSS", "SASS", "JavaScript"],
        },
        {
          name: "DARS++",
          category: "Full-stack Development",
          links: [
            "https://github.com/czhangy/DARSPlusPlus",
            "http://darsplusplus.herokuapp.com/",
          ],
          tags: [
            "Vue.js",
            "HTML",
            "CSS",
            "SASS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
          ],
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
    
  },
  mounted() {
    // Constantly check if section is in viewport
    document.addEventListener("scroll", this.handleRightFade);
  },
  beforeUnmount() {
    // Clean up
    document.removeEventListener("scroll", this.handleRightFade);
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
    // Centering
    margin: 0 auto;
    // Sizing
    width: 100%;
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