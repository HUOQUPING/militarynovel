<template>
  <div class="home">
       <!-- <div class="zhaocheng"></div> -->
      <div class="homeNav">
        <span>书架</span>
        <img
          src="../assets/images/svg_search.png"
          alt="搜索"
          @click="goSearch"
        />
        <img src="../assets/images/svg_edit.png" alt="修改" @click="delbook" style="position: absolute;z-index:999"/>
      </div>

      <ul class="bookList">
        <li v-for="n in bookArr" :key="n.bookid" @click="gobookInfo(n.bookid)">
          <img :src="n.coverurl" />
          <span>{{ n.bookname }}</span>
          <p>{{ n.bookstatename }}</p>
          <van-checkbox
            v-model="checked"
            icon-size="16px"
            checked-color="rgb(237, 126, 56)"
            class="checkbook"
          ></van-checkbox>
        </li>
      </ul>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookArr: JSON.parse(localStorage.getItem("bookArr")) ?? [],
      checked: true,
      ifshow:false,
      ifgo:true
    };
  },
  mounted(){
        console.log(this.$router);
  },
  methods: {
    goSearch() {
      this.$router.push("/booksearchword");
    },
    gobookInfo(id) {
      if (this.ifgo == true) {
        this.$router.push(`/bookinfo?id=${id}`);
      }
      
    },
    delbook(){
      this.ifgo = !this.ifgo
      console.log(this.ifgo);
      this.$router.options.routes[1].meta.navShow = !this.$router.options.routes[1].meta.navShow
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  padding-bottom: 50px;
  // position: relative;
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
    // background-color: white;
    img {
      width: 30px;
      position: absolute;
      right: 60px;
      top: calc(50% - 15px);

      &:nth-child(3) {
        right: 10px;
      }
    }
  }

  .bookList {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      flex: 0;
      height: 220px;
      position: relative;

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

      .checkbook {
        position: absolute;
        top: 4px;
        right: 13px;
      }
    }
  }

  .zhaocheng {
    width: 100%;
    height: 100vh;
    background: red;
    // background: #000;
    position: absolute;
    opacity: .2;
    z-index: 20;
  }
}
</style>
