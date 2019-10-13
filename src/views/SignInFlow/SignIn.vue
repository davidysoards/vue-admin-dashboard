<template>
  <div>
    <RequestAccount />
    <div class="container">
      <Notification v-if="hasText" :text="text" />
      <div class="login">
        <img
          src="@/assets/DCHQ.svg"
          v-show="isDarkMode"
          width="156"
          height="140"
        />
        <img
          src="@/assets/DCHQ-dark.svg"
          v-show="!isDarkMode"
          width="156"
          height="140"
        />
        <h4 :class="[isDarkMode ? 'light-text' : 'dark-text']">
          Sign into Design+Code HQ
        </h4>
        <form @submit.prevent="onSubmit">
          <input
            type="email"
            placeholder="Email"
            :class="[isDarkMode ? 'light-field' : 'dark-field']"
            v-model="email"
          />
          <input
            type="password"
            placeholder="Password"
            :class="[isDarkMode ? 'light-field' : 'dark-field']"
            v-model="password"
          />
          <button>Sign In</button>
        </form>
        <router-link
          to="/recover"
          :class="[isDarkMode ? 'light-link' : 'dark-link']"
          >Forgot your password?</router-link
        >
        <ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import Notification from "@/components/Notification";
import { auth } from "@/main";

export default {
  name: "SignIn",
  components: { RequestAccount, ThemeSwitch, Notification },
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
    } else if (params.userRecoveredAccount) {
      this.hasText = true;
      this.text = `A recovery email has been sent to ${params.email}`;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text = `Your request has been sent to an administrator for ${params.email}`;
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth.login(email, password, true).then(() => {
        this.$router.replace("/");
      }).catch;
      error => {
        alert("Error" + error);
      };
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
