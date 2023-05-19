<template>
 <div class="card_conatiner">
    <div class="slideshow_container">
        <img_slideshow :slideshow_arr="c.cardarray.img"/>
    </div>
    <div class="information_container">
        <h1>{{ c.cardarray.title }}</h1>
        <div class="line1">
            <div class="line1_item">
                <img src="../../../../../assets/pages/main/plans/group.svg" alt="">
                <h2>{{ c.cardarray.num }}</h2>
            </div>  
            <div class="line1_item">
                <img src="../../../../../assets/pages/main/plans/calendar_month.svg" alt="">
                <h2>{{ c.cardarray.days }} days</h2>
            </div> 
        </div>
        <div class="line1_item">
            <img src="../../../../../assets/pages/main/plans/monetization_on.svg" alt="">
            <h2>{{ c.cardarray.money }}</h2>
        </div> 
    </div>
 </div>
</template>

<script setup>
import img_slideshow from './img_slideshow.vue';
let c = defineProps(['cardarray'])


</script>


<style scoped>
.card_conatiner{
    background-color: white;
    width:49%;
    border-radius: 16px;
    overflow:hidden;
    margin-bottom: 8px;
    box-shadow: 0px 0px 6px rgba(45, 53, 39, 0.2);
}
.slideshow_container{
    width:100%;
    height:40vw;
    background-color: gray;
    overflow: hidden;
}
.information_container{
    width:90%;
    margin:10px auto;
    display: flex;
    flex-direction: column;
    gap:6px;
}
h1{
    font-weight: 700;
    font-size: 13px;
    color: rgba(45, 53, 39);
}
h2{
    font-weight: 500;
    font-size: 12px;
    color: rgba(45, 53, 39, 0.6);
}
.line1{
    display: flex;
    gap:16px;
}
.line1_item {
    display: flex;
    gap:4px;
    align-items: center;
}

</style>
