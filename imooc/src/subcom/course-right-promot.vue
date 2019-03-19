<template>
    <div class="base improveBox">
        <h1>进阶</h1>
        <div class="baseBox improve">
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
                <a href=""><img src="/static/img/improvImg.jpg" alt=""><span>html/css</span></a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.base{
    margin:.06rem .07rem .3rem  .09rem;
}
.base h1{
    font-size:.1rem;
    color:black;
    line-height:.26rem;
}
.baseBox{
    background:white;
    display:-webkit-flex;
    width:2.8rem;
    /* height:.83rem; */
    -webkit-align-items:center;
}
.baseBox a{
    padding: .15rem .24rem .1rem .25rem;
    -webkit-flex-shrink:0;
}
.baseBox img{
    width:.34rem;
    height:.34rem;
    border-radius:.03rem;
    margin:0 auto;
}
.baseBox span{
    font-size:.09rem;
    color:black;
    display:block;
    line-height:.24rem;
}
.improveBox{
    margin-bottom:.11rem;
}
.improve{
    -webkit-flex-wrap:wrap;
}

</style>
