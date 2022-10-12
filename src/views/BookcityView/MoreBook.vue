<template>
  <div>
    <div class="nav">
      <img
          src="../../assets/images/back_black.png"
          alt="返回"
          @click="comeback"
      />
      <span>{{ title }}</span>
    </div>
    <div>
      <van-list
          v-model="loading"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <MoreBookInfo :bookArr="bookArr"></MoreBookInfo>
      </van-list>

    </div>
  </div>
</template>

<script>
import {typetool} from "@/utils/bookType";
import MoreBookInfo from "@/components/module/MoreBookInfo.vue";

export default {
  data() {
    return {
      title: null,
      bookArr: [],
      loading: false,
      finished: false,
      pagesize: 10,
      pageindex: 1,

    };
  },
  components: {
    MoreBookInfo,
  },
  created() {
    this.getData(this.$route.query.type);
    this.title = typetool[this.$route.query.type];
  },
  methods: {
    comeback() {
      this.$router.replace("/");
    },
    getData(type) {
      this.$axios
          .get(`/htm/readlist_${type}_1.htm?pagesize=${this.pagesize}&pageindex=${this.pageindex}`)
          .then(({data}) => {
            console.log(data);
            this.bookArr = this.bookArr.concat(data.bookinfos)
            console.log(this.bookArr);
          });
    },
    onLoad() {

      let self = this


      setTimeout(() => {

        self.pageindex += 1
        self.getData(this.$route.query.type)

        // 加载状态结束
        this.loading = false;

        // 停止加载数据

        if (self.bookArr[(self.bookArr.length - 1) - (self.pagesize - 1)].bookid == self.bookArr[0].bookid || self.bookArr.length < self.pagesize) {
          this.finished = true;
        }

      }, 2000);

    },
  }
  ,
}
;
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #d3d3d3;
  text-align: center;
  line-height: 50px;
  background-color: #fff;
  z-index: 9;
  align-items: center;

  img {
    display: block;
    width: 28px;
    padding-left: 5px;
  }

  span {
    flex: 1;
  }
}
</style>