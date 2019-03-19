<template>
    <section>
        <swiper :imgSource="img"></swiper>
        <note-nav></note-nav>
        <note-list></note-list>
    </section>
</template>
<script>
import swiper from "../subcom/swiper.vue";
import noteNav from "../subcom/note-nav.vue";
import noteList from "../subcom/note-list.vue";
export default {
    data(){
        return {
            img:[
                "/static/img/rotateImg02.jpg",
               "/static/img/rotateImg03.jpg",
               "/static/img/rotateImg05.jpg"]
        }
    },
    components:{
        "swiper":swiper,
        "note-nav":noteNav,
        "note-list":noteList,
    }
}
</script>
<style scoped>
@import "../assets/css/note.css";
</style>

