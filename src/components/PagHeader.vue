<template>
  <div class="pag">
    <div class="container">
      <div class="home-header">
        <a href="/#/index">
          <img src="/imgs/hu1.png" />
        </a>
        <span class="site-name">
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pag-header"
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.pag {
  border-bottom: #757373 1px solid;
  // /
  .home-header {
    display: flex;
    height: 100px;
    // line-height: 100px;
    align-items: center;
    a {
      width: 70px;
      height: 70px;
      margin-left: 20px;
      border-radius: 35px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .site-name {
      display: inline-block;
      margin-left: 50px;
      height: 70px;
      @include Bgimg(550px, 70px, "/imgs/site-name.png", contain);
    }
  }
}
</style>
