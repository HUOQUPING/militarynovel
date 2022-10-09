<template>
  <div class="bookcity-search">
    <div class="search-box" @click="gosearch">
      <i class="icon-search"></i>
      <span>搜索感兴趣的内容</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
   methods:{
     gosearch(){
     this.$router.push('/booksearchword');
     }
   }
};
</script>

<style lang="scss" scoped>
.bookcity-search {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 7vh;
  background-color: #fff;
  z-index: 10;
  .search-box {
    width: 90vw;
    height: 4vh;
    margin: auto;
    background: #dfdfdf;
    border-radius: 18px;
    font-size: 14px;
    text-align: center;
    line-height: 4vh;
    &.icon-search {
      width: 14px;
      height: 14px;
      // background-image: url();
    }
    span {
      color: #999;
    }
  }
}
</style>