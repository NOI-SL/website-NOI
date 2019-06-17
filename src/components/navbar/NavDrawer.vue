<template>
    <aside id="noi-drawer" class="mdc-drawer mdc-drawer--modal">
        <div class="mdc-drawer__content"> <!-- for open mdc-drawer--open -->
            <nav class="mdc-list">
                <nav-drawer-item
                
                    v-for="nav in navs"
                    :key="nav.id"
                    :nav="nav"
                    :isSelected="nav.route == $route.path"
                    :dropDowns="dropDowns"
                
                />
                <a target="_blank" href="https://portal.noi.lk/" class="mdc-list-item reg-button-link">
                  <button class="mdc-button mdc-button--raised reg-button" tabindex="0">
                    <span class="material-icons mdc-button__icon" aria-hidden="true">book</span>
                    <span>NOI Portal</span>
                  </button>
                </a>
            </nav>
        </div>
    </aside>
</template>

<script>

import NavDrawerItem from "./NavDrawerItem.vue"

import {MDCList} from "@material/list";
import {MDCDrawer} from "@material/drawer";
import {MDCRipple} from '@material/ripple';

var drawer_list, drawer;

export default {
  components: {
    NavDrawerItem
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
          route: "/results",
          text: "Final Results"
        },
        // {
        //   id: 2,
        //   icon: "",
        //   route: "/news",
        //   text: "News"
        // },
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
      ],
      dropDowns: [
          {
              id: 0,
              dropDownFor: 1,
              dropDownItems : [
                  // {
                  //   id: 0, // ****edit style**** 
                  //   icon: "",
                  //   route: "/noi/rulesandregulations",
                  //   text: "Rules and regulations"
                  // },
                  {
                    id: 1,
                    icon: "",
                    route: "/noi/awards",
                    text: "Awards"
                  }
              ]
          }
      ],
      buttons : [
          {
            id: 0,
            icon: "",
            route: "/",
            text: "Home"
          }
      ]
    };
  },
  methods: {},
  mounted : () => {
    
    drawer_list = MDCList.attachTo(document.querySelector('.mdc-list'));
    try {
      drawer_list.wrapFocus = true;
    } catch (error) {
      console.log(error);
    }

    drawer = MDCDrawer.attachTo(document.querySelector('#noi-drawer'));

    document.querySelector('.mobile-responsive-button').addEventListener('click', function(){
      try {
        drawer.open = !drawer.open;
      }catch(error){
        console.log(error);
      }
    });

    // DROPDOWN action
    document.querySelector('.mdc-list-item__text__content:not(.dropdown_icon)').addEventListener('click', function (event) {
      if (event.target.parentElement.className == 'mdc-list-item__content') {
        event.target.parentElement.className += ' mdc-list-item__content--activated';
        event.target.childNodes[2].innerText = 'keyboard_arrow_up';
      }else{
        if ( event.target.parentElement.className != 'mdc-list-item__text__content') {
          event.target.parentElement.className = 'mdc-list-item__content';
        }
        event.target.childNodes[2].innerText = 'keyboard_arrow_down';
      }
    });

    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

  }
};


</script>