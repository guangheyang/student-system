<template>
  <ul id="turn-page" style="user-select: none;">
    <li class="prev-page" :class="{'not-allow': nowPage == 1}" @click="turnPage(-1)">&lt;</li>
    <template v-if="totalPage <=7 ">
      <li class="num" 
        v-for="i in totalPage" 
        :key="i" 
        :class="{'cur-page': i == nowPage}"
        @click="turnPage(i)">{{i}}</li>
    </template>
    <template v-else>
      <template v-if="nowPage <=4">
       <li v-for="i in 6" :key="i" @click="turnPage(i)" :class="{'cur-page': i == nowPage}">{{ i }}</li>
      </template>
      <template v-if="nowPage > 4">
        <li @click=turnPage(1)>1</li>
        <span>...</span>
      </template>
      <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
       <li v-for="i in 5" :key="nowPage - 3 + i" :class="{'cur-page': i == 3}" @click="turnPage(nowPage - 3 + i)">{{ nowPage - 3 + i}}</li>
      </template>
      <template v-if="nowPage <= totalPage - 4">
       <span>...</span>
       <li @click="turnPage(totalPage)">{{ totalPage }}</li>
      </template>
       <template v-if="nowPage > totalPage - 4">
        <li v-for="i in 6" :key="i" @click="turnPage(totalPage-6 + i)" :class="{'cur-page': totalPage-6 + i == nowPage}">{{ totalPage-6 + i }}</li>
      </template>
    </template>
    <li class="net-page" @click="turnPage(0)" :class="{'not-allow': nowPage == totalPage}">&gt;</li>
  </ul>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getStuList']),
    turnPage(page) {
      this.getStuList(page)
    }
  },
  computed: {
    ...mapState({
      totalPage: state => Math.ceil(state.count / 10),
      nowPage: state => state.nowPage
    })
  }
};
</script>
<style>
.not-allow {
  cursor: not-allowed !important;
}
</style>
