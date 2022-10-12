<template>
  <div class="LookFicCont">
    <div v-for="(n,i) in chapterList" :key="n.id">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad(i)"
      >
        <span class="zhangjieName">{{ n.chapterName }}</span>
        <div class="a"></div>
      </van-list>
    </div>
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
          // "./json/bookid33824.json"
        )
        .then(({ data }) => {
          for (let i = 0; i < data.volumes.length; i++) {
            for (let j = 0; j < data.volumes[i].chapterList.length; j++) {
              this.chapterList.push(data.volumes[i].chapterList[j]);
            }
          }
          console.log(this.chapterList);
        });
    },

    // getBookContent(id) {
    //   this.$axios
    //     .get(`/book/ReadContent.aspx?ver=260&from=2&chapterids=${id}`)
    //     .then(({ data }) => {
    //       let replaceRegex = /(\r\n)|(\n)/g;
    //       this.arr += data.content_list[0].content.replace(
    //         replaceRegex,
    //         "<p/>"
    //       );
    //       this.finished = true;
    //       console.log(data);
    //     });
    // },
    onLoad(i) {
      // let self = this;
      setTimeout(() => {
        if (i++) {
          this.loading = false;
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
    // .bookcontion {
    //   font-size: 16px;
    //   text-indent: 2em;
    //   line-height: 5vh;
    //   padding: 20px 5vw;
    // }
  }
}

.a {
  width: 100%;
  height: 1000px;
  background: red;
}
</style>