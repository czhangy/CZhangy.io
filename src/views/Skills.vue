<template>
  <div class="skills">
    <div class="title">MY UH... TALENTS?</div>
    <hr class="separator" />
    <div class="bars">
      <SkillBar />
    </div>
    <div class="text">
      Right off the bat, let's set something straight here. I'm a second-year
      student in college. My skillset is, well, reflective of that. I've picked
      up web development this year with my first part-time internship, and I've
      LeetCoded by heart out for a whole summer, but none of that makes me an
      expert at what I do. What it does make me is a developer that's hungry to
      learn more as I work my way through my degree, and hopefully, into
      industry.
      <br /><br />
      Over the course of my computer science career, I've picked up a working
      knowledge of a handful of languages, including Python, C++, Java, and C#.
      This includes a fairly extensive understanding of data structures and
      algorithms, along with object-oriented principles. As I branched into web
      development, I started working with React and Vue, allowing me to hone my
      understanding of the classic HTML/CSS/JavaScript architecture. Until now,
      I've leaned heavily into front-end development, but am now working on
      picking up backend technologies like the Node/Express framework and
      database management through Firebase and MongoDB.
      <br /><br />
      I'd like to think of myself as a fast learner, and I believe my academic
      and (admittedly limited) professional performance is reflective of that.
      So, if you'd like to take the chance and work with me, feel free to
      contact me!
    </div>
  </div>
</template>

<script>
import SkillBar from "../components/Skills/SkillBar";

export default {
  name: "Skills",
  components: {
    SkillBar,
  },
};
</script>

<style lang="scss" scoped>
.skills {
  position: relative;
  // Position elements
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // Background
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("~@/assets/img/home.png");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  // Typography
  color: white;
  // Prevent highlighting
  user-select: none;

  .title {
    // Spacing
    margin: 2rem;
    // Typography
    font-size: clamp(2.5rem, 1.2rem + 3.2vw, 4rem);
  }

  .separator {
    // Get bar
    height: 2px;
    width: 60%;
    // Style bar
    background-color: white;
  }

  .text {
    // Spacing
    width: 80%;
    margin-bottom: 5rem;
    // Typography
    font-size: clamp(1rem, 0.1333rem + 2.13vw, 2rem);
    text-align: left;
  }

  .bars {
    // Sizing
    width: 100%;
    // Spacing
    margin: 2rem auto;
    display: flex;
    justify-content: flex;
    align-items: flex;
  }
}

@media screen and (max-width: 650px) {
  .skills {
    .text {
      line-height: 1.6;
    }
  }
}
</style>