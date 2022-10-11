<template>
  <div class="list-classify">
    <div class="list-cl-head">
      <img src="../../assets/images/back_black.png" @click="comeback" />
      <span>{{ text[0] }}</span>
    </div>
    <div class="list-cl-main">
      <div class="li-cl-ma-lf">
        <ul>
          <li
            v-for="(txt, i) in text[1]"
            :key="i"
            :class="{ activeCss: activeVar == i}"
            @click="highLight(i)"
            
          >
            {{ txt }}
          </li>
        </ul>
      </div>
      <div class="li-cl-ma-ri">
        <router-link tag="li" v-for="(w, i) in mainArr" :key="i" :to="'/bookinfo?id='+w.bookid">
          <div class="ri-img">
           <img :src="t.coverurl" :onerror="defaults"/>
          </div>
          <div class="ri-txt">
            <p>{{ w.bookname }}</p>
            <p class="ri-txt-word">{{ w.summary }}</p>
            <div class="pen-view">
              <span class="penname">{{ w.penname }}</span>
              <span class="viewcount">{{
                w.viewcount > 10000
                  ? (w.viewcount / 10000).toFixed(1) + "万热度"
                  : w.viewcount + "个热度"
              }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { typetool } from "@/utils/bookType";
export default {
  data() {
    return {
      text: [],
      mainArr: [],
      activeVar:this.$route.query.type,
      defaults:'this.src="' + require('../../assets/images/nocover.jpg')+'"'
    };
  },
  mounted() {
    this.getData(this.$route.query.type);
    this.text = typetool[this.$route.query.type];
    console.log(this.text);
  },

  methods: {
    getData(type) {
      this.$axios
        .get(`/htm/readlist_${type}_1.htm?pagesize=10&pageindex=1`)
        .then(({ data }) => {
          this.mainArr = data.bookinfos;
        });
    },

    comeback() {
      this.$router.back();
    },

    highLight(i) {
      this.activeVar = i;
      this.getData(i);
    },
  },
};
</script>
<style lang='scss' scoped>
.list-classify {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;

  .activeCss {
    background: white;
  }

  .list-cl-head {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(150, 149, 149, 0.171);
    text-align: center;
    line-height: 50px;
    align-items: center;
    background: white;

    & img {
      width: 25px;
      height: 20px;
    }
    & span {
      margin: auto;
      text-align: center;
    }
  }
  .list-cl-main {
    display: flex;

    & .li-cl-ma-lf ul {
      position: fixed;
      top: 50px;
      left: 0;
      height: 100%;
      background: rgb(241 237 237 / 64%);

    }

    & .li-cl-ma-lf ul li {
      width: 70px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    .li-cl-ma-ri{
      margin-left:70px ;
    }
    & .li-cl-ma-ri li {
      width: 100%;
      margin: 10px;
      display: flex;

      & .ri-txt {
        width: 220px;
        margin-left: 8px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        .ri-txt-word {
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        & .pen-view {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        & .penname {
          font-size: 12px;
          color: #777;
        }
        & .viewcount {
          margin-left: 8px;
          color: goldenrod;
        }
      }
    }
  }
}

</style>