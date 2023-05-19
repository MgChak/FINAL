<template>
    <div class="header_container_in" :style="{top:position}" :class="{small:store.scroll_position > sticky}">
        <div class="infor_container">
            <h1>Where would you like to discover?</h1>
            <div class="searchbar">
                <input type="text" placeholder="Let’s find a perfect plan for you！">
                <img src="../../../../../assets/pages/main/discover/search.svg" alt="">
            </div>
        </div>
        <img src="../../../../../assets/pages/main/discover/back.png" alt="">
    </div>
</template>

<script setup>

import {computed} from 'vue'
import useStore from '../../../../../store'
const store = useStore()

    var sticky = 132

    let position = computed(()=>{

        var p = store.scroll_position

        if ( p > sticky){
            return -sticky+'px'
        }else {
            return -p + 'px'
        }
    })

</script>


<style scoped>
.header_container_in{
    background-color:#2d3527bd;
    width:100%;
    height:236px;
    position:absolute;
    left:0;
    box-shadow: 0px 0px 13px rgba(48, 54, 42, 0.3);
    border-radius: 0 0 40px 40px;
    transition:var(--animation-slow-3);
    -webkit-backdrop-filter:blur(5px) ;
    backdrop-filter: blur(5px);
    overflow:hidden
}
.header_container_in > img{
    position:absolute;
    width:100%;
    height:100%;
    z-index: 0;
    transition:var(--animation-slow-3)
}
.infor_container{
    width: var(--width--inner);
    display: flex;
    flex-direction: column;
    gap:24px;
    position:absolute;
    right:0;
    left:0;
    bottom:16px;
    margin:0 auto;
    transition:var(--animation-slow-3);
    z-index:1;

}

.header_container_in >.infor_container> h1{

    width: 189px;
    height: 48px;


    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    /* light */

    color: #F7F7F7;

    text-shadow: 0px 0px 5px #000000;
    transition:var(--animation-slow-3)
}

.searchbar{
    width: 100%;
    height: 64px;
    left: 0px;
    right:0px;
    margin:0 auto;
    bottom:20px;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(13.5px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 46px;
    
    display: flex;
    align-items: center;
    gap:8px;
    padding: 0px 9px 0px 20px;
    transition:var(--animation-slow-3)
    
}
.searchbar > img {
    width: 50px;
    height:50px;
    transition:var(--animation-slow-3)
}
.searchbar > input {
    border:none;
    background-color: transparent;
    flex:1;
    font-size: 15px;
    color:var(--color-light-100);
    transition:var(--animation-slow-3)
}
.searchbar > input::placeholder{
    font-size: 15px;
    color:var(--color-light-100);
    transition:var(--animation-slow-3)
}

.searchbar > input:focus-visible{
    outline:none;
    transition:var(--animation-slow-3)
}

.small{
    background-image: none;
    transition:var(--animation-slow-3)
}
.small > img{
    opacity: 0;
    transition:var(--animation-slow-3)
}
.small > .infor_container > h1{
    opacity:0;
    transition:var(--animation-slow-3)
}
.small > .infor_container > .searchbar{
    height:50px;
    transition:var(--animation-slow-3)
}
.small > .infor_container > .searchbar > img{
    width:38px;
    transition:var(--animation-slow-3)
}

</style>