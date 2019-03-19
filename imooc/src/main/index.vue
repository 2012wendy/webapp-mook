<template>
   
       
       
      <section>
        <swiper :imgSource="img"></swiper>
        <div class="actrul">
        <!-- 实战推荐标题 -->
            <div class="actTit">
                <h1>实战推荐</h1>
                <a href="">查看更多<img src="/static/img/more.png" alt=""></a>
            </div>
            <!-- 课程内容盒子 -->
            <index-act :actData="actData"></index-act>
            <p class="lookMore">
                查看更多
            </p>
        </div>
        <index-job :jobData="jobData"></index-job>
        <index-newcourse></index-newcourse>

      </section>
        

   
</template>
<script>
    
    import swiper from "../subcom/swiper.vue";
    import indexAct from "../subcom/index-act.vue";
    import indexJob from "../subcom/index-job.vue";
    import indexNewcourse from "../subcom/index-newcourse.vue";
export default {
     
     data(){
       return {
        //    list:["首页","课程","实战","就业班","专栏","手记","猿问"],
           img:[
               "/static/img/rotateImg.jpg",
               "/static/img/rotateImg01.jpg",
               "/static/img/rotateImg02.jpg",
               "/static/img/rotateImg03.jpg",
               "/static/img/rotateImg05.jpg"
           ],
           actData:[
               {img:"/static/img/courseImg.jpg",
	            couTit:"全面系统 Python3入门+进阶课程 更快",
	            couInfo:"中级",
                personImg:"/static/img/person.png",
                person:"4868",
                price:"￥266"},
                {img:"/static/img/courseImg.jpg",
                couTit:"web Python3入门+进阶课程 更快",
                couInfo:"高级",
                personImg:"/static/img/person.png",
                person:"4877",
                price:"￥866"},
                {img:"/static/img/courseImg.jpg",
                couTit:"全面系统 Python3入门+进阶课程 更快",
                couInfo:"初级",
                personImg:"/static/img/person.png",
                person:"2868",
                price:"￥166"},
                {img:"/static/img/courseImg.jpg",
                couTit:"JAVA Python3入门+进阶课程 更快",
                couInfo:"中级",
                personImg:"/static/img/person.png",
                person:"7868",
                price:"￥966"},
                {img:"/static/img/courseImg.jpg",
                couTit:"NET Python3入门+进阶课程 更快",
                couInfo:"高级",
                personImg:"/static/img/person.png",
                person:"3868",
                price:"￥286"}
           ],
           jobData:["/static/img/jobImg.jpg","/static/img/jobImg.jpg","/static/img/jobImg.jpg","/static/img/jobImg.jpg"]
       }
    },
    
    components:{
        "swiper":swiper,
        "index-act":indexAct,
        "index-newcourse":indexNewcourse,
        "index-job":indexJob
    }
}
</script>
<style>
 @import "../assets/css/index.css";

 html,body,{
    height:100%;
    
 }
 header{
     height:1rem;
     
 }
 section{
     -webkit-flex:1;
     overflow-y:auto;
 }
 
</style>


