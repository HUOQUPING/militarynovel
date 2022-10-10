<template>
  <div class="classification-nav">
      <div class="book-over">
        <span @click="moreBook(22)">完本</span>
      </div>
    <div class="book-free">
      <span @click="moreBook(21)">免费</span>
    </div>
    <div class="book-rank">
      <span>排行</span>
    </div>
    <div class="book-sort">
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