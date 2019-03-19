<template>
      <section>
        <course-left></course-left>
        <course-right></course-right>
        
      </section>
        

   
</template>
<script>
    
    import courseLeft from "../subcom/course-left.vue";
    import courseRight from "../subcom/course-right.vue";
    // import indexJob from "../subcom/index-job.vue";
    // import indexNewcourse from "../subcom/index-newcourse.vue";
export default {
     
     data(){
       return {}
       } ,  
    components:{
        "course-left":courseLeft,
        "course-right":courseRight,
        // "index-newcourse":indexNewcourse,
        // "index-job":indexJob
    }
}

</script>
<style scoped>
section{
    display:-webkit-flex;
     -webkit-flex:1;
     overflow-y:auto;
 }
/* @import "../assets/css/course.css"; */
</style>
