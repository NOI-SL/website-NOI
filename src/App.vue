<template>
  <div id="app">
    <nav-bar/>
    <nav-drawer/>
    <div class="mdc-drawer-scrim"></div>
    <main class="mdc-toolbar-fixed-adjust">
      <router-view></router-view>
    </main>
    <c-footer/>
  </div>
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue";
import NavDrawer from "./components/navbar/NavDrawer.vue";
import CFooter from "./components/footer/CFooter.vue";

export default {
  components: {
    NavBar, NavDrawer, CFooter
  }
};
</script>