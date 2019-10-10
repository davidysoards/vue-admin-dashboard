<template>
  <div
    @click="toggleDarkMode"
    class="toggle"
    :class="[isDarkMode ? 'dark-toggle' : 'light-toggle']"
  >
    <div
      class="toggle-switch"
      :class="[isDarkMode ? 'toggle-right' : 'toggle-left']"
    >
      <img src="@/assets/sun.svg" alt="sun" v-show="isDarkMode" />
      <img src="@/assets/moon.svg" alt="moon" v-show="!isDarkMode" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  border-radius: 10px;
  width: 175px;
  margin: 50px auto;
  display: flex;
}

.light-toggle {
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}

.toggle-switch {
  margin: 2px;
  padding: 15px 35px;
  border-radius: 8px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.3, 1);
  img {
    margin: 0 auto;
  }
}

.toggle-left {
  transform: translate3d(0, 0, 0);
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.toggle-right {
  transform: translate3d(80px, 0, 0);
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
