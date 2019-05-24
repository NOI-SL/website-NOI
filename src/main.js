import Vue from 'vue'
import VueRouter from 'vue-router'

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
import SignUp from './components/auth/SignUp.vue'
import SignUpResponse from './components/auth/SignUpResponse.vue'
import Results from './components/results/Results.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/noi', component: NOI },
  { path: '/noi/rulesandregulations', component: NOIRulesAndRegulations },
  { path: '/noi/awards', component: NOIAwards },
  { path: '/news', component: News },
  { path: '/resources', component: Resources },
  { path: '/ioi', component: IOI },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/signup', component: SignUp },
  { path: '/signup/success', component: SignUpResponse },
  { path: '/results', component: Results }
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