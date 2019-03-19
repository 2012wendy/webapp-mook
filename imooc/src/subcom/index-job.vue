<template>
    <div class="actrul">
        <!-- 就业班标题 -->
        <div class="actTit">
            <h1>就业班</h1>
            <a href="" class="jobtit">快速买入互联网行业，轻松挑战</a>
        </div>
        <!-- 课程内容盒子 -->
        <div class="courseCon ">
            <a href="" v-for="val in jobData"><img :src="val" alt=""></a>
            <!-- <a href=""><img src="../img/jobImg.jpg" alt=""></a>
            <a href=""><img src="../img/jobImg.jpg" alt=""></a>
            <a href=""><img src="../img/jobImg.jpg" alt=""></a> -->
        </div>
    </div>
</template>
<script>
export default {
    props:["jobData"]
}
</script>
<style <style scoped>
    @import "../assets/css/index.css";
</style>



