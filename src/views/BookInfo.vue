<script src="../router/index.js"></script>
<template>
  <div class="book-info" v-if="flag == true && show == true">
    <div v-if="bookinfo[0].ret == 0">
      <div class="back-btn" :class="{ bgcolor: isShow }">
        <img src="../assets/images/back_white.png" alt="返回" @click="back()" />
        <p v-show="isShow">{{ bookinfo[0].bookname }}</p>
        <img src="../assets/images/share.png" alt="返回" @click="back()" />
      </div>
      <!-- 毛玻璃以及书本简介 -->
      <div class="ground-glass">
        <img class="frosterGlass" :src="bookinfo[0].coverurl" />
        <div class="img-box">
          <img :src="bookinfo[0].coverurl" />
        </div>
        <div class="book-name">
          <h3>{{ bookinfo[0].bookname }}</h3>
          <p>作者:{{ bookinfo[0].penname }}</p>
          <span>状态:{{ bookinfo[0].bookstatename }}</span>
        </div>
      </div>
      <!-- 简介 -->
      <div class="details">
        <p class="summary" :class="showAll ? 'active' : ''">
          {{ bookinfo[0].summary }}
        </p>
        <p class="split-line" @click="showAll = !showAll" v-show="!showAll">
          <span class="arrow">v</span>
        </p>
      </div>
      <!-- 目录及最新章节 -->
      <div class="catalogues">
        <div class="catalogues-box" @click="directory(bookinfo[0].bookid,bookinfo[0].bookname)">
          <p class="catalogue-p">
            目录
            <span>&gt;</span>
          </p>
        </div>
        <div class="latestChapter">
          <h3>最新章节</h3>
          <ul>
            <li v-for="t in bookinfo[0].chapters" :key="t.chapterid">
              {{ t.chaptername }}
            </li>
          </ul>
        </div>
      </div>
      <!-- 相关推荐 -->
      <div class="related-recommendations">
        <h3>相关推荐</h3>
        <RecommendedModule
          class="recommended-module"
          :recommendList="bookinfo[0].recommend_list"
        ></RecommendedModule>
      </div>
      <!-- 评论 -->
      <div class="comment-box">
        <h3>评论</h3>
        <CommentModule
          class="comment"
          :commentList="bookinfo[0].comment_list"
        ></CommentModule>
      </div>

      <!-- 按钮 -->
      <div class="btn-box">
        <div
          @click="
            addToBookshelf(
              bookinfo[0].bookid,
              bookinfo[0].coverurl,
              bookinfo[0].bookname,
              bookinfo[0].bookstatename
            )
          "
        >
          加入书架
        </div>
        <div class="readding" @click="goLookFiction(bookinfo[0].bookid)">开始阅读</div>
        <div>购买章节</div>
      </div>
    </div>
    <div class="copyright-issues" v-if="bookinfo[0].ret == 1">
      <div class="back-btn" :class="{ bgcolor: isShow }">
        <img src="../assets/images/back_black.png" alt="返回" @click="back()" />
      </div>
      <div class="text-box">{{ bookinfo[0].msg }}</div>
    </div>
  </div>
</template>

<script>
import RecommendedModule from "@/components/module/RecommendedModule.vue";
import CommentModule from "@/components/module/CommentModule.vue";
import { Toast } from 'vant';
export default {
  data() {
    return {
      bookinfo: [],
      showAll: false,
      isShow: false,
      obj: [],
      flag: false,
      show:false
    };
  },
  components: {
    RecommendedModule,
    CommentModule,
  },
   beforeCreate() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    let second = 1;
    const timer = setInterval(() => {
      second -= 0.5;
      if (second == 0) {
        this.show = true;
        clearInterval(timer);
        // 手动清除 Toast
        Toast.clear();
      } 
    }, 500);
  },
  created() {
    this.getInfo(this.$route.query.id);
  },
  methods: {
    getInfo(id) {
      this.$axios
        .get(`/book/ReadBookDetail.aspx?ver=200&from=1&bookid=${id}`)
        .then(({ data }) => {
          console.log(data);
          this.bookinfo.push(data);
          this.flag = true;
        })
    },
    // 返回
    back() {
      window.history.go(-1);
    },
    // 存入本地存储
    addToBookshelf(bookid, coverurl, bookname, bookstatename) {
      // this.obj = [];
      // 比对本地存储是否已经拥有此书
      let bookArr = JSON.parse(localStorage.getItem("bookArr"));

      if (bookArr) {
        for(let i = 0; i < bookArr.length; i++){
          if(bookArr[i].bookid == bookid){
            Toast('图书已加入书架')
            return
          }
        }
        bookArr.push({
           bookid: bookid,
          coverurl: coverurl,
          bookname: bookname,
          bookstatename: bookstatename,
        })
        localStorage.setItem("bookArr", JSON.stringify(bookArr));
        Toast("已加入书架")
      } else {
        this.obj.push({
          bookid: bookid,
          coverurl: coverurl,
          bookname: bookname,
          bookstatename: bookstatename,
        });
        localStorage.setItem("bookArr", JSON.stringify(this.obj));
         Toast("已加入书架")
      }
    },
    directory(id,bookname){
      this.$router.push(`/bookinfo/directory?id=${id}&bookname=${bookname}`)
    },
    isScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 100) {
        // 滚动条滚动距离超过100时
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    goLookFiction(id){
      this.$router.push(`/lookfiction?id=${id}`)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.isScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.isScroll);
  },
};
</script>

