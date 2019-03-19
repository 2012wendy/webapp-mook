<template>
    <section>
        <swiper :imgSource="img"></swiper>

        <actual-nav></actual-nav> 
        <actual-list></actual-list>   
    </section>

</template>
<script>
import swiper from "../subcom/swiper.vue";
import actualNav from "../subcom/actual-nav.vue";
import actualList from "../subcom/actual-list.vue";
export default {
    data(){
        return {
            img:[
                "/static/img/rotateImg.jpg",
               "/static/img/rotateImg01.jpg",
               "/static/img/rotateImg02.jpg",]
        }
    },
    components:{
        "swiper":swiper,
        "actual-nav":actualNav,
        "actual-list":actualList,
    }
}
</script>
<style scoped>
@import "../assets/css/actrual.css";
.swiper{
    background:white;
    height:1.32rem;
}
</style>

