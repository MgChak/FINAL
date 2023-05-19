<template>
    <div class="main_conatiner">
        <div class = "view_window" ref='el'>
            <div class="pic_list" 
                :style="{width:list_width, transform:list_transform,transition:list_transition}" 
                @touchstart="use_handle_touch($event)"
                @touchmove="use_handle_touch($event)"
                @touchend="use_handle_touch($event)"
            >
                <div class="img_conatiner" v-for="p in pics" :key="p.id" 
                    :style="{width:width+'px',backgroundImage:`url(${p.pic})`}"
                >
                </div>
            </div>
        </div>
        <div class="dots_conatiner">
            <div class="dots" v-for="p in pics" :key="p.id" 
                :class = "{hide:p.id!=page_on}"
            ></div>
        </div>
    </div>
   
</template>

<script setup>
import { ref,computed,onMounted } from 'vue'
import { useElementSize } from '@vueuse/core'


    //引入props
    let props = defineProps(['slideshow_arr'])

    //创建图片数列,根据props写入数列和id
    let pics = computed(()=>{

        var b = []

        props.slideshow_arr.forEach((item,index)=>{
            var a = {}
            a.pic = item
            a.id = index
            b.push(a)
        })

        return b
    })

    //获取view——window size， 给img用
    let el = ref()
    const { width } = useElementSize(el)

    //计算列表的总长度
    let list_width = computed(()=>width.value*props.slideshow_arr.length + 'px')

    //动画
    let list_transition = ref('')

    //幻灯片逻辑
    //页面 
    let page_on = ref(0)

    //是否开启触摸跟随
    let is_touch =ref(false) 

    //保存列表当前的位置
    let list_position = ref(0)

    //计算列表的移动
    let list_transform = computed(()=>{
        if(!is_touch.value){

            var a = page_on.value*width.value

            return `translateX(-${a}px)`
            
        }else{
            return `translateX(-${list_position.value}px)`
        }
    })



    //触摸_起始点
    let touch_moving_start  = 0
    //触摸——刷新
    let touch_moving = 0
    //处理触摸
    let use_handle_touch = (e)=>{
        switch (e.type) {
            //默认文章阅读模式
            case "touchstart":
                touch_start(e)
            break;
            case "touchmove":
                touch_move(e)
            break;
            case "touchend":
                touch_end(e)
            break;
            default:
                
            break;
        }
    }
    //处理触摸-开始
    let touch_start=(e)=>{
        //关闭动画
        list_transition.value = null
        //打开触摸跟随
        is_touch.value = true
        //保存列表的当前位置
        list_position.value = page_on.value*width.value
        //保存初始点位置
        touch_moving_start = e.touches[0].clientX
        touch_moving = e.touches[0].clientX
    }
    //处理触摸-移动
    let touch_move=(e)=>{
        //阻止默认事件
        e.preventDefault()
        //根据初始点位置和当前移动的位置计算出移动的距离，
        var a = touch_moving - e.touches[0].clientX
        //重新赋值start_point用于计算下一次移动
        touch_moving = e.touches[0].clientX
        //更新列表的位置坐标
        list_position.value = list_position.value+a
        
    }
    //处理触摸-结束
    let touch_end=(e)=>{
        if(touch_moving_start > touch_moving){
            page_move('next')
        }else if(touch_moving_start < touch_moving){
            page_move('pre')
        }
        //打开动画
        list_transition.value = 'var(--animation-slow-3)'
        //关闭触摸跟随
        is_touch.value = false

    }


    //翻页
    let page_move = (val)=>{
        if (val== 'next' && page_on.value + 1 < props.slideshow_arr.length){
            page_on.value++
        }else if(val== 'pre' && page_on.value - 1 >= 0){
            page_on.value--
        }
    }



</script>

<style scoped>
.main_conatiner{
    position:relative;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.view_window{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;

    position:relative;
}
.pic_list{
    display: flex;
    height:100%;
}
img{
    width:100%;
}
.img_conatiner{
    height:100%;
}

.dots_conatiner{
    position:absolute;
    bottom:0px;
    display: flex;
    height:24px;
    gap:8px;
    width:100%;
    align-items: center;
    justify-content: center;
    z-index: 1;
}
.dots{
    
    width:20px;
    flex:none;
    height:5px;
    cursor: pointer;
    border-radius: 3px;
    transition:all 0.3s;
    background-color: black;
    border:white 1px solid;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);
}
.hide{
    width:5px;
    opacity: 0.5;
}
</style>