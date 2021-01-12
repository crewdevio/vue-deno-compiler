import { parse } from "../src/compiler.js";

console.log(
  parse(`
<template>
  <div id="app">
    <body v-if="displayedComponent === 'home'">
      <Home />
    </body>
    <body v-else-if="displayedComponent === 'lighthouse'">
      <Lighthouse />
    </body>
    <body v-else-if="displayedComponent === 'travel'">
      <Travel />
    </body>
    <body v-else-if="displayedComponent === 'vue'">
      <VueJs />
    </body>
    <body v-else-if="displayedComponent === 'deno'">
      <Deno />
    </body>
    <body v-else>
      <h1>Welcome to Your vno Project</h1>
    </body>
  </div>
</template>

<script>
import Travel from './components/Travel';
import Lighthouse from './components/Lighthouse';
import Deno from './components/Deno';
import VueJs from './components/VueJs';
import Home from './components/Home';

export default {
  name: 'app',
  data() {
    return {
      displayedComponent: 'home',
    };
  },
  methods: {
    handelClick: function (event) {
      this.displayedComponent = event;
      console.log(this.displayedComponent);
    },
  },
  components: {
    Home,
    Deno,

    Travel,
    Lighthouse,
    VueJs,
  },
};
</script>

<style>
body {
  background-color: #34495e;
}
.header {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
</style>
`, { filename: "App.vue", sourceMap: false,  })
);
