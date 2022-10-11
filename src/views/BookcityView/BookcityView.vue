<template>
  <div class="book-city">
    <div class="header">
      <!-- 搜索框 -->
      <BookcitySearch class="bookcity-search"></BookcitySearch>
      <!-- 轮播图 -->
      <CarouselChart  class="carousel-chart" :imgArr="bookArr[9]" v-if="flag == true"></CarouselChart>
      <!-- 分类 -->
      <ClassificationNav class="classification-nav"></ClassificationNav>
    </div>

    <div class="main">
      <!-- 今日热推 -->
      <div class="hot-today">
        <h3>今日热推</h3>
        <bookModule  :bookArr="bookArr[0]"></bookModule>
      </div>
      <!-- 本周强推 -->
      <div class="push-thisWeek">
        <h3>本周强推<span @click="moreBook(2)">查看更多</span></h3>
        <bookModule  :bookArr="bookArr[1]"></bookModule>
      </div>
      <!-- 24小时热销 -->
      <div class="hot-in24Hours">
        <h3>24小时热销</h3>
        <StripModule  :bookArr="bookArr[2]" ></StripModule>
      </div>
      <!-- 经典全本 -->
      <div class="classic-complete">
        <h3>经典全本<span @click="moreBook(4)">查看更多</span></h3>
        <bookModule :bookArr="bookArr[3]"></bookModule>
      </div>
      <!-- 军事小说 -->
      <div class="military-novel">
        <h3>军事小说<span @click="moreBook(6)">查看更多</span></h3>
        <StripModule  :bookArr="bookArr[5]" ></StripModule>
      </div>
      <!-- 历史小说 -->
      <div class="historical-novel">
        <h3>历史小说<span @click="moreBook(7)">查看更多</span></h3>
        <StripModule  :bookArr="bookArr[6]" ></StripModule>
      </div>
      <!-- 潜力新书 -->
      <div class="new-potentialbook">
        <h3>潜力新书<span @click="moreBook(8)">查看更多</span></h3>
        <StripModule :bookArr="bookArr[7]" ></StripModule>
      </div>
      <!-- 更多爽文 -->
      <div class="moreCool-articles">
        <h3>更多爽文<span @click="moreBook(9)">查看更多</span></h3>
        <StripModule  :bookArr="bookArr[8]" ></StripModule>
      </div>
    </div>
  </div>
</template>

<script>
import BookcitySearch from "@/components/BookcitySearch.vue";
import CarouselChart from "@/components/CarouselChart.vue";
import ClassificationNav from "@/components/ClassificationNav.vue";

import bookModule from "@/components/module/BookModule.vue";
import StripModule from "@/components/module/StripModule.vue";

export default {
  name: "HomeView",
  data() {
    return {
      bookArr: [],
      flag:false
    };
  },
  components: {
    BookcitySearch,
    CarouselChart,
    ClassificationNav,
    bookModule,
    StripModule
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get('/htm/defaultnew.htm?ver=260&from=1').then(({ data }) => {
        data.homeparts.forEach(el => {
          console.log(el.book_infos);
          this.bookArr.push(el.book_infos);
        });
        this.flag = true
      });
    },
    moreBook(num){
      this.$router.push(`/more?type=${num}`)
    }
  },

};
</script>

<style lang="scss" scoped>
.book-city {
  width: 100vw;
  padding-bottom: 50px;
  background-color: rgb(241,237,237);
  .header {
    width: 100%;
    height: 40vh;
    background-color: #fff;
    position: relative;
    .carousel-chart {
      position: absolute;
      top: 50px;
      width: 94vw;
      height: 20vh;
      margin: 0 3vw;
      border-radius: 8px;
    }
    .classification-nav {
      position: absolute;
      bottom: 0;
    }
  }

  .main {
    width: 100%;
    margin-top: 5px;
    h3 {
      font-size: 19px;
      font-weight: 700;
      padding: 16px 0px 12px 10px;

      span{
        font-size: 14px;
        float: right;
        margin-right: 10px;
        color: rgb(237, 126, 56);
      }
    }
    div {
      margin: 8px auto;
      width: 99%;
      background-color: #fff;
    }
  }
}
</style>
