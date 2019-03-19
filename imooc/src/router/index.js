import Vue from 'vue'
import Router from 'vue-router'

//导入Account组件
// import imoocHeader from '../main/imoocHeader.vue'
import index from '../main/index.vue'
import course from '../main/course.vue'
import actual from '../main/actual.vue'
import job from '../main/job.vue'
import spec from '../main/spec.vue'
import note from '../main/note.vue'
import question from '../main/question.vue'
import detail from '../main/detail.vue'


Vue.use(Router)

export default new Router({
  
  routes: [
         {path:'/',component:index},

        {path:'/index',component:index},
        {path:'/course',component:course},
        {path:'/actual',component:actual},
        {path:'/job',component:job},
        {path:'/spec',component:spec},
        {path:'/note',component:note},
        {path:'/question',component:question},
        {path:'/index/actdetail',component:detail},

      ]
    

})
