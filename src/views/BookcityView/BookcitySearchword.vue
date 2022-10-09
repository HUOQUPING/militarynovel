<template>
  <div class="bookcity-search">
    <div class="Version-center">
      <div class="search-header">
        <img src="../../assets/images/back_black.png" alt=""  @click="comeback" />
        <input type="text" placeholder="搜索感兴趣的内容" />
        <span>搜索</span>
      </div>
      <p class="search-middle">热门搜索</p>
      <div class="search-words">
        <ul class="search-words-ul">
          <li
            class="search-words-li"
            :style="{ color: randomColor() }"
            v-for="(w, t) in wordsArr.words"
            :key="t"
          >
            {{ w }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      wordsArr: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    comeback() {
      // this.$router.go(-1);
    },
    getData() {
      this.$axios.get("/book/HotWords.aspx?ver=260&from=1").then(({ data }) => {
        console.log(data);
        this.wordsArr = data;
      });
    },
    randomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    },
  },
};
</script>
<style lang="scss" scoped>
.bookcity-search {
  width: 100vw;
  height: 100vh;
  background: rgb(241, 237, 237);

  .Version-center {
    width: 100%;
    height: 300px;
    background: white;

    .search-header {
      margin-top: 10px;
      width: 100vw;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      & img {
        width: 25px;
        height: 20px;
      }

      & input {
        width: 220px;
        height: 20px;
        border-radius: 30px;
        text-indent: 20px;
      }
    }
    .search-middle {
      padding: 15px 0 0 15px;
      font-size: 14px;
      color: #999;
    }
    .search-words {
      width: 100%;
      height: 100%;
      padding: 15px;
      & li {
        float: left;
        border-radius: 999px;
        // border:2px solid brown;
        margin-right: 20px;
        margin-top: 10px;
        background: rgb(238, 235, 235);
        padding: 5px;
      }
    }
  }
}
</style>