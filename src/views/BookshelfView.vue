<template>
  <div class="home" :class="{zindex:!isGo}">
    <div class="homeNav">
      <span>书架</span>
      <img src="../assets/images/svg_search.png" alt="搜索" v-show="isGo" @click="goSearch"/>
      <img src="../assets/images/svg_edit.png" alt="修改" @click="alterBook()"/>
<!--      <span class="allSel" v-show="!isGo" @click="allSel()">{{ selectBtn }}</span>-->
    </div>

    <div class="mask" :class="{active : !isGo}">
      <ul class="bookList">
        <li v-for="n in bookArr" :key="n.bookid" @click="gobookInfo(n.bookid)">
          <label>
            <img :src="n.coverurl">
            <span>{{ n.bookname }}</span>
            <p>{{ n.bookstatename }}</p>
            <input v-show="!isGo" class="zindex" type="checkbox" ref="checkbox" @click="addDelBookid(n.bookid)">
          </label>
        </li>
      </ul>
    </div>

    <nav class="del-box" v-show="!isGo">
      <div @click="delBook()">删除</div>
    </nav>

  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  data() {
    return {
      bookArr: JSON.parse(localStorage.getItem("bookArr")) ?? [],
      selectBtn: '全选',
      delArr: [],
      isGo: true
    }
  },
  watch: {
    delArr() {
      console.log('watch', this.delArr)
    }
  },
  methods: {
    goSearch() {
      this.$router.push("/booksearchword");
    },
    gobookInfo(id) {
      if (this.isGo) {
        this.$router.push(`/bookinfo?id=${id}`)
      }
    },
    alterBook() {
      console.log(this.isGo, this.$router.options.routes[1].meta.navShow)
      this.isGo = !this.isGo
    },
    addDelBookid(id) {
      this.delArr = []
      console.log(id)
      for (let i = 0; i < this.delArr.length; i++) {
        if (this.delArr[i] == id) {
          this.delArr = this.delArr.filter(item => item != id)
          return
        }
      }
      this.delArr.push(id)
    },
    allSel() {
      this.delArr = []
      for (let i = 0; i < this.bookArr.length; i++) {
        this.delArr.push(this.bookArr[i].bookid)
      }
    },
    delBook() {
      console.log(this.bookArr)
      for (let i = 0; i < this.bookArr.length; i++) {
        for (let j = 0; j < this.delArr.length; j++) {
          if (this.bookArr[i].bookid == this.delArr[j]){
            this.bookArr.splice(i,1)
          }
        }
      }
      localStorage.setItem("bookArr", JSON.stringify(this.bookArr));
      Toast('删除成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
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
    z-index: 50;

    .allSel {
      display: block;
      position: absolute;
      top: 0px;
      left: 25px;
    }

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
    flex-wrap: wrap;

    li {
      position: relative;
      flex: 0 0 33%;
      height: 220px;
      z-index: 49;

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

      input[type="checkbox"] {
        display: block;
        position: absolute;
        top: 0px;
        right: 10px;
        border-radius: 999px;
      }
    }
  }

  .mask {
    &.active {
      width: 100%;
      min-height: 100vh;
      background: #eee;
      opacity: .5;
      z-index: 10;
    }
  }

  nav {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 55px;
    line-height: 55px;
    box-shadow: 0px 2px 5px black;
    background-color: white;
    align-items: center;
    justify-content: center;

    div {
      height: 100%;
      flex: 1;
      text-align: center;
    }
  }
}


.zindex {
  z-index: 99;
}
</style>
