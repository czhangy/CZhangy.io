<template>
  <div id="contact">
    <h1 id="contact-title" class="hide">Get In Touch!</h1>
    <form id="contact-form" class="hide" @submit.prevent="handleSubmit">
      <div id="top-fields" class="form-row">
        <input id="name-field" v-model="name" placeholder="Name" />
        <input id="email-field" v-model="email" placeholder="Email" />
      </div>
      <div id="middle-field" class="form-row">
        <input id="subject-field" v-model="subject" placeholder="Subject" />
      </div>
      <div id="bottom-field" class="form-row">
        <textarea id="message-field" v-model="message" placeholder="Message" />
      </div>
      <p v-if="formError">Please fill in all fields!</p>
      <input
        v-if="sendError"
        id="error-button"
        class="button"
        value="ERROR"
        readonly
      />
      <input
        v-else-if="!sendSuccess"
        type="submit"
        id="submit-button"
        class="button"
        value="SEND!"
        readonly
      />
      <input v-else id="sent-button" class="button" value="SENT!" readonly />
    </form>
  </div>
</template>

<script>
// Import global library
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      formError: false,
      sendSuccess: false,
      sendError: false,
    };
  },
  methods: {
    // Animation functions
    handleLeftFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#contact-title").offsetTop + 100)
        document
          .getElementById("contact-title")
          .classList.add("start-left-fade");
    },
    handleBottomFade: function () {
      let top = window.pageYOffset + window.innerHeight;
      if (top > document.querySelector("#contact-form").offsetTop + 100)
        document
          .getElementById("contact-form")
          .classList.add("start-bottom-fade");
    },
    // Submission functions
    handleFieldState: function (id) {
      // Check if valid input
      if (this[id] === "") {
        // Highlight field
        if (
          !document
            .getElementById(id + "-field")
            .classList.contains("error-field")
        )
          document.getElementById(id + "-field").classList.add("error-field");
        // Set error
        this.formError = true;
        // Unhighlight field
      } else if (
        document.getElementById(id + "-field").classList.contains("error-field")
      )
        document.getElementById(id + "-field").classList.remove("error-field");
    },
    handleFormValidation: function () {
      // Check fields and highlight errors
      this.handleFieldState("name");
      this.handleFieldState("email");
      this.handleFieldState("subject");
      this.handleFieldState("message");
    },
    handleSubmit: function () {
      this.formError = false;
      // Validate form first
      this.handleFormValidation();
      if (this.formError) return;
      // Build email object
      let emailContents = {
        subject: this.subject,
        name: this.name,
        email: this.email,
        message: this.message,
      };
      // Send API request
      emailjs
        .send(
          "service_pueof35",
          "content_form",
          emailContents,
          "user_gWrfu7e48Jcu4pRpqXqUi"
        )
        .then(
          (result) => {
            console.log("Success!", result.status, result.text);
            this.name = "";
            this.email = "";
            this.subject = "";
            this.message = "";
            this.sendSuccess = true;
          },
          (error) => {
            console.log("Failed", error);
            this.sendError = true;
          }
        );
    },
  },
  mounted() {
    // Constantly check if section is in viewport
    document.addEventListener("scroll", this.handleLeftFade);
    document.addEventListener("scroll", this.handleBottomFade);
  },
  beforeUnmount() {
    // Clean up
    document.removeEventListener("scroll", this.handleLeftFade);
    document.removeEventListener("scroll", this.handleBottomFade);
  },
};
</script>

<style lang="scss" scoped>
#contact {
  // Position elements
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  // Typography
  color: white;
  // Sizing
  min-height: 100vh;
  // Container spacing
  padding: 0 5%;

  .hide {
    // Hide initially
    opacity: 0;
  }

  #contact-title {
    // Spacing
    margin: 32px;
    // Typography
    font-size: clamp(3rem, 2.444rem + 1.778vw, 4rem);
    font-weight: 200;
    // Alignment
    text-align: left;
    // Underline
    border-bottom: 2px solid white;
    padding-bottom: 32px;
    padding-right: 64px;
  }

  form {
    // Position elements
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // Centering
    margin: 0 auto;
    // Spacing
    margin-top: 32px;

    .form-row {
      // Position elements
      display: flex;
      justify-content: center;
      align-items: center;
      // Allow wrap on overflow
      flex-wrap: wrap;
      // Sizing
      width: 100%;
      // Spacing
      margin: 8px 0;

      input,
      textarea {
        // Border
        border-style: none;
        // Color
        background: rgba(darken(darkgrey, 40%), 0.7);
        // Typography
        color: white;
        font-size: calc(max(1rem, clamp(0.7rem, 0.321rem + 1.347vw, 1.5rem)));
        font-family: $main-font;
        // Inner spacing
        padding: clamp(0.5rem, 0.263rem + 0.842vw, 1rem)
          clamp(1rem, 0.526rem + 1.684vw, 2rem);
        // Smooth animation
        transition: transform 0.5s ease;

        // Style placeholder coloring
        &::placeholder {
          color: white;
          opacity: 0.5;
        }

        // Style current field
        &:focus {
          background: darken(darkgrey, 40%);
          border-bottom: solid 2px white;
          transform: scale(1.02);
        }
      }

      .error-field {
        // Highlight field
        border: 2px solid red;
      }
    }

    #top-fields > input {
      // Sizing
      width: 48%;
      // Spacing
      margin: 0 1%;
    }

    #middle-field > input,
    #bottom-field > textarea {
      // Sizing
      width: 98%;
    }

    #bottom-field > textarea {
      // Sizing
      height: 16rem;
      // Spacing
      margin-bottom: 32px;
    }

    p {
      // Typography
      font-size: 1.4rem;
      color: red;
    }

    .button {
      // Color
      background-color: transparent;
      // Sizing
      height: clamp(3rem, 2.053rem + 3.368vw, 5rem);
      width: clamp(9rem, 6.158rem + 10.105vw, 15rem);
      // Spacing
      margin-top: 32px;
      // Typography
      color: white;
      font-family: $main-font;
      font-size: clamp(1.2rem, 0.821rem + 1.347vw, 2rem);
      font-weight: 200;
      letter-spacing: 0.05em;
      // Border
      border-radius: 40px;
      border: white solid 2px;
      // Cursor
      cursor: pointer;
    }

    #error-button {
      // Typography
      color: red;
      // Border
      border: red solid 2px;
    }

    #sent-button {
      // Typography
      color: lightgreen;
      // Border
      border: lightgreen solid 2px;
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

// Handle sticky hover
@media (hover: hover) {
  #contact > form > #submit-button {
    &:hover {
      background: white;
      color: black;
      font-weight: 400;
    }
  }
}

// Smaller layouts
@media screen and (max-width: $tablet) {
  #contact {
    // Realign
    align-items: center;

    #contact-title {
      // Underline
      border-bottom: 2px solid white;
      padding: 0 16px;
      padding-bottom: 16px;
    }

    form {
      #top-fields > input {
        // Resize
        width: 98%;
        // Add spacing
        margin-top: 16px;
      }

      #bottom-field > textarea {
        // Resize
        height: 10rem;
      }
    }
  }
}
</style>