<template>   
    <div class="actContent">
    <!-- 课程一 -->        
        <router-link to="/index/actdetail" class="actCourse" v-for="(val,i) in actData" :key="i"  >                    
            <img :src="val.img" alt="">                    
            <div class="couDes">
                <p class="couTit">{{val.couTit}}</p>
                <p class="couInfo">
                    <span>{{val.couInfo}}</span>          ·
                    <span> <img :src="val.personImg" alt="">{{val.person}}</span>
                </p>
            </div>
            <div class="price">
                <span>{{val.price}}</span>
            </div>
        </router-link>
        
        <!-- <div class="actCourse">                    
            <img src="../img/courseImg.jpg" alt="">                    
            <div class="couDes">
                <p class="couTit">全面系统 Python3入门+进阶课程 更快</p>
                <p class="couInfo">
                    <span>中级</span>          ·
                    <span> <img src="../img/person.png" alt=""> 4868</span>
                </p>
            </div>
            <div class="price">
                <span>￥266</span>
            </div>
        </div>
        <div class="actCourse">                    
            <img src="../img/courseImg.jpg" alt="">                    
            <div class="couDes">
                <p class="couTit">全面系统 Python3入门+进阶课程 更快</p>
                <p class="couInfo">
                    <span>中级</span>          ·
                    <span> <img src="../img/person.png" alt=""> 4868</span>
                </p>
            </div>
            <div class="price">
                <span>￥266</span>
            </div>
        </div>
        <div class="actCourse">                    
            <img src="../img/courseImg.jpg" alt="">                    
            <div class="couDes">
                <p class="couTit">全面系统 Python3入门+进阶课程 更快</p>
                <p class="couInfo">
                    <span>中级</span>          ·
                    <span> <img src="../img/person.png" alt=""> 4868</span>
                </p>
            </div>
            <div class="price">
                <span>￥266</span>
            </div>
        </div>
        <div class="actCourse">                    
            <img src="../img/courseImg.jpg" alt="">                    
            <div class="couDes">
                <p class="couTit">全面系统 Python3入门+进阶课程 更快</p>
                <p class="couInfo">
                    <span>中级</span>          ·
                    <span> <img src="../img/person.png" alt=""> 4868</span>
                </p>
            </div>
            <div class="price">
                <span>￥266</span>
            </div>
        </div> -->
    </div>
    
</template>
<script>

export default {
    props:["actData"],
   
}
</script>
<style scoped>
    @import "../assets/css/index.css";
</style>


