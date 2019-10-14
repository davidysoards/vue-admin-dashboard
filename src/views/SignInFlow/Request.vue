<template>
  <div>
    <div class="container">
      <div class="login">
        <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
        <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
        <h4 :class="[isDarkMode ? 'light-text' : 'dark-text']">
          Request Account
        </h4>
        <form @submit.prevent="onSubmit">
          <input
            type="email"
            placeholder="Email"
            :class="[isDarkMode ? 'light-field' : 'dark-field']"
            v-model="email"
          />
          <button>Request Account</button>
        </form>
        <router-link
          to="/signin"
          :class="[isDarkMode ? 'light-link' : 'dark-link']"
          >Already have an account? Sign in now</router-link
        >
        <ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "Request",
  components: { ThemeSwitch },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out";
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;
      // Slack API logic
      let slackURL = new URL("https://slack.com/api/chat.postMessage");
      const data = {
        token: process.env.VUE_APP_SLACK_TOKEN,
        channel: "hq",
        text: `${email} has requested admin access to HQ. Please go to Netlify to invite them.`
      };

      slackURL.search = new URLSearchParams(data);

      fetch(slackURL).then(() => {
        this.$router
          .push({
            name: "signin",
            params: {
              userRequestedAccount: true,
              email
            }
          })
          .catch(error => alert("Error:" + error));
      });
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
  img {
    margin: 0 auto;
  }
}
</style>
