<template>
  <div class="home">
    <div class="homeNav">
      <span>书架</span>
      <img src="../assets/images/svg_search.png" alt="搜索" @click="gosearch" />
      <img src="../assets/images/svg_edit.png" alt="修改" />
    </div>

    <ul class="bookList">
        <li v-for="n in bookArr" :key="n.bookid">
          <img :src="n.coverurl">
          <span>{{n.bookname}}</span>
          <p>{{n.bookstatename}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
        bookArr:JSON.parse(localStorage.getItem("bookArr")) ?? []
    } 
  },
  methods:{
     gosearch(){
     this.$router.replace("/booksearchword");
     }
     
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  padding-bottom: 50px;
  .homeNav {
    position: sticky;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    text-align: center;
    line-height: 50px;
    background-color: white;
    img {
      width: 30px;
      position: absolute;
      right: 60px;
      top: calc(50% - 15px);

      &:nth-child(3){
        right: 10px;
      }
    }

  }

  .bookList {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex: row;
    flex-wrap: wrap;

    li{
      flex: 0 1 33.33%;
      height: 220px;

      img {
        width: 100px;
        height: 160px;
        margin: 0 10px;
        border-radius: 4px;
      }

      span {
        display: inline-block;
        margin: 5px 0 5px 10px;
        width: 100px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      p {
        font-size: 14px;
        color: #ccc;
        margin-left: 10px;
      }
    }
  }
}
</style>
