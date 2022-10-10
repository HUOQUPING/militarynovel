<template>
  <div class="bookcity-search">
    <div class="search-header">
      <img src="../../assets/images/back_black.png" alt="" @click="comeback" />
      <span>
        <img src="../../assets/images/svg_search.png" alt="搜索" />
        <input type="text" placeholder="搜索感兴趣的内容" v-model="text" />
      </span>
      <span @click="seachWord(text)">搜索</span>
    </div>
    <div class="searchbox" v-if="ifShow == true">
      <div class="Version-center">
        <div>
          <p class="search-middle">热门搜索</p>
          <div class="search-words">
            <ul class="search-words-ul">
              <li
                class="search-words-li"
                :style="{ color: randomColor() }"
                v-for="(w, t) in wordsArr.words"
                :key="t"
                @click="seachWord(w)"
              >
                {{ w }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="historyItem" v-if="histroywords.length > 0">
        <p>
          搜索历史<img
            src="../../assets/images/svg_delete.png"
            alt="删除"
            @click="delhistory"
          />
        </p>
        <ul>
          <li v-for="n in histroywords" :key="n" @click="seachWord(n)">{{ n }}</li>
        </ul>
      </div>
    </div>
    <div class="searchBook" v-if="ifShow == false">
      <MoorBook :bookArr="searchBookArr"></MoorBook>
    </div>
  </div>
</template>

<script>
import MoorBook from "@/components/module/MoreBookInfo.vue"
export default {
  data() {
    return {
      text: "",
      wordsArr: [],
      histroywords: JSON.parse(localStorage.getItem("historyWord")) ?? [],
      ifShow: true,
      searchBookArr:[]
    };
  },
  components: {
    MoorBook
  },
  mounted() {
    this.getData();
  },
  methods: {
    comeback() {
      this.$router.back();
      
    },
    getData() {
      this.$axios.get("/book/HotWords.aspx?ver=260&from=1").then(({ data }) => {
        this.wordsArr = data;
      });
    },
    randomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    },
    seachWord(word) {
      this.text = word;
      this.ifShow = false
      this.getContent(word);
      for (let i = 0; i < this.histroywords.length; i++) {
        if (this.histroywords[i] == word) {
          return;
        }
      }
      this.histroywords.push(word);
      localStorage.setItem("historyWord", JSON.stringify(this.histroywords));

    },
    delhistory() {
      localStorage.removeItem("historyWord");
      this.histroywords = [];
    },
    getContent(word) {
      this.$axios
        .get(
          `/book/ReadSearch.aspx?ver=260&pagesize=10&pageindex=1&from=1&keyword=${word}`
        )
        .then(({ data }) => {
          this.searchBookArr = data
          console.log(data.bookinfos);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.bookcity-search {
  width: 100vw;
  min-height: 100vh;
  background: rgb(241, 237, 237);
  .search-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    z-index: 9;

    & img {
      width: 25px;
      height: 20px;
    }

    span {
      position: relative;
      & input {
        width: 220px;
        height: 20px;
        border-radius: 30px;
        text-indent: 25px;
        outline: 0;
        border: 0;
        background: rgb(229, 226, 226);
        padding: 3px;
      }

      & img {
        position: absolute;
        top: 4px;
        left: 5px;
        width: 18px;
        height: 18px;
      }
    }
  }

  .Version-center {
    width: 100%;
    height: 250px;
    background: white;

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
        margin-right: 20px;
        margin-top: 10px;
        background: rgb(238, 235, 235);
        padding: 5px;
      }
    }
  }
  .historyItem {
    width: 100%;
    min-height: 150px;
    margin-top: 10px;
    background: white;
    p {
      font-size: 14px;
      color: #999;
      margin-left: 10px;
      padding-top: 15px;
      img {
        width: 16px;
        vertical-align: middle;
        float: right;
        margin-right: 10px;
      }
    }

    ul {
      margin-top: 10px;

      li {
        display: inline-block;
        width: max-content;
        padding: 6px 10px;
        font-size: 14px;
        margin: 10px 10px 0 10px;
        background: rgb(238, 235, 235);
        border-radius: 999px;
      }
    }
  }

  .searchBook {
    width: 100%;
  }
}
</style>