import { createRouter, createWebHashHistory} from 'vue-router'

import Discover from '../components/pages/main/discover_page/discover_page.vue'
import Friends from '../components/pages/main/friends_page/friends_page.vue'
import Plans from '../components/pages/main/plans_page/plans_page.vue'
import Profile from '../components/pages/main/profile_page/profile_page.vue'

export default  createRouter({
    history: createWebHashHistory(),
    routes:[
      //main pages
        {   
            path:'/',
            redirect:'/discover',
        },{   
            name:'discover',
            path:'/discover',                             
            component: Discover,
        },{   
            name:'friends',
            path:'/friends',                             
            component: Friends,
        },{   
            name:'plans',
            path:'/plans',                             
            component: Plans,
        },{   
            name:'profile',
            path:'/profile',                             
            component: Profile,
        },
    ],    
  })