<template>
 
<div class="nav_main_container">

    <div class="nav_list">
        <div class="nav_items" v-for="n in nav_arry" :key = 'n.id'
            :class="{ active : n.nav_to==path_now }"
            @click = handle_click(n.id)
        >
            <img :src="n.icon" alt="">
            <h1>{{ n.text }}</h1>
        </div>
        <div class="item_back" :class="back_class">
            <div class="back" >
            </div>
        </div>
    </div>
</div>

</template>



<script setup>

import {computed} from 'vue'
import {useRouter} from 'vue-router'
import useStore from '.././../store'

import profile_icon from '../../assets/icons/account_circle.svg'
import plans_icon from '../../assets/icons/ballot.svg'
import discover_icon from '../../assets/icons/location_automation.svg'
import friends_icon from '../../assets/icons/supervised_user_circle.svg'

const router = useRouter()
const store = useStore()

    let nav_arry = [
        {id:0,nav_to:'discover',text:'discover',icon:discover_icon},
        {id:1,nav_to:'friends',text:'friends',icon:friends_icon},
        {id:2,nav_to:'plans',text:'plans',icon:plans_icon},
        {id:3,nav_to:'profile',text:'profile',icon:profile_icon}
    ]

    let path_now = computed(()=>store.rout_name_now)

    let handle_click= (id) =>{
        let i = nav_arry.find((item)=>item.id == id)
        router.push({name:i.nav_to})
    }

    let back_class = computed(()=>`back_class_${store.rout_name_now}`)

</script>


<style scoped>

.nav_main_container{

    width:100%;
    height:94px;
    background-color:var(--color-light-100);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.22);

    position:fixed;
    bottom:0px;
    right:0;

    z-index:5;
    
}
.nav_list{
    display: flex;
    margin: 16px 16px;
    position:relative;
}                         
.nav_items{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:4px;
    cursor: pointer;
}
h1{
    font-size: 11px;
    color:var(--color-main-dark-50);
    text-transform: uppercase;
    transition: var(--animation-slow-3);
    font-weight: 700;
    z-index: 1;
}
img{
    opacity: 0.5;
    transition: var(--animation-slow-3);
}

.active > img{
    opacity: 1;
    transition: var(--animation-slow-3);
}
.active > h1{
    color:var(--color-new-green);
    transition: var(--animation-slow-3);
}
.item_back{
    width:25%;
    height:20px;
    

    position:absolute;
    bottom:-4px;
    display: flex;
    justify-content: center;

    z-index:0;
}
.back{
    width:90%;
    height:100%;
    background-color: var(--color-main-dark-100);
    border-radius: 20px;
}


.back_class_discover{
    left:0;
    transition: var(--animation-slow-3);
}
.back_class_discover > .back{
    width:90%;
    transition: var(--animation-slow-3);
}
.back_class_friends{
    left:25%;
    transition: var(--animation-slow-3);
}
.back_class_friends > .back{
    width:80%;
    transition: var(--animation-slow-3);
}
.back_class_plans{
    left:50%;
    transition: var(--animation-slow-3);
}
.back_class_plans > .back{
    width:70%;
    transition: var(--animation-slow-3);
}
.back_class_profile{
    left:75%;
    transition: var(--animation-slow-3);
}
.back_class_profile > .back{
    width:80%;
    transition: var(--animation-slow-3);
}
</style>