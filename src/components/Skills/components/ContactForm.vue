<template>
  <div class="contact-form">
    <form @submit.prevent="sendEmail">
      <div class="top-field">
        <input class="top-input-field" v-model="name" placeholder="Name" />
        <input class="top-input-field" v-model="email" placeholder="Email" />
      </div>
      <div class="middle-field">
        <input
          class="middle-input-field"
          v-model="subject"
          placeholder="Subject"
        />
      </div>
      <div class="bottom-field">
        <textarea
          class="bottom-input-field"
          v-model="message"
          placeholder="Message"
        />
      </div>
      <input v-if="error" class="error-button" value="ERROR" readonly />
      <input
        v-else-if="!submitted"
        type="submit"
        class="submit-button"
        value="SUBMIT"
        readonly
      />
      <input v-else class="sent-button" value="SENT!" readonly />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      submitted: false,
      error: false,
    };
  },
  methods: {
    sendEmail() {
      var emailContents = {
        subject: this.subject,
        name: this.name,
        email: this.email,
        message: this.message,
      };
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
            this.submitted = true;
          },
          (error) => {
            console.log("Failed", error);
            this.error = true;
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  // Sizing
  height: 100%;
  width: 100%;

  form {
    // Sizing
    height: 100%;
    width: 100%;
    // Position elements
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .top-field {
      // Position elements
      display: flex;
      justify-content: center;
      align-items: center;
      // Sizing
      width: 100%;
      // Spacing
      margin: 0.5rem 0;

      .top-input-field {
        // Sizing
        width: 48%;
        padding: clamp(0.5rem, 0.263rem + 0.842vw, 1rem)
          clamp(1rem, 0.526rem + 1.684vw, 2rem);
        // Spacing
        margin: 0 1%;
        // Color
        background: rgba(darken(darkgrey, 40%), 0.7);
        // Typography
        color: white;
        font-size: clamp(0.7rem, 0.321rem + 1.347vw, 1.5rem);
        font-family: "Exo 2", Helvetica, Arial, sans-serif;
        // Border
        border-style: none;

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
    }

    .middle-field {
      // Sizing
      width: 100%;
      // Position elements
      display: flex;
      justify-content: center;
      align-items: center;
      // Spacing
      margin: 0.5rem 0;

      .middle-input-field {
        // Sizing
        width: 100%;
        padding: clamp(0.5rem, 0.263rem + 0.842vw, 1rem)
          clamp(1rem, 0.526rem + 1.684vw, 2rem);
        // Color
        background: rgba(darken(darkgrey, 40%), 0.7);
        // Typography
        color: white;
        font-size: clamp(0.7rem, 0.321rem + 1.347vw, 1.5rem);
        font-family: "Exo 2", Helvetica, Arial, sans-serif;
        // Spacing
        margin: 0 1%;
        // Border
        border-style: none;
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
    }

    .bottom-field {
      // Sizing
      width: 100%;
      // Position elements
      display: flex;
      justify-content: center;
      align-items: center;
      // Spacing
      margin: 0.5rem 0;

      .bottom-input-field {
        // Sizing
        height: 100%;
        width: 100%;
        padding: clamp(0.5rem, 0.263rem + 0.842vw, 1rem)
          clamp(1rem, 0.716rem + 1.011vw, 1.6rem)
          clamp(10rem, 5.263rem + 16.842vw, 20rem)
          clamp(1rem, 0.716rem + 1.011vw, 1.6rem);
        // Color
        background: rgba(darken(darkgrey, 40%), 0.7);
        // Typography
        color: white;
        font-size: clamp(0.7rem, 0.321rem + 1.347vw, 1.5rem);
        font-family: "Exo 2", Helvetica, Arial, sans-serif;
        // Spacing
        margin: 0 1%;
        // Border
        border-style: none;
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
    }

    .submit-button {
      // Color
      background-color: transparent;
      // Sizing
      height: clamp(3rem, 2.053rem + 3.368vw, 5rem);
      width: clamp(9rem, 6.158rem + 10.105vw, 15rem);
      // Spacing
      margin-top: 2rem;
      // Typography
      color: white;
      font-family: "Exo 2", Helvetica, Arial, sans-serif;
      font-size: clamp(1.2rem, 0.821rem + 1.347vw, 2rem);
      font-weight: 200;
      // Position elements
      display: flex;
      justify-content: center;
      align-items: center;
      // Border
      border-radius: 40px;
      border: white solid 2px;
      // Cursor
      cursor: pointer;
      // For hover
      transition: color 0.25s ease;
      transition: background-color 0.25s ease;
    }

    .error-button {
      // Color
      background-color: transparent;
      // Sizing
      height: clamp(3rem, 2.053rem + 3.368vw, 5rem);
      width: clamp(9rem, 6.158rem + 10.105vw, 15rem);
      // Spacing
      margin-top: 2rem;
      // Typography
      color: red;
      font-family: "Exo 2", Helvetica, Arial, sans-serif;
      font-size: clamp(1.2rem, 0.821rem + 1.347vw, 2rem);
      font-weight: 200;
      // Position elements
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      // Border
      border-radius: 40px;
      border: red solid 2px;
    }

    .sent-button {
      // Color
      background-color: transparent;
      // Sizing
      height: clamp(3rem, 2.053rem + 3.368vw, 5rem);
      width: clamp(9rem, 6.158rem + 10.105vw, 15rem);
      // Spacing
      margin-top: 2rem;
      // Typography
      color: lightgreen;
      font-family: "Exo 2", Helvetica, Arial, sans-serif;
      font-size: clamp(1.2rem, 0.821rem + 1.347vw, 2rem);
      font-weight: 200;
      // Position elements
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      // Border
      border-radius: 40px;
      border: lightgreen solid 2px;
    }
  }
}

// Media queries
// Column layout for mobile form
@media screen and (max-width: 650px) {
  .contact-form {
    form {
      .top-field {
        flex-direction: column;
        // Spacing
        margin: 0;

        .top-input-field {
          // Sizing
          width: 98%;
          // Spacing
          margin: 0.5rem 0;
        }
      }
    }
  }
}

// Handle sticky hover
@media (hover: hover) {
  .contact-form {
    .submit-button {
      &:hover {
        background: white;
        color: black;
        font-weight: 400;
      }
    }
  }
}
</style>