import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import('./components/shared/Layout.vue')
const Home = () => import('./views/Home.vue')
const Find = () => import('./views/Find.vue')
const User = () => import('./views/User.vue')
const About = () => import('./views/About.vue')
const UserProfile = () => import('./components/user/UserProfile.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
            { path: '/',
              redirect: '/home',
              name: 'index',
              component: Layout,
              children: [{ path: 'home', component: Home }]    // - Remove other child paths 
            },
            { path: 'find', name: 'find', component: Find },   // + Add separate routes
            { path: 'user',
              component: User,                     // ! Ensure your User component has a router-view tag as it has children views
              redirect: 'user/profile',
              children: 
              [
                { path: 'profile', component: UserProfile }    // ! child routes will get parent component first
              ]
            },
            { path: 'about', component: About }
          ]
})