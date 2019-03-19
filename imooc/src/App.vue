<template>
  <div id="app"> 
    <!-- 顶部header区域    -->
  <header>
    <imoocHeader></imoocHeader>
    <div class="hNav">
        <router-link to="/index">首页</router-link>
        <router-link to="/course">课程</router-link>
        <router-link to="/actual">实战</router-link>
        <router-link to="/job">就业班</router-link>
        <router-link to="/spec">专栏</router-link>
        <router-link to="/note">手记</router-link>
        <router-link to="/question">猿问</router-link>
    </div>
  </header>

    <!-- 顶部nav区域 -->
    <router-view></router-view>

    <!-- 中间section区域 -->
   
  </div>
</template>

<script>
import imoocHeader from "./subcom/imoocHeader.vue"
export default {
  name: 'App',
  components:{
      "imoocHeader":imoocHeader,
    }
}
</script>

<style >
header{
    display: flex;
      /* height:100%; */
      flex-direction: column;
      justify-content: space-between;
}
#app{
    width:100%;
    height:100%;
     display: flex;
    
      flex-direction: column;
  }
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
 /* 头部导航 */
.hNav{
    height:.4rem;
    display:-webkit-flex;
    position:relative;
    top:.01rem;
    background:white;
}
.hNav a{
    font-size:.15rem;
    color:#73767f;
    -webkit-flex:1;
    line-height:.4rem; 
    text-align:center;
    
}

.hNav a:hover{
    color:#e51b1b;
    background:url(/static/img/underline.png) bottom center no-repeat;
    background-size:.07rem .04rem;
}
</style>
