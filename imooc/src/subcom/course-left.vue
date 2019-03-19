<template>   
    <div class="asideL">
        <a href="#">前端开发</a>
        <a href="#">后端开发</a>
        <a href="#">移动开发</a>
        <a href="#">算法&数学</a>
        <a href="#">前沿技术</a>
        <a href="#">云计算</a>
        <a href="#">前端开发</a>
        <a href="#">后端开发</a>
        <a href="#">移动开发</a>
        <a href="#">算法&数学</a>
        <a href="#">云计算</a>
        <a href="#">前端开发</a>
        <a href="#">后端开发</a>
        <a href="#">移动开发</a>
        <a href="#">算法&数学</a>        
    </div>
    
</template>
<script>
export default {
    props:["actData"],
    
}
</script>
<style scoped>
    
section{

display:-webkit-flex;
-webkit-flex:1;

}
.asideL{

height:100%;
overflow-y:auto;
width:.75rem;
background:#d9dde0;
display:-webkit-flex;
flex-direction:column;

}
.asideL a{
    -webkit-flex-shrink:0;
    font-size:.1rem;
    height:.57rem;
    color:black;
    border-top:1px solid #edeef2;
    border-bottom:1px solid #edeef2;
    margin-bottom:2px;
    background:white;
    line-height:.57rem;
    text-align:center;
}
.asideL a:first-child{
    border-top:0;
}
.asideL a:hover{
    color:#d53f40;
}
</style>