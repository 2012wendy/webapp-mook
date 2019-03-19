<template>
    <div class="rotate">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="i in imgSource"><a href="#"><img  :src="i" alt=""></a></div>
                <!-- <div class="swiper-slide"><a href="#"><img src= alt=""></a></div>
                <div class="swiper-slide"><a href="#"><img src=="../img/rotateImg02.jpg" alt=""></a></div>
                <div class="swiper-slide"><a href="#"><img src="../img/rotateImg03.jpg" alt=""></a></div>
                <div class="swiper-slide"><a href="#"><img src="../img/rotateImg05.jpg" alt=""></a></div> -->
            </div>              
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>                 -->
            
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
export default {
    props:['imgSource'],
    data(){
        return {
            // mySwiper
        }
    },
    mounted(){
        
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay:true,
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            
        })        
    }
}
</script>
<style scoped>
    @import "swiper/dist/css/swiper.min.css";
    

    /* 轮播图 */
.swiper-container{
    height:1.28rem;
    background:white;
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom:-.07rem;
}
.swiper-pagination-bullet{
    background:white;
    opacity:.4;
}
.swiper-slide a img{
    height:1.11rem;
    width:3.5rem;
    border-radius:.1rem;
    margin:.08rem auto;
}
</style>


