import Vue from 'vue'
import Router from 'vue-router'
import addStu from './views/addStu.vue'
import stuList from './views/stuList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/add_stu',
      component: addStu,
      name: 'addStudent'
    },
    {
      path: '/stu_list',
      component: stuList,
      name: 'studentList'
    },
    {
       path: '*',
       redirect: '/stu_list'
    }
  ],
  linkActiveClass: 'active'
})
