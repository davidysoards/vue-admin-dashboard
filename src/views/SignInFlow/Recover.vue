<template>
  <div>
    <RequestAccount />
    <div class="container">
      <div class="login">
        <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
        <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
        <h4 :class="[isDarkMode ? 'light-text' : 'dark-text']">
          Recover Account
        </h4>
        <form @submit.prevent="onSubmit">
          <input
            type="email"
            placeholder="Email"
            :class="[isDarkMode ? 'light-field' : 'dark-field']"
            v-model="email"
          />
          <button>Send Email</button>
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
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import { auth } from "@/main";

export default {
  name: "Recover",
  components: { RequestAccount, ThemeSwitch },
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
      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              email
            }
          });
        })
        .catch(error => alert("Error" + error));
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
