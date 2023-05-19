import { defineStore } from 'pinia'


export default defineStore("Main",{
    actions:{
    },
    getters: {

    },
    state:()=>{
        return{
            //当前路由名称
            rout_name_now:'',
            //滚动位置
            scroll_position:0,
            //======================
            //Plans page 使用数据。使用src\components\pages\main\friends_page
            plans_page_on:0,
        }
    },
    
})