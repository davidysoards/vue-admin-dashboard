<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="spread">
        <h1 :class="[isDarkMode ? 'light' : 'dark']">
          Traffic Overview
        </h1>
        <div class="toggle" :class="[isDarkMode ? 'light-box' : 'dark-box']">
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>
      <apexchart
        width="100%"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <!-- <iframe
        width="600"
        height="450"
        src="https://datastudio.google.com/embed/reporting/0381c58a-311e-4ed1-b90d-21007ec0d4d8/page/GQy2"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe> -->
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { db } from "@/firebase";

import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Header,
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"]
          },
          position: "top"
        },
        tooltip: {
          theme: "dark"
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        chart: {
          id: "users"
        },
        xaxis: {
          type: "datetime"
        }
      },
      series: []
    };
  },
  mounted() {
    this.toggleGraph(7, "days");
  },
  methods: {
    toggleGraph(nNumberOfDays, sSelection) {
      // Binding Collections
      this.$bindCollectionAsObject("traffic", db.collection("traffic"))
        .then(traffic => {
          const lastDate = new Date();
          lastDate.setDate(lastDate.getDate() - nNumberOfDays);

          const activeUsers = Object.keys(traffic.activeUsers)
            .filter(key => new Date(traffic.activeUsers[key][0]) > lastDate)
            .map(filteredKey => traffic.activeUsers[filteredKey]);

          const newUsers = Object.keys(traffic.newUsers)
            .filter(key => new Date(traffic.newUsers[key][0]) > lastDate)
            .map(filteredKey => traffic.newUsers[filteredKey]);

          this.series = [
            {
              name: "active users",
              data: activeUsers
            },
            {
              name: "new users",
              data: newUsers
            }
          ];
          console.log(sSelection);
        })
        .catch(err => console.error(err));
    },
    buttonOn(sName) {
      this.$refs[sName].style.color = "white";
      this.$refs[sName].style.background = "#56ccf2";
      this.$refs[sName].style.borderRadius = "4px";
    },
    buttonOff(sName) {
      this.$refs[sName].style.color = "#5b6175";
      this.$refs[sName].style.background = "none";
      this.$refs[sName].style.borderRadius = "none";
    },
    toggleDays() {
      this.buttonOn("days");
      this.buttonOff("weeks");
      this.buttonOff("months");
      this.toggleGraph(7, "days");
    },
    toggleWeeks() {
      this.buttonOn("weeks");
      this.buttonOff("days");
      this.buttonOff("months");
      this.toggleGraph(30, "weeks");
    },
    toggleMonths() {
      this.buttonOn("months");
      this.buttonOff("weeks");
      this.buttonOff("days");
      this.toggleGraph(365, "months");
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-left: 15%;
  padding-right: 15%;
}

.spread {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  width: 100%;
}

h1.dark {
  @include heading-3($black);
}

h1.light {
  @include heading-3($white);
}

.toggle {
  @include medium-text;
  color: $dark-gray;
  height: 50px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;

  &:hover {
    cursor: pointer;
  }
}

@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
  transition: 0.5s;
}

.days {
  @include toggle-settings;
  background: $teal;
  border-radius: 4px;
  color: $white;
}

.weeks {
  @include toggle-settings;
}

.months {
  @include toggle-settings;
}
</style>
