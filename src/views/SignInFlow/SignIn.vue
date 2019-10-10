<template>
  <div class="container">
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="[isDarkMode ? 'light-text' : 'dark-text']">
        Sign into Design+Code HQ
      </h4>
      <input
        type="email"
        placeholder="Email"
        :class="[isDarkMode ? 'light-field' : 'dark-field']"
      />
      <input
        type="password"
        placeholder="Password"
        :class="[isDarkMode ? 'light-field' : 'dark-field']"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="[isDarkMode ? 'light-link' : 'dark-link']"
        >Forgot your password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "SignIn",
  components: { RequestAccount, ThemeSwitch },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
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
