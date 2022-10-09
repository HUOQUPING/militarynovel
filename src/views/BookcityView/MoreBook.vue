<template>
  <div>
    <div class="loginNav">
      <img src="../../assets/images/leftarrow.svg" alt="返回" @click="comeback" />
      <span>{{ title }}</span>
    </div>
    <div>
      <p v-for="t in bookArr" :key="t.bookid">{{t.bookname}}</p>
      <MoreBookInfo :bookArr="bookArr"></MoreBookInfo>
    </div>
  </div>
</template>

<script>
import { typetool } from "@/utils/bookType";
import MoreBookInfo from "@/components/module/MoreBookInfo.vue";

export default {
  data() {
    return {
      title: null,
      bookArr: []
    };
  },
  components: {
    MoreBookInfo
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
        .get(`/htm/readlist_${type}_1.htm?pagesize=10&pageindex=1`)
        .then(({ data }) => {
          console.log(data);
          this.bookArr = data
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.loginNav {
  width: 100%;
  height: 50px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  text-align: center;
  line-height: 50px;
  img {
    float: left;
    width: 30px;
    vertical-align: middle;
    margin-top: 10px;
  }
  span {
    vertical-align: middle;
    margin: auto;
    margin-right: 15px;
  }
}
</style>