import Vue from 'vue'
import VueRouter from 'vue-router'

// IMPORT Material


// Smooth scroll
import SmoothScroll from 'smooth-scroll';

import App from './App.vue'
import Home from './components/home/Home.vue'
import NOI from './components/noi/NOI.vue'
import NOIRulesAndRegulations from './components/noi/rules_and_regulations/RulesAndRegulations.vue'
import NOIAwards from './components/noi/awards/Awards.vue'
import News from './components/news/News.vue'
import Resources from './components/resources/Resources.vue'
import IOI from './components/ioi/IOI.vue'
import Gallery from './components/gallery/Gallery.vue'
import About from './components/about/About.vue'
import Contact from './components/contact/Contact.vue'
import SingUp from './components/auth/SingUp.vue'
import SingUpResponse from './components/auth/SingUpResponse.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/noi', component: NOI },
  { path: '/noi/rulesandregulations', component: NOIRulesAndRegulations },
  { path: '/noi/awards', component: NOIAwards },
  { path: '/news', component: News},
  { path: '/resources' , component: Resources},
  { path: '/ioi' , component: IOI},
  { path: '/about', component: About },
  { path: '/contact', component: Contact},
  { path: '/singup', component:SingUp},
  { path: '/singup/success', component:SingUpResponse}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})

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

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');


console.log(window.innerHeight);