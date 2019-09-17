<template>
  <div class="student-list content" id="student-list">
   <search-student></search-student>
   <student-table></student-table>
   <turn-page></turn-page>
   <transition name="modal">
       <modal v-if="showModal"> </modal> 
   </transition>   
  </div>
</template>

<script>
import searchStudent from '../components/stuList/searchStudent.vue'
import studentTable from '../components/stuList/studentTable.vue'
import turnPage from '../components/stuList/turnPage.vue'
import modal from '../components/stuList/modal.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        searchStudent,
        studentTable,
        turnPage,
        modal
    },
    created() {
       this.getStuList(1);
    },
    methods: {
        ...mapActions(['getStuList'])
    },
    computed: {
          ...mapState(['showModal'])
    }
}
</script>

<style >
    /* v-enter, v-leave, v-enter-to, v-leave-to  */
    /* v-enter-active, v-leave-active */
    .modal-enter, .modal-leave-to {
       height: 0;
       top: -100%;
    }
    .modal-leave, .modal-enter-to {
       height: 100%;
       top: 0;
    }
    .modal-enter-active, .modal-leave-active {
        transition: all .7s;
    }
</style>
