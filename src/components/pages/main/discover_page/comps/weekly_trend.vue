<template>

    <div class="section_container">
        <h1>weekly trend</h1>
        <div class="breakline"></div>
        <div class="button_list_outer_box">
            <div class="button_list_window">
                <div class="button_list">

                    <div class="button" v-for="b in button_array_1" :key="b.id"
                        @click = "handle_click(b.id)"
                        :class = "{active : b.id == theId}"
                    >
                        <h2>{{ b.text }}</h2>
                    </div>
                    <div style="width:5vw;height:1px;flex:none;"></div>
                </div>
            </div>
        </div>
        <div class="card_list_outer_box">
            <div class="card_list_window">
                <div class="card_list">
                    <card v-for="c in card_array" :key="c.id" :cardarray = "c"/>  
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import {ref,computed,reactive} from 'vue'
    import card from './card.vue'

    import u1 from"../../../../../assets/pages/main/discover/u1.png"
    import b1 from"../../../../../assets/pages/main/discover/b1.png"
    import b2 from"../../../../../assets/pages/main/discover/b2.png"

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
        {id:0,title:"ALL - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b11},
        {id:1,title:"ALL - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b12},
        {id:2,title:"ALL - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b13},
        {id:3,title:"ALL - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b14}
    ]

    let card_array_beach = [
        {id:0,title:"BEACH - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b21},
        {id:1,title:"BEACH - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b22},
        {id:2,title:"BEACH - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b23},
        {id:3,title:"BEACH - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b24}
    ]

    let card_array_camp = [
        {id:0,title:"CAMP - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b31},
        {id:1,title:"CAMP - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b32},
        {id:2,title:"CAMP - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b33},
        {id:3,title:"CAMP - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b34}
    ]

    let card_array_city = [
        {id:0,title:"CITY - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b41},
        {id:1,title:"CITY - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b42},
        {id:2,title:"CITY - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b43},
        {id:3,title:"CITY - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b44}
    ]

    let card_array_mountain = [
        {id:0,title:"MOUNTAIN - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b51},
        {id:1,title:"MOUNTAIN - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b52},
        {id:2,title:"MOUNTAIN - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b53},
        {id:3,title:"MOUNTAIN - Best road trip plan!",num:'2-4',days:'4',money:'1,000-1,500',uid:'Bubulu_wawala',uimg:u1,img:b54}
    ]


    let button_array_1 = [
        {id:0,text:'all',data:card_array_all },
        {id:1,text:'beach',data:card_array_beach },
        {id:2,text:'camp',data:card_array_camp },
        {id:3,text:'cityscape',data:card_array_city },
        {id:4,text:'Mountain',data:card_array_mountain },
    ]

    let theId = ref(0)

    let card_array = computed(()=>{
        let a = button_array_1.find((i)=>i.id==theId.value)
        return a.data
        
    })

    let handle_click = (id)=>{
        theId.value = id
        console.log(theId.value,id)
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

    color: #2D3527;

    flex: none;
    order: 0;
    flex-grow: 0;
}
.breakline{
    width: 100%;
    height: 0px;
    border: 1px dashed rgba(45, 53, 39, 0.1);

}
.button_list_outer_box{
    width:100vw;
    height:50px;
    overflow: hidden;
}
.button_list_window{
    height:80px;
    width: 100%;
    overflow-x: scroll;
}
.button_list{
    height:100%;
    display: flex;
    gap:8px;

}
.button:first-child{
    margin-left:5vw;
}
.button{
    display: flex;
    height:30px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: var(--color-main-dark-50) 1px solid;
    padding:20px 24px;
    transition:var(--animation-slow-3)

}
.button > h2{
    font-size:15px;
    line-height: 15px;
    font-weight: 500;
    flex:none;
    text-transform: capitalize;
    
}
.active{
    background-color: var(--color-main-dark-100);
    color:var(--color-new-green);
    transition:var(--animation-slow-3)
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