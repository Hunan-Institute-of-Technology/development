<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-user">
          <a href="/#/login">登录</a>
          <a href="/#/sginup">注册</a>
          <a href="javascript">消息通知</a>
          <a href="javascript">我的订单</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <!-- 点击图标返回首页 -->
          <a href="/#/index">
            <img src="/imgs/hu1.png" alt="" />
          </a>
        </div>
        <div class="header-search">
          <form action="get" class="search_box">
            <input
              class="sear-input"
              type="text"
              placeholder="what  are  you  looking  for?"
            />
            <span class="wrapper_sub">
              <input class="sub-input" type="submit" value="" />
            </span>
          </form>
      </div>
    </div>
  </div>
</div>  
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.header {
  // background-color:#3B3B98;
  .nav-topbar {
    height: 39px;
    color: #b0b0b0;
    background: #333333;
    line-height: 39px;
    .container {
      position: relative;
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      overflow: hidden;
      .topbar-user {
        float: right;
        a {
          color: #b0b0b0;
          margin-right: 17px;
          &:hover {
            color: #de2006;
          }
        }
      }
    }
  }
  .nav-header {
    height: 100px;
    // line-height: 135px;
    border-bottom: #e5e5e5 2px solid;
    margin-bottom: 11px;
    .container {
      display: flex;
      align-items: center;
      .header-logo {
        margin-left: 15px;
        margin-right: 70px;
        padding-top: 10px;
        a {
          display: inline-block;
          width: 70px;
          height: 70px;
          img {
            width: 70px;
            height: 70px;
          }
        }
      }
      .header-search {
        .search_box {
          display: flex;
          margin-left: 130px;
          margin-top: 24px;
          background-image: linear-gradient(#6d8ae4,rgba(199, 187, 96, 0.4));
          .sear-input {
            height: 50px;
            width: 560px;
            font-weight: bold;
            font-size: 16px;
            padding-left: 6px;
            margin: 9px 25px 9px 15px;
            border-radius: 6px;
            &:after {
              display: inline-block;
              background: url("/imgs/icon-fd.png") no-repeat center;
              background-size: contain;
              width: 10px;
              height: 15px;
            }
          }
          .wrapper_sub {
            width: 70px;
            height: 50px;
            margin-top: 5px;
            .sub-input {
              display: inline-block;
              // height: 50px;
              border: none;
              margin: 5px 15px;
              @include Bgimg(40px, 40px, "/imgs/icon/icon-search.png", contain);
            }
          }
        }
      }
    }
  }
}
</style>
