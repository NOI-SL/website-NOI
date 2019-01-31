<template>
  <header class="mdc-toolbar mdc-toolbar--fixed mdc-theme--background mdc-theme--primary mdc-elevation--z2" id="noi-nav-bar">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start mdc-toolbar__section--shrink-to-fit mdc-toolbar__section-logo-conteiner">
        <div class="logo-container">
          <img class="img-responsive" src="img/NOI_LOGO_ORG_small.png" alt>
        </div>
      </section>
      <section class="mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--nav-mobile-content">
          <div class="mdc-tab-bar" role="tablist">
            <div class="mdc-tab-scroller">
              <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">
                  <button class="mdc-tab nav-tab mobile-responsive-button" role="tab" aria-selected="true" tabindex="0">
                    <span class="mdc-tab__content">
                      <span class="mdc-tab__icon material-icons" aria-hidden="true">dehaze</span>
                    </span>
                    <span class="mdc-tab__ripple"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section class="mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit  mdc-toolbar__section--nav-content">
        <div class="mdc-tab-bar" role="tablist">
          <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
              <div class="mdc-tab-scroller__scroll-content">
                <nav-bar-item
                  v-for="nav in navs"
                  :key="nav.id"
                  :nav="nav"
                  :isSelected="nav.route == $route.path"
                />
                <router-link :to="'singup'">
                  <button class="mdc-button mdc-button--raised reg-button" tabindex="0">
                    <span class="material-icons mdc-button__icon" aria-hidden="true">person</span>
                    <span>Sign up</span>
                  </button>
                </router-link>
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

import {MDCRipple} from '@material/ripple';

export default {
  components: {
    NavBarItem
  },
  data() {
    return {
      navs: [
        {
          id: 0,
          icon: "",
          route: "/",
          text: "Home"
        },
        {
          id: 1,
          icon: "",
          route: "/noi",
          text: "NOI 2019"
        },
        {
          id: 2,
          icon: "",
          route: "/news",
          text: "News"
        },
        {
          id: 3,
          icon: "",
          route: "/resources",
          text: "Resources"
        },
        {
          id:4,
          icon:"",
          route:"/ioi",
          text:"IOI"
        },
        {
          id:5,
          icon:"",
          route:"/about",
          text:"About"
        },
        {
          id:6,
          icon:"",
          route:"/contact",
          text:"Contact"
        }
      ]
    };
  },
  methods: {},
  mounted : () => {
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
  }
};
</script>