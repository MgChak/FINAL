<template>
    <div class="card" :style="{backgroundImage:`url(${c.cardarray.img})`}">
        <div class="infor_container">
            <h1>{{c.cardarray.title}}</h1>
            <div class="breakline"></div>
            <div class="line1">
                <div class="line1_item">
                    <img src="../../../../../assets/pages/main/discover/group.svg" alt="">
                    <h2>{{ c.cardarray.num }}</h2>
                </div>  
                <div class="line1_item">
                    <img src="../../../../../assets/pages/main/discover/calendar_month.svg" alt="">
                    <h2>{{ c.cardarray.days }}</h2>
                </div> 
                <div class="line1_item">
                    <img src="../../../../../assets/pages/main/discover/monetization_on.svg" alt="">
                    <h2>{{ c.cardarray.money }}</h2>
                </div> 
            </div>
            <div class="breakline"></div>
            <div class="line2">
                <img :src="c.cardarray.uimg" alt="">
                <h2>@{{ c.cardarray.uid }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import {watch}  from 'vue'

let c = defineProps(['cardarray'])


</script>


<style scoped>
.card{
    width:75vw;
    height:330px;
    background-size: cover;
    border-radius: 40px;
    flex:none;
    overflow: hidden;
    position:relative;
    box-shadow: 0px 0px 6px rgba(45, 53, 39, 0.2);
}
.card:first-child{
    margin-left:5vw;
}
.breakline{
    width: 100%;
    height: 0px;
    border: 1px dashed rgba(45, 53, 39, 0.1);

}
.infor_container{
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    -webkit-backdrop-filter:blur(2px) ;
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    gap:16px;
    padding:16px 24px;
    position:absolute;
    left:0;
    bottom:0;

}
.infor_container > h1{
    font-weight: 700;
    font-size: 15px;

    color: #F7F7F7;
}
.infor_container > .breakline{
    border-color: #f7f7f745;
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
.line1_item >h2{
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #F7F7F7;
}
.line2{
    display: flex;
    gap:4px;
    align-items: center;
}
.line2 >img{
    height:20px;
    width: 20px;
    border-radius: 16px;
}
.line2 >h2{
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #F7F7F7;
}
</style>
