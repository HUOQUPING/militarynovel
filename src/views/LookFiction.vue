<template>
  <div class="LookFicCont">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="(n,i) in bookArr" :key="i">
        <span class="zhangjieName">{{ n.chapterName }}</span>
          <div v-html="arr" class="bookcontion"></div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: "",
      chapterList: [],
      loading: false,
      finished: false,
      bookArr:[],
      index:-1,
    };
  },
  mounted() {
    this.getBookid();
  },
  methods: {
    getBookid() {
      this.$axios
        .get(
          `/book/ReadCatalog.aspx?ver=260&from=1&bookid=${this.$route.query.id}`
        )
        .then(({ data }) => {
          for (let i = 0; i < data.volumes.length; i++) {
            for (let j = 0; j < data.volumes[i].chapterList.length; j++) {
              this.chapterList.push(data.volumes[i].chapterList[j]);
            }
          }
        });
    },

    getBookContent(id) {
      this.$axios
        .get(`/book/ReadContent.aspx?ver=260&from=2&chapterids=${id}`)
        .then(({ data }) => {
          let replaceRegex = /(\r\n)|(\n)/g;
          this.arr = data.content_list[0].content.replace(
            replaceRegex,
            "<p/>"
          );
        });
    },
    onLoad() {
      setTimeout(() => {
        this.index++
        this.bookArr.push(this.chapterList[this.index])
        this.getBookContent(this.bookArr[this.index].id)
        this.loading = false
        if (this.bookArr.length == this.chapterList.length) {
          this.finished = true
        }
      }, 2000);
    },
  },
};
</script>
<style lang="scss" scoped>
.LookFicCont {
  padding-top: 10px;
  background: rgb(240, 240, 240);
  .zhangjieName {
    font-size: 12px;
    margin-left: 10px;
    
  }
  .bookcontion {
      font-size: 16px;
      text-indent: 2em;
      line-height: 5vh;
      padding: 20px 5vw;
    }
}

.a {
  width: 100%;
  height: 1000px;
  background: red;
}
</style>