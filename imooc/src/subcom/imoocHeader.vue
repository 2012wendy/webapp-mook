<template>
   
        <div class="hTop">
            <img src="/static/img/logo.png" alt=""/>
            <div class="search">
                <img src="/static/img/search.png" alt=""/>
                <div class="login">
                    <a href="#" class="down">下载APP</a>|
                    <a href="#" class="log">登录</a>
                </div>
            </div>
        </div>
        
        <!-- <div class="contentBox">
            <router-view></router-view>
        </div> -->

    
</template>
<script>
   

export default {
    // props:["nav"],
    // mounted(){
    //     console.log(this.list)
    // }
}
</script>
<style scoped>
   
header{
    display: flex;
      /* height:100%; */
      flex-direction: column;
      justify-content: space-between;
}
.hTop{
    display:-webkit-flex;
    -webkit-justify-content:space-between;
    -webkit-align-items:center;
    height:.6rem;
    padding:0 .13rem;
    background:white;

}
.hTop img{
    width:.79rem;
    height:.24rem;
}
.search{
    display:-webkit-flex;
    -webkit-align-items:center;
}
.search img{
    width:.2rem;
    height:.2rem;
    margin-right:.13rem;
}
.login{
    width:1.23rem;
    height:.3rem;
    background:#fef0ef;
    border-radius:.15rem;
    color:#fac4c4;
    line-height:.3rem;
    
    text-align:center;
    
    font-size:.12rem;
}
.down,.log{
    font-size:.11rem;
    line-height:.11rem;
    color:#e51b1b;
    font-weight:bold;
}
.down{
    margin-right:.11rem;
}
.log{
    margin-left:.09rem;
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


