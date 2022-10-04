<template>
  <div>
    <div class="book-city">
      <div class="search-box">
        <div class="search">
          <i class="icon-search"></i>
          <span>会战</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.search-box {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 7vh;
  .search {
    width: 90vw;
    height: 4vh;
    margin: auto;
    background: #dfdfdf;
    border-radius: 18px;
    font-size: 14px;
    text-align: center;
    line-height: 4vh;
    &.icon-search {
      width: 14px;
      height: 14px;
      background-image: url();
    }
    span {
      color: #999;
    }
  }
}
</style>