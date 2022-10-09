<template>
  <div class="carousel" >
    <transition-group class="container" tag="ul" ref="ul" >
      <li
        v-for="(t,i) in imgArr[9].book_infos.concat(imgArr[9].book_infos[0])"
        :key="i"
      >
        <img :src="t.coverurl" />
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      timer:null
    };
  },
  props: ["imgArr"],

  methods: {
    autoPlay() {
     this.timer = setInterval(() => {
        let self =this
        this.index++;
        this.$refs.ul.$el.style.left = `${-this.index * 100}%`;
        this.$refs.ul.$el.style.transition = "left .5s linear";
        if (
          this.index ==
          this.imgArr[9].book_infos.concat(this.imgArr[9].book_infos[0]).length - 1
        ) {
          this.index = 0
          this.$refs.ul.$el.ontransitionend = function () {
            self.$refs.ul.$el.style.transition = "none";
            self.$refs.ul.$el.style.left = "0";
            self.$refs.ul.$el.ontransitionend = null
          };
         
        }
      }, 1000);
    },
  },
  mounted() {
    this.autoPlay();
  },
  beforeDestroy(){
    if(this.timer){
      clearInterval(this.timer)
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 400px;
  height: 200px;
  overflow: hidden;
}

.carousel ul {
  position: absolute;
  top: 0;
  left: 0%;
  width: 1000%;
}

.carousel ul li {
  float: left;
  width: 10%;
  height: 26vh;
}

.carousel ul li img {
  display: block;
  width: 100%;
  height: 26vh;
}

.buffer {
  transition: left 0.3s;
}
</style>