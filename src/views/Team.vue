<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a
          href=""
          class="card"
          :class="[isDarkMode ? 'dark-card' : 'light-card']"
        >
          <img src="@/assets/slack.png" alt="slack logo" />
          <h3 :class="[isDarkMode ? 'light-text' : 'dark-text']">Slack</h3>
          <p :class="[isDarkMode ? 'light-text' : 'dark-text']">
            Messaging app for all team communication.
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a
          href=""
          class="card"
          :class="[isDarkMode ? 'dark-card' : 'light-card']"
        >
          <img src="@/assets/notion.png" alt="notion logo" />
          <h3 :class="[isDarkMode ? 'light-text' : 'dark-text']">Notion</h3>
          <p :class="[isDarkMode ? 'light-text' : 'dark-text']">
            Messaging app for all team communication.
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a
          href=""
          class="card"
          :class="[isDarkMode ? 'dark-card' : 'light-card']"
        >
          <img src="@/assets/figma.png" alt="figma logo" />
          <h3 :class="[isDarkMode ? 'light-text' : 'dark-text']">Figma</h3>
          <p :class="[isDarkMode ? 'light-text' : 'dark-text']">
            Messaging app for all team communication.
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a
          href=""
          class="card"
          :class="[isDarkMode ? 'dark-card' : 'light-card']"
        >
          <img src="@/assets/contentful.png" alt="contentful logo" />
          <h3 :class="[isDarkMode ? 'light-text' : 'dark-text']">Contentful</h3>
          <p :class="[isDarkMode ? 'light-text' : 'dark-text']">
            Messaging app for all team communication.
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a
          href=""
          class="card"
          :class="[isDarkMode ? 'dark-card' : 'light-card']"
        >
          <img src="@/assets/dropbox.png" alt="dropbox logo" />
          <h3 :class="[isDarkMode ? 'light-text' : 'dark-text']">Dropbox</h3>
          <p :class="[isDarkMode ? 'light-text' : 'dark-text']">
            Messaging app for all team communication.
          </p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  @include heading-2;
}

h3 {
  @include heading-3;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}

.container {
  margin-left: 25px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
  background: red;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}
</style>
