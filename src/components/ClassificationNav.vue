<template>
  <div class="classification-nav">
      <div class="book-over" @click="moreBook(22)">
        <span>完本</span>
      </div>
    <div class="book-free"  @click="moreBook(21)">
      <span>免费</span>
    </div>
    <div class="book-rank" @click="goList(30)">
      <span>排行</span>
    </div>
    <div class="book-sort" @click="goClass(40)">
      <span>分类</span>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  comments: {
  },
  methods: {
    moreBook(num){
      this.$router.push(`/more?type=${num}`)
    },
    goList(num){
      this.$router.push(`/listClassify?type=${num}`)
    },
    goClass(num){
      this.$router.push(`/listClassify?type=${num}`)
    }
  }
};
</script>

<style lang="scss" scoped>
.classification-nav {
  display: flex;
  div {
    flex: 0 0 25vw;
    height: 12vh;
    background-position: center 10px;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 16vh;
    font-size: 14px;
  }
  .book-over {
    background-image: url(../assets/images/book_over.png);
  }
  .book-free {
    background-image: url(../assets/images/book_free.png);
  }
  .book-rank {
    background-image: url(../assets/images/book_rank.png);
  }
  .book-sort {
    background-image: url(../assets/images/book_sort.png);
  }
}
</style>