<style lang="scss" scoped>
.book-info {
  position: relative;
  width: 100vw;
  background-color: #f3f0f0;
  //   background-color: red;
  h3 {
    padding: 1.5vh 4vw;
  }
  .back-btn {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 5vh;
    z-index: 5;
    justify-content: space-between;
    align-items: center;
    img {
      width: 10vw;
      height: 100%;
    }
    p {
      font-size: 18px;
    }
  }
  .bgcolor {
    color: #fff;
    background-color: #f29a2f;
  }
  // 毛玻璃
  .ground-glass {
    position: relative;
    width: 100vw;
    height: 40vh;
    .frosterGlass {
      position: absolute;
      top: -25px;
      width: 100vw;
      height: 40vh;
      filter: blur(14px);
      -webkit-z-index: 0;
      -moz-z-index: 0;
      -ms-z-index: 0;
      -o-z-index: 0;
      z-index: 0;
    }
    .img-box {
      position: relative;
      z-index: 1;
      margin: 0 auto;
      margin-top: 30px;
      width: 30vw;
      height: 20vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .book-name {
      position: relative;
      z-index: 1;
      color: #fff;
      text-align: center;
      margin-top: 18px;
      font-size: 14px;
      h3 {
        font-size: 28px;
        margin-bottom: 20px;
      }
      p {
        margin: 8px 0;
      }
    }
  }
  //   简介
  .details {
    margin: 12px 0;
    padding: 2vh 4vw;
    background-color: #fff;
    .summary {
      line-height: 30px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .split-line {
      position: relative;
      display: block;
      margin-top: 24px;
      border-bottom: 1px solid #999;
      .arrow {
        position: absolute;
        top: -8px;
        left: calc(52% - 26px);
        width: 26px;
        height: 12px;
        padding: 0 8px;
        text-align: center;
        color: #999;
        background-color: #fff;
      }
    }
    .active {
      display: block;
    }
  }
  //   目录及最新章节
  .catalogues {
    .catalogues-box {
      padding: 1.5vh 4vw;
      background-color: #fff;
      display: flex;
      .catalogue-p {
        flex: 1;
        span {
          float: right;
        }
      }
    }
    .latestChapter {
      h3 {
        font-size: 18px;
      }
      ul {
        background-color: #fff;
        padding: 0 4vw;
        li {
          padding: 8px 0;
        }
      }
    }
  }
  // 相关推荐
  .related-recommendations {
    h3 {
      padding: 1.5vh 4vw;
    }
  }
  // 评论
  .comment-box {
    .comment {
      background-color: #fff;
      padding: 1.5vh 4vw;
    }
  }
  // 按钮
  .btn-box {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 6.5vh;
    // border: 1px solid red;
    display: flex;
    div {
      flex: 1;
      // border: 1px solid blue;
      text-align: center;
      line-height: 6.5vh;
      color: #ed7e38;
      background-color: #fff;
      &.readding {
        color: #fff;
        background-color: #ed7e38;
      }
    }
  }
  .copyright-issues {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    .text-box {
      font-size: 24px;
      line-height: 42px;
      padding: 2vh 4vw;
    }
  }
}
</style>