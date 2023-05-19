<template>
    <div class="header_container_in">
        <div class="button_container">
            <div class="button my_plans" :class="{active:page_on == 0}" @click="handle_click(0)">
                <img src="../../../../../assets/pages/main/plans/m.svg" alt="">
                <h1>MY PLANS</h1>
            </div>
            <div class="button save_plans" :class="{active:page_on == 1}" @click="handle_click(1)">
                <img src="../../../../../assets/pages/main/plans/d.svg" alt="">
                <h1>SAVED PLANS</h1>
            </div>
            <div class="bar" :style = 'bar_position'></div>
        </div>
    </div>
</template>

<script setup>

import {computed,ref} from 'vue'
import useStore from '../../../../../store'
const store = useStore()

    let page_on = computed(()=>store.plans_page_on)

    let handle_click=(id)=>{
        store.plans_page_on = id
    }

    let bar_position=computed(()=>{
        if (page_on.value == 0){
            return {left:0}
        }else if (page_on.value == 1){
            return {left:'50%'}
        }
    })

</script>


<style scoped>
.header_container_in{
    background-color:var(--color-light-100);
    width:100%;
    height:130px;
    position:absolute;
    top:0;
    left:0;
    box-shadow: 0px 0px 13px rgba(48, 54, 42, 0.3);
    border-radius: 0 0 40px 40px;
    transition:var(--animation-slow-3);
    -webkit-backdrop-filter:blur(5px) ;
    backdrop-filter: blur(5px);
    overflow:hidden
}
.button_container{
    display:flex;
    width:var(--width--inner);
    position:absolute;
    bottom:20px;
    left:0;
    right:0;
    margin:0 auto;
}
.button{
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:8px;
    opacity: 0.2;
    transition: var(--animation-slow-3);
}
.bar{
    background-color: white;
    position:absolute;
    width:50%;
    height:40px;
    border-radius: 40px;
    z-index: -1;
    bottom: -8px;
    box-shadow: 0px 0px 4px rgba(48, 54, 42, 0.1);
    transition: var(--animation-slow-3);
}
h1{
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    color:var(--color-main-dark-100)
}

.active{
    opacity: 1;
    transition: var(--animation-slow-3);
}
</style>