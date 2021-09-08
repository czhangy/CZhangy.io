<template>
  <div class="tag">
    <div class="tag-color" :style="{ background: colors[name] }" />
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      colors: {
        "C#": "#66217b",
        HTML: "#e54c26",
        CSS: "#2448ed",
        JavaScript: "#f0db4f",
        "React.js": "#53c1de",
        "Vue.js": "#41b883",
        SASS: "#d56ea3",
        "Node.js": "#83cd29",
        "Express.js": "white",
        MongoDB: "#13924f",
        Firebase: "#ffcb2c",
        Git: "#f05033",
        Unity: "grey",
        Omeka: "#991b1e",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.tag {
  // Tag styling
  background: lighten(black, 10);
  border-radius: 20px;
  // Spacing
  margin: 16px 8px;
  // Inner spacing
  padding: 8px 12px;
  // Typography
  font-size: 0.75rem;
  // Flexbox for alignment
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tag-color {
    // Sizing
    height: 8px;
    width: 8px;
    // Circle
    border-radius: 50%;
    // Spacing
    margin-right: 8px;
  }
}

// Smaller layout
@media screen and (max-width: 767px) {
  .tag {
    // Respace
    margin: 8px;
  }
}
</style>