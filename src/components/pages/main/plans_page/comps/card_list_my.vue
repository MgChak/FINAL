<template>
 <div class="card_list_conatiner">
    <Card v-for="c in card_array_all " :key="c.id" :cardarray = "c"/> 
 </div>
</template>

<script setup>
import Card from './card.vue'

import b11 from"../../../../../assets/pages/main/discover/imgs/B11.png"
import b12 from"../../../../../assets/pages/main/discover/imgs/B12.png"
import b13 from"../../../../../assets/pages/main/discover/imgs/B13.png"
import b14 from"../../../../../assets/pages/main/discover/imgs/B14.png"

import b21 from"../../../../../assets/pages/main/discover/imgs/B21.png"
import b22 from"../../../../../assets/pages/main/discover/imgs/B22.png"
import b23 from"../../../../../assets/pages/main/discover/imgs/B23.png"
import b24 from"../../../../../assets/pages/main/discover/imgs/B24.png"

import b31 from"../../../../../assets/pages/main/discover/imgs/B31.png"
import b32 from"../../../../../assets/pages/main/discover/imgs/B32.png"
import b33 from"../../../../../assets/pages/main/discover/imgs/B33.png"
import b34 from"../../../../../assets/pages/main/discover/imgs/B34.png"

import b41 from"../../../../../assets/pages/main/discover/imgs/B41.png"
import b42 from"../../../../../assets/pages/main/discover/imgs/B42.png"
import b43 from"../../../../../assets/pages/main/discover/imgs/B43.png"
import b44 from"../../../../../assets/pages/main/discover/imgs/B44.png"

import b51 from"../../../../../assets/pages/main/discover/imgs/B51.png"
import b52 from"../../../../../assets/pages/main/discover/imgs/B52.png"
import b53 from"../../../../../assets/pages/main/discover/imgs/B53.png"
import b54 from"../../../../../assets/pages/main/discover/imgs/B54.png"

let card_array_all = [
        {id:0,title:"Best road trip plan ever! Let's feel the nature",num:'2-4',days:'4',money:'1,000-1,500',img:[b11,b12,b13,b14]},
        {id:1,title:"Best road trip plan ever! Let's feel the nature",num:'2-4',days:'4',money:'1,000-1,500',img:[b21,b22,b23,b24]},
        {id:2,title:"Best road trip plan ever! Let's feel the nature",num:'2-4',days:'4',money:'1,000-1,500',img:[b31,b32,b33,b34]},
       
    ]

</script>


<style scoped>
.card_list_conatiner{
    width:95vw;
    display: flex;
    flex-wrap: wrap;
    margin:0 auto;
    gap:2%;

}
</style>