<template>
  <header class="mdc-toolbar mdc-theme--background mdc-theme--primary mdc-elevation--z2">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <div style="width: 40px;padding: 10px">
          <img class="img-responsive" src="img/NOI_LOGO_ORG_small-2.png" alt>
        </div>
      </section>
      <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
        <div class="mdc-tab-bar" role="tablist">
          <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
              <div class="mdc-tab-scroller__scroll-content">
                <nav-bar-item v-for="nav in navs" :key="nav.id" :nav="nav"/>
                <button class="mdc-button mdc-button--raised reg-button" tabindex="0">
                  <span class="material-icons mdc-button__icon" aria-hidden="true">new_releases</span>
                  <span>Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";

export default {
  components: {
    NavBarItem
  },
  data() {
    return {
      navs: [
        {
          id: 0,
          icon: "home",
          text: "Home"
        },
        {
          id: 1,
          icon: "favorite",
          text: "Gallery"
        },
        {
          id: 2,
          icon: "info",
          text: "About"
        }
      ]
    };
  },
  methods: {}
};
</script>