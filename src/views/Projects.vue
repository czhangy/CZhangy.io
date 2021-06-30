<template>
  <div class="projects">
    <h1 class="projects-title">my work</h1>
    <hr class="separator" />
    <div class="projects-display">
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
import ProjectCard from "../components/Projects/ProjectCard";
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  // Background
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/home.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  // Typography
  color: white;
  // Flexbox for centering
  display: flex;
  flex-direction: column;
  align-items: center;

  .projects-title {
    // Spacing
    margin: 2rem;
    // Typography
    font-size: clamp(2rem, 1.053rem + 3.368vw, 4rem);
    font-weight: 200;
    text-transform: uppercase;
  }

  .separator {
    // Get bar
    height: 2px;
    width: 60%;
    // Style bar
    background-color: white;
  }

  .projects-display {
    // Flexbox for layout
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
}

// Media queries
// Workaround for background attachment on mobile
@media (hover: none) {
  .projects {
    background-attachment: initial;
  }
}
</style>