<template>
 <div class="discover_main_conatiner">

    <div class="header_container">
        <Header/>
    </div>
    <div class="body_container">
        <Weekly_trend/>
        <Made_for_you/>
    </div>

 </div>


</template>

<script setup>
import Header from './comps/header.vue'
import Weekly_trend from './comps/weekly_trend.vue'
import Made_for_you from './comps/made_for_you.vue'
</script>


<style scoped>

.discover_main_conatiner{
   width:100%;
   display: flex;
   flex-direction: column;
}

.header_container{
    height:236px;
    width:100%;
    position: fixed;
    top:0px;
    z-index: 2;
}


.body_container{
    display:flex;
    flex-direction: column;
    width:var(--width--inner);
    margin:0 auto;
    margin-bottom: 150px;
    margin-top: 250px;
    background:var(--color-light-100);
}

</style>
