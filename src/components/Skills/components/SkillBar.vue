<template>
  <div id="skill-bar">
    <div class="skill">
      <div class="skill-name">Vue</div>
      <div class="bar" id="vue-bar">
        <div class="over-bar">
          <div class="inner-bar" id="vue-inner"></div>
          <img :src="require(`@/assets/img/logos/vue.png`)" class="logo" />
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">JavaScript</div>
      <div class="bar" id="js-bar">
        <div class="over-bar">
          <div class="inner-bar" id="js-inner"></div>
          <img :src="require(`@/assets/img/logos/js.png`)" class="logo" />
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">HTML/CSS</div>
      <div class="bar" id="html-bar">
        <div class="over-bar">
          <div class="inner-bar" id="html-inner"></div>
          <img :src="require(`@/assets/img/logos/html.png`)" class="logo" />
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">React</div>
      <div class="bar" id="react-bar">
        <div class="over-bar">
          <div class="inner-bar" id="react-inner"></div>
          <img
            :src="require(`@/assets/img/logos/react.png`)"
            class="logo"
          />
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">Python</div>
      <div class="bar" id="python-bar">
        <div class="over-bar">
          <div class="inner-bar" id="python-inner"></div>
          <img
            :src="require(`@/assets/img/logos/python.png`)"
            class="logo"
          />
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">C++</div>
      <div class="bar" id="cpp-bar">
        <div class="over-bar">
          <div class="inner-bar" id="cpp-inner"></div>
          <img :src="require(`@/assets/img/logos/c++.png`)" class="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillBars",
};
</script>

<style lang="scss" scoped>
#skill-bar {
  // Spacing
  margin: 1rem 0;
  // Sizing
  width: 100%;
  // Position elements
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .skill {
    // Sizing
    width: 100%;
    // Position elements
    display: flex;
    justify-content: center;
    align-items: center;
    // Spacing
    margin: 0.6rem 0;
  }

  .skill-name {
    // Spacing
    margin-right: 1.7rem;
    width: clamp(5rem, 0.263rem + 16.842vw, 15rem);
    // Typography
    font-size: clamp(1rem, 0.633rem + 2.133vw, 2.5rem);
    text-align: left;
  }

  .bar {
    // Sizing
    height: 10px;
    width: 60%;
    // Border
    border: 1px solid black;
    border-radius: 20px;
    // Shadow
    box-shadow: 0 0 10px $glow-color;

    .logo {
      // Sizing
      height: clamp(1.5rem, 1.026rem + 1.684vw, 2.5rem);
      // Spacing
      margin-left: -20px;
      // Overlay
      z-index: 500;
    }

    .over-bar {
      // Sizing
      width: 100%;
      height: 100%;
      // Overlay
      background: rgba(black, 0.45);
      // Position elements
      display: flex;
      align-items: center;
      // For animation

      .inner-bar {
        // Sizing
        height: 100%;
        // Rounding
        border-radius: 20px;
      }
    }
  }

  #vue-bar {
    // Color
    background: linear-gradient(45deg, $vue-primary, $vue-accent);

    #vue-inner {
      // Sizing
      width: 55%;
      // Color
      background: linear-gradient(
        45deg,
        lighten($vue-accent, 30%),
        $vue-primary
      );
      animation: vue-load 1.5s;
    }
  }

  #js-bar {
    // Color
    background: linear-gradient(45deg, $js-primary, $js-accent);

    #js-inner {
      // Sizing
      width: 60%;
      // Color
      background: linear-gradient(45deg, lighten($js-accent, 30%), $js-primary);
      // Animate
      animation: js-load 1.5s;
    }
  }

  #html-bar {
    // Color
    background: linear-gradient(45deg, $htmlcss-accent, lighten(black, 30%));

    #html-inner {
      // Sizing
      width: 55%;
      // Color
      background: linear-gradient(45deg, lighten(black, 60%), $htmlcss-primary);
      // Animate
      animation: html-load 1.5s;
    }
  }

  #python-bar {
    // Color
    background: linear-gradient(45deg, $python-primary, lighten(black, 30%));

    #python-inner {
      // Sizing
      width: 60%;
      // Color
      background: linear-gradient(45deg, lighten(black, 80%), $python-accent);
      // Animate
      animation: python-load 1.5s;
    }
  }

  #cpp-bar {
    // Color
    background: linear-gradient(45deg, $cpp-primary, $cpp-accent);

    #cpp-inner {
      // Sizing
      width: 50%;
      // Color
      background: linear-gradient(
        45deg,
        lighten($cpp-accent, 10%),
        $cpp-primary
      );
      // Animate
      animation: cpp-load 1.5s;
    }
  }

  #react-bar {
    // Color
    background: linear-gradient(
      45deg,
      $react-primary,
      darken($react-accent, 60)
    );

    #react-inner {
      // Sizing
      width: 55%;
      // Color
      background: linear-gradient(
        45deg,
        darken($react-accent, 20%),
        $react-primary
      );
      // Animate
      animation: react-load 1.5s;
    }
  }
}

// Animations
@keyframes vue-load {
  0% {
    width: 0%;
  }
  100% {
    width: 55%;
  }
}

@keyframes js-load {
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
}

@keyframes html-load {
  0% {
    width: 0%;
  }
  100% {
    width: 55%;
  }
}

@keyframes python-load {
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
}

@keyframes cpp-load {
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}

@keyframes react-load {
  0% {
    width: 0%;
  }
  100% {
    width: 55%;
  }
}

// Media queries
@media screen and (max-width: 650px) {
  .skill-bar {
    .bar {
      width: 50%;
    }
  }
}
</style>