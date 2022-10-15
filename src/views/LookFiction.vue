<template>
  <div class="LookFicCont">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="以下章节需订阅后观看"
        @load="onLoad"
      >
        <div v-for="(n, i) in bookArr" :key="i" @click="onclick($event)">
          <span class="sectionName">{{ n.chapterName }}</span>
          <div
            v-if="contentlist.length > 0"
            v-html="contentlist[i].content.replace(/(\r\n)|(\n)/g, '<p/>')"
            class="bookcontion"
          ></div>
        </div>
      </van-list>
    </van-pull-refresh>

    <div>
      <van-popup
        v-model="ifShow"
        position="top"
        :style="{ height: '8%', background: 'black', opacity: '.75' }"
        :overlay="false"
      >
        <img
          src="../assets/images/back_white.png"
          alt="返回"
          class="back"
          @click="back"
        />
        <img
          src="../assets/images/more.png"
          alt="更多"
          class="more"
          @click="moreinfo"
        />
      </van-popup>
      <van-popup
        v-model="ifShow"
        position="bottom"
        :style="{ height: '8%', background: 'black', opacity: '.75' }"
        :overlay="false"
      >
        <div class="bottombox">
          <div @click="onRefresh">
            <img src="../assets/images/leftarrow.png" alt="上一章" />
            <span>上一章</span>
          </div>
          <div @click="gocatalogue">
            <img src="../assets/images/catalogue.png" alt="目录" />
            <span>目录</span>
          </div>
          <div @click="onRightRefresh">
            <img src="../assets/images/rightarrow.png" alt="下一章" />
            <span>下一章</span>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="morebookInfo" v-show="moreShow" @click="comeback">
      <img src="../assets/images/moreinfo.png" alt="更多详情" />
      <span>更多详情</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: "",
      chapterList: [],
      contentlist: [],
      loading: false,
      finished: false,
      refreshing: false,
      bookArr: [],
      index: -1,
      indexs: 0,
      chapterid: this.$route.query.chapterid ?? null,
      ispull: false,
      pullindex: null,
      pullindexs: null,
      ifShow: false,
      moreShow: false,
    };
  },
  created() {
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
          if (this.chapterid == null) {
            this.getBookContent(this.chapterList[0].id);
          } else {
            for (let i = 0; i < this.chapterList.length; i++) {
              if (this.chapterList[i].id == this.chapterid) {
                this.index = i - 1;
                this.indexs = i;
                this.pullindex = i;
                this.pullindexs = i;
                this.getBookContent(this.chapterList[this.pullindexs].id);
              }
            }
          }
        });
    },

    async getBookContent(id) {
      await this.$axios
        .get(`/book/ReadContent.aspx?ver=260&from=2&chapterids=${id}`)
        .then(({ data }) => {
          if (this.ispull == false) {
            this.contentlist.push(data.content_list[0]);
          } else if (this.ispull == true) {
            this.contentlist.unshift(data.content_list[0]);
          }
        });
    },
    onLoad() {
      setTimeout(() => {
        this.ispull = false;
        this.index++;
        this.indexs++;
        this.bookArr.push(this.chapterList[this.index]);
        this.getBookContent(this.chapterList[this.indexs].id);
        this.loading = false;
        if (this.bookArr[this.bookArr.length - 1].isVip != 0) {
          this.finished = true;
        }
      }, 2000);
    },
    onRefresh() {
      if (this.pullindex == 0) {
        this.finished = true;
        this.refreshing = false;
      } else {
        this.ispull = true;
        this.pullindex--;
        this.pullindexs--;
        this.bookArr.unshift(this.chapterList[this.pullindex]);
        this.getBookContent(this.chapterList[this.pullindexs].id);
        this.refreshing = false;
      }
    },
    onRightRefresh(){
      if (this.pullindex > this.chapterList.length) {
        this.finished = true;
        this.refreshing = false;
      }else {
        this.ispull = true;
        this.pullindex++;
        this.pullindexs++;
        this.bookArr.unshift(this.chapterList[this.pullindex]);
        this.getBookContent(this.chapterList[this.pullindexs].id);
        this.refreshing = false;
      }
    },
    onclick(e) {
      if (e.x >= 100 && e.x <= 260 && e.y >= 250 && e.y <= 500) {
        this.ifShow = !this.ifShow;
      }
      this.moreShow = false;
    },
    back() {
      this.$router.back()
    },
    comeback() {
      this.$router.replace(`/bookinfo?id=${this.$route.query.id}&bookinfoback=true`);
    },
    moreinfo() {
      this.moreShow = !this.moreShow;
    },
    gocatalogue() {
      this.$router.push(
        `/bookinfo/directory?id=${this.$route.query.id}&bookname=${this.$route.query.bookname}`
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.LookFicCont {
  padding-top: 10px;
  background: rgb(240, 240, 240);
  .sectionName {
    font-size: 12px;
    margin-left: 10px;
  }
  .bookcontion {
    font-size: 16px;
    text-indent: 2em;
    line-height: 5vh;
    padding: 20px 5vw;
  }

  .back {
    position: absolute;
    top: 2.3vh;
    left: 16px;
    width: 22px;
  }

  .more {
    position: absolute;
    top: 2.3vh;
    right: 16px;
    width: 22px;
  }

  .morebookInfo {
    position: absolute;
    top: 8.7vh;
    right: 6px;
    background: black;
    width: 120px;
    height: 50px;
    border-radius: 8px;
    opacity: 0.85;

    img {
      width: 40px;
      margin: 5px;
      vertical-align: middle;
      margin-right: 0px;
    }

    span {
      font-size: 15px;
      color: white;
      vertical-align: middle;
    }

    &::after {
      content: "";
      display: block;
      height: 0;
      width: 0;
      position: absolute;
      opacity: 0.85;
      top: -5px;
      right: 10px;
      border-style: solid;
      border-width: 0 8px 10px 8px;
      border-color: transparent transparent black transparent;
    }

    .triangle {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 50px 100px 50px;
      border-color: transparent transparent #00adb5 transparent;
    }
  }

  .bottombox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
      flex: 1;
      color: white;
      text-align: center;

      img {
        width: 25px;
      }

      span {
        display: block;
        font-size: 14px;
      }
    }
  }
}
</style>