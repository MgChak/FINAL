<template>
 
    <div class="header_container">
       <Header/>
    </div>
    <div class="body_container">
        <Transition name="a1">
            <Card_list_my v-if="store.plans_page_on == 0"/>
        </Transition> 
        <Transition name="a2">
            <Card_list_saved v-if="store.plans_page_on == 1"/>
        </Transition>   
    </div>

   
</template>
   
<script setup>
import Header from './comps/header.vue'
import Card_list_my from './comps/card_list_my.vue'
import Card_list_saved from './comps/card_list_saved.vue'
import useStore from '../../../../store'
const store = useStore()




</script>


<style scoped>

.header_container{
    height:130px;
    width:100vw;
    position: fixed;
    top:0px;
    z-index: 2;
}
.body_container{
    width:100vw;
    margin:0 auto;
    margin-bottom: 150px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    background:var(--color-light-100);
    overflow: hidden;
}
.a1-enter-from{
    transform:translateX(-30%);
    opacity: 0;
}
.a1-enter-to{
    transform:translateX(0%);
    opacity: 1;
}
.a1-enter-to{
    transform:translateX(0%);
    opacity: 1;
}

.a2-enter-from{
    transform:translateX(30%);
    opacity: 0;
}
.a2-enter-to{
    transform:translateX(0%);
    opacity: 1;
}

.a1-enter-active,

.a2-enter-active
{
  transition: var(--animation-slow-3);
}

</style>