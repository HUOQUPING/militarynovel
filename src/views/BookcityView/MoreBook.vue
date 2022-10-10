<template>
  <div>
    <div class="nav">
      <img src="../../assets/images/back_black.png" alt="返回" @click="comeback" />
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
          this.bookArr = data;
        });
    },
    
  }
};
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