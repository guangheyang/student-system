<template>
     <div class="search">
      <label for="search-word">姓名搜索:</label>
      <input type="text" id="search-word" v-model="keyWord">
      <button id="search-submit" @click="search">搜索</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    search() {
      this.$store.commit('setKeyWord', this.keyWord)
      this.$store.dispatch('getStuList', 1)
    }
  }
}
</script>