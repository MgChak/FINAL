<template>

    <div class="section_container">
        <div class="line1">
            <h1>made for you</h1>
            <img src="../../../../../assets/pages/main/discover/replay.svg" alt="" @click="handle_click()">
        </div>
        <div class="card_list_outer_box">
            <div class="card_list_window">
                <div class="card_list">
                    <card v-for="c in card_array_show.data " :key="c.id" :cardarray = "c"/>  
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import {ref,computed,reactive,onMounted} from 'vue'
    import card from './card.vue'

    import u1 from"../../../../../assets/pages/main/discover/u1.png"
    import b1 from"../../../../../assets/pages/main/discover/b1.png"
    import b2 from"../../../../../assets/pages/main/discover/b2.png"


    import b61 from"../../../../../assets/pages/main/discover/imgs/B61.png"
    import b62 from"../../../../../assets/pages/main/discover/imgs/B62.png"
    import b63 from"../../../../../assets/pages/main/discover/imgs/B63.png"
    import b64 from"../../../../../assets/pages/main/discover/imgs/B64.png"
    import b65 from"../../../../../assets/pages/main/discover/imgs/b65.png"
    import b66 from"../../../../../assets/pages/main/discover/imgs/B66.png"
    import b67 from"../../../../../assets/pages/main/discover/imgs/B67.png"
    import b68 from"../../../../../assets/pages/main/discover/imgs/B68.png"
    import b69 from"../../../../../assets/pages/main/discover/imgs/B69.png"
    import b70 from"../../../../../assets/pages/main/discover/imgs/B70.png"


    let card_array_all = [
        {id:0,title:"Random data - 001 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b61},
        {id:1,title:"Random data - 002 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b62},
        {id:2,title:"Random data - 003 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b63},
        {id:3,title:"Random data - 004 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b64},
        {id:4,title:"Random data - 005 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b65},
        {id:5,title:"Random data - 006 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b66},
        {id:6,title:"Random data - 007 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b67},
        {id:7,title:"Random data - 008 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b68},
        {id:8,title:"Random data - 009 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b69},
        {id:9,title:"Random data - 010 ",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b70},
    ]


    let card_array_show = reactive({
        data:[]
    })

    let random_card=()=>{
        var a = 0
        var b = []
        while (a < 4) {
            var index = Math.floor(Math.random() * card_array_all.length)
            let el = card_array_all[index]  
            if(!b.includes(el)){
                b.push(el)
                a++  
            } 
        }
        card_array_show.data=b
    }

    onMounted(()=>{
        random_card()
    })

    let handle_click = ()=>{
        
        random_card()
    }
    


</script>


<style scoped>
.section_container{
    margin-top:24px;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:16px;
}
h1{
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    flex:1;
    color: #2D3527;

}
.breakline{
    width: 100%;
    height: 0px;
    border: 1px dashed rgba(45, 53, 39, 0.1);

}
.line1{
    width:100%;
    display: flex;

}
.line1 > img{
    width:30px;
    height:30px;
}
.card_list_outer_box{
    width:100vw;
    height:355px;
    overflow: hidden;
}
.card_list_window{
    width:100%;
    overflow-x:scroll;
}
.card_list{
    height:400px;
    display: flex;
    gap:8px;
    margin-top: 8px;
}



</style>