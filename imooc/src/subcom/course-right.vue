<template>   
     <div class="asideR">
            <course-right-base></course-right-base>
            <course-right-promot></course-right-promot>
            <course-right-list></course-right-list>
        </div>
    
</template>
<script>
import courseRightBase from "./course-right-base.vue"
import courseRightPromot from "./course-right-promot.vue"
import courseRightList from "./course-right-list.vue"
export default {
    props:["actData"],
    components:{
        "course-right-base":courseRightBase,
        "course-right-promot":courseRightPromot,
        "course-right-list":courseRightList,
    }
    
}
</script>
<style scoped>
    
section{

display:flex;
-webkit-flex:1;

}
.asideR{
    overflow-y:auto;
    -webkit-flex:1;

 
}
</style>