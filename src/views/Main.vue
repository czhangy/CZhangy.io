<template>
  <div id="main">
    <Home :onClick="handleScroll" />
    <About id="about" />
    <Skills id="skills" />
    <Projects id="projects" />
    <Contact />
  </div>
</template>

<script>
// Import pages
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills/Skills.vue";
import Projects from "@/components/Projects/Projects.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Main",
  components: {
    Home,
    About,
    Skills,
    Projects,
    Contact,
  },
  methods: {
    handleScroll: function (id) {
      // Scroll to section
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
#main {
  // Sizing
  width: 100%;
  // Set background
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  // Hide horizontal scroll
  overflow-x: hidden;
}
</style>