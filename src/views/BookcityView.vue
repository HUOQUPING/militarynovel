<template>
  <div class="book-city">
    <div class="header">
      <!-- 搜索框 -->
      <BookcitySearch class="bookcity-search"></BookcitySearch>
      <!-- 轮播图 -->
      <CarouselChart  class="carousel-chart" :imgArr="bookArr"></CarouselChart>
      <!-- 分类 -->
      <ClassificationNav class="classification-nav"></ClassificationNav>
    </div>

    <div class="main">
      <!-- 今日热推 -->
      <div class="hot-today">
        <h3>今日热推</h3>
        <BookModule  :bookArr="bookArr[0]"></BookModule>
      </div>
      <!-- 本周强推 -->
      <div class="push-thisWeek">
        <h3>本周强推</h3>
        <BookModule  :bookArr="bookArr[1]"></BookModule>
      </div>
      <!-- 24小时热销 -->
      <div class="hot-in24Hours">
        <h3>24小时热销</h3>
        <StripModule  :bookArr="bookArr[2]" ></StripModule>
      </div>
      <!-- 经典全本 -->
      <div class="classic-complete">
        <h3>经典全本</h3>
        <BookModule :bookArr="bookArr[3]"></BookModule>
      </div>
      <!-- 军事小说 -->
      <div class="military-novel">
        <h3>军事小说</h3>
        <StripModule  :bookArr="bookArr[5]" ></StripModule>
      </div>
      <!-- 历史小说 -->
      <div class="historical-novel">
        <h3>历史小说</h3>
        <StripModule  :bookArr="bookArr[6]" ></StripModule>
      </div>
      <!-- 潜力新书 -->
      <div class="new-potentialbook">
        <h3>潜力新书</h3>
        <StripModule :bookArr="bookArr[7]" ></StripModule>
      </div>
      <!-- 更多爽文 -->
      <div class="moreCool-articles">
        <h3>更多爽文</h3>
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
      this.$axios.get("./json/bookCity.json").then(({ data }) => {
        data.homeparts.forEach(el => {
          this.bookArr.push(el);
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.book-city {
  width: 100vw;
  padding-bottom: 50px;
  background-color: #d3d3d3;
  .header {
    width: 100%;
    height: 40vh;
    background-color: #fff;
    position: relative;
    .carousel-chart {
      position: absolute;
      top: 50px;
      width: 95vw;
      height: 20vh;
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
      padding: 16px 0px 12px 14px;
    }
    div {
      margin: 8px auto;
      width: 99%;
      background-color: #fff;
    }
  }
}
</style>
