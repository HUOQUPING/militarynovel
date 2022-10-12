<template>
  <div class="directory">
    <!--nav-->
    <div class="nav">
      <img src="../assets/images/back_black.png" alt="返回" @click="back()"/>
      <p>{{ this.$route.query.bookname }}</p>
    </div>

    <!--内容渲染-->
    <div class="directory_info">
      <ul v-for="item in bookData.volumes" :key="item.id">
        <h3>
          {{ item.volumeName }}
        </h3>
        <li v-for="item in item.chapterList" :key="item.id">
          {{ item.chapterName }}
          <span v-show="item.isVip == 0">免费</span>
          <span v-show="item.isVip == 1">{{ item.price }}铁血币</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectoryInfo",
  data() {
    return {
      bookData: [],
    }
  },
  created() {
    this.getData(this.$route.query.id)
  },
  methods: {
    getData(id) {
      this.$axios.get(`/book/ReadCatalog.aspx?ver=260&from=1&bookid=${id}`).then(({data}) => {
        // this.$axios.get(`/json/bookid32257.json`).then(({data}) => {
        console.log(id, data.ret, data.volumes.length)
        console.log(data)
        this.bookData = data
      })
    },
    back() {
      this.$router.back()
    },
  }
}
</script>

<style lang="scss" scoped>
.directory {
  width: 100vw;

  // nav
  .nav {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    background: #fff;

    img {
      flex: 0 0 40px;
      height: 40px;
      display: block;
    }

    p {
      flex: 1;
      display: block;
      text-align: center;
    }
  }

  // 内容渲染
  .directory_info {

    h3 {
      width: 100%;
      height: 50px;
      padding: 0 6px;
      font-size: 24px;
      background: #ddd;
      line-height: 50px;
    }

    li {
      display: flex;
      width: 100vw;
      height: 40px;
      padding: 0 6px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>