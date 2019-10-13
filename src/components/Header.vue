<template>
  <div id="nav" :class="[isDarkMode ? 'nav-dark' : 'nav-light']">
    <div class="nav-1">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" width="57" height="42" />
      <img
        src="@/assets/DCHQ-dark.svg"
        v-show="!isDarkMode"
        width="57"
        height="42"
      />
      <router-link
        to="/"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Home</router-link
      >
      <router-link
        to="/manage"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Manage Users</router-link
      >
      <router-link
        to="/team"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Team</router-link
      >
    </div>
    <a @click="onClick"
      >Logout
      <img src="@/assets/logout.svg" alt="logout icon" />
    </a>
  </div>
</template>

<script>
import { auth } from "@/main";
export default {
  name: "Header",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onClick() {
      const user = auth.currentUser();
      user.logout().then(() => {
        this.$router
          .push({
            name: "signin",
            params: { userLoggedOut: true }
          })
          .catch(error => {
            alert("Error", error);
          });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-light {
  background: $white;
}
.nav-dark {
  background: $super-dark-blue;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: $super-dark-blue; */
  width: 100%;
  padding: 15px 15%;
  a {
    font-weight: bold;
    color: $dark-gray;
    &.router-link-exact-active {
      color: $white;
    }
    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }
  img {
    display: inline;
  }
}
.nav-1 {
  display: flex;
  align-items: center;
  a {
    margin: 0 20px;
  }
}
</style>
