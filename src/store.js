import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     stuList: [],
     editStudent: null,
     showModal: false,
     count: 0,
     nowPage: 1,
     keyWrod: ""
  },
  mutations: {
     setShowModal(state, bool) {
       state.showModal = bool
     },
     setCount(state, count) {
       state.count = count
     },
     setStuList(state, list) {
        state.stuList = list
     },
     setNowPage(state, page) {
      if (page == -1) {
         if(state.nowPage > 1) {
           state.nowPage --
         }
       } else if (page == 0) {
         if(state.nowPage < Math.ceil(state.count/10)) {
             state.nowPage++;
         }
       
       } else {
         state.nowPage = page;
       }
     },
     setEditStudent(state, stu = {}) {
        state.editStudent = stu
     },
     setKeyWord(state, k) {
        state.keyWrod = k
     }
  },
  actions: {
     getStuList({commit, state}, page ) {
       if(page) {
          commit('setNowPage', page)
       }
       if(state.keyWrod) {
         api.stuSearch(state.keyWrod, state.nowPage).then(data => {
            commit('setStuList', data.data.data.searchList)
            commit('setCount', data.data.data.cont)
         })
       } else {
         api.findByPage(state.nowPage)
         .then(data => {
           commit('setStuList', data.data.data.findByPage)
           commit('setCount', data.data.data.cont)
         })
         .catch(err => console.log(err))
       }
     },
     updateStu({commit, state}, options) {
       return api.updateStu(options)
           .then(msg => {
              if(msg.data.status == 'fail' ) {
                   return Promise.reject(msg.data.msg)
              } else {
                  commit('setShowModal', false)
                  Object.assign(state.editStudent, options)
                  return msg.data.msg
              }
              
              
           })
   
     },
     delBySno({dispatch,commit, state}, sNo) {
        return api.delBySno(sNo).then(data => {
           if(state.nowPage > Math.ceil((state.count-1)/10)) {
            dispatch('getStuList', state.nowPage - 1)
           } else {
            dispatch('getStuList')
           }
           return data
        })
     }
  }
})
