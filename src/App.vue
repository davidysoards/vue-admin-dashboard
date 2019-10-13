<template>
  <div
    id="app"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <router-view />
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode
      ? this.$store.state.darkBgColor
      : this.$store.state.lightBgColor;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss">
body {
  background: $dark-blue;
  transition: background 0.8s cubic-bezier(0.2, 0.8, 0.3, 1.2);
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
  line,
  text {
    opacity: 0.2;
  }
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}

/* THEME */
.light-background {
  background-color: $light-gray;
  line,
  text {
    stroke: $black;
  }
}

.dark-background {
  background-color: $dark-blue;
  line,
  text {
    stroke: $light-gray;
    opacity: 0.3;
  }
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $black;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: rgba($color: #ffffff, $alpha: 0.3);
}

.dark-link {
  color: rgba($color: #000000, $alpha: 0.3);
}

.light-box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-box {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
