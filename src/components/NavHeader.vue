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
            <img src="/imgs/hu.jpg" alt="" />
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
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.header {
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
    height: 135px;
    // line-height: 135px;
    border-bottom: #dcd4d4ad 1px solid;
    margin-bottom: 11px;
    .container {
      display: flex;
      align-items: center;
      .header-logo {
        margin-left: 15px;
        margin-right: 70px;
        padding-top: 15px;
        a {
          display: inline-block;
          width: 80px;
          height: 80px;
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
      .header-search {
        .search_box {
          display: flex;
          margin-top: 36px;
          background-color: #6d8ae4;
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
