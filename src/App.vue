<template>
  <div id="app">
    <router-view></router-view>
    <nav>
      <router-link tag="div" class="nav-item icon-bookshelf" to="/bookshelf">
        <span>书架</span>
      </router-link>
      <router-link tag="div" class="nav-item icon-bookcity" to="/">
        <span>书城</span>
      </router-link>
      <router-link tag="div" class="nav-item icon-setting" to="/setting">
        <span>设置</span>
      </router-link>
    </nav>
  </div>
</template>

<style lang="scss">
nav {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 50px;
  text-align: center;
  line-height: 70px;
  box-shadow: 0px 2px 5px black;
  background-color: white;
  .nav-item {
    flex: 1;
    background-size: 30px 30px;
    background-position: center 0px;
    background-repeat: no-repeat;
    color: #555;
    font-size: 12px;
    &.icon-bookshelf {
      background-image: url(../src/assets/images/tabbar/tab_bookshelf.png);
    }
    &.icon-bookcity {
      background-image: url(../src/assets/images/tabbar/tab_bookstore.png);
    }
    &.icon-setting {
      background-image: url(../src/assets/images/tabbar/tab_setting.png);
    }
    &.router-link-exact-active {
      color: rgba(255, 140, 0, 0.84);
      &.icon-bookshelf {
        background-image: url(../src/assets/images/tabbar/tab_bookshelf_pressed.png);
      }
      &.icon-bookcity {
        background-image: url(../src/assets/images/tabbar/tab_bookstore_pressed.png);
      }
      &.icon-setting {
        background-image: url(../src/assets/images/tabbar/tab_setting_pressed.png);
      }
    }
  }
}
</style>