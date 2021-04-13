<template>
  <div class="projects">
    <h1 class="projects-title">my work</h1>
    <hr class="separator" />
    <div class="project-display">
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
          name: "BruinByte!",
          tag: "Front-end Development",
          links: [
            "https://github.com/czhangy/bruinbyte",
            "https://bruinbyte.netlify.app/",
          ],
          description:
            "Used React.js and the Material-UI framework to create and deploy a full-stack web application designed to act as a local food review hub for UCLA students based on the FERN stack, while also employing Google Firebase to provide dynamic data and user authentication to the application.",
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
  // Position elements
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

  .project-display {
    max-width: 100%;
    // Position elements
  }
}

// Media queries
// Desktop layout
@media screen and (min-width: 1400px) {
  .projects {
    .project-display {
      display: grid;
      grid-template-columns: 460px 460px 460px;
      gap: 50px 50px;
      justify-items: center;
      align-items: center;
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