<template>
  <div id="app">
    <nav-bar/>
    <nav-drawer/>
    <main class="mdc-toolbar-fixed-adjust">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue";
import NavDrawer from "./components/navbar/NavDrawer.vue";
export default {
  components: {
    NavBar, NavDrawer
  }
};
</script>