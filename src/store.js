import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Initial State
if (
  window.matchMedia("(prefers-color-scheme: dark)").matches &&
  window.localStorage.getItem("isDarkMode") !== "false"
) {
  window.localStorage.setItem("isDarkMode", "true");
}

const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode,
  lightBgColor: "#f0f3f5",
  darkBgColor: "#212c4f"
};

// Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  }
};

// Mutations
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = this.state.lightBgColor;
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = this.state.darkBgColor;
      window.localStorage.setItem("isDarkMode", "true");
    }
  }
};

// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
