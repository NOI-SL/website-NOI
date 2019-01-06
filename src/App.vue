<template>
  <div id="app">
    <nav-bar/>
    <main class="mdc-toolbar-fixed-adjust">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>