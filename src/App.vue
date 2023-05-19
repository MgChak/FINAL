<template>

<div class="main_container">
 
    
    <router-view></router-view>
    
    <Main_nav/>


</div>
 
</template>

<script setup>
import {watchEffect} from 'vue'
import {useRoute} from 'vue-router'
import useStore from './store/index'
import Main_nav from './components/navbars/main_nav.vue'
const store = useStore()
const route = useRoute()

//监听路由变化并存入数据库
watchEffect(()=>{store.rout_name_now = route.name})

window.addEventListener('scroll',(e)=>{
      store.scroll_position = window.scrollY
    })
</script>



<style scoped>
.main_container{
  width:100vw;
  overflow-x: hidden;
  background:var(--color-light-100);

  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
