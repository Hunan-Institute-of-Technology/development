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
              placeholder="搜索想要的商品"
            />
            <span class="wrapper_sub">
              <input class="sub-input" type="submit" value="搜索" />
            </span>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
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
    border-bottom: #dcd4d4ad 1px solid;
    margin-bottom: 11px;
    .container {
      position: relative;
      width: 1226px;
      display: flex;
      align-items: center;
      margin-right: auto;
      margin-left: auto;
      .header-logo {
        margin-right: 50px;
        padding-top: 10px;
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
          height: 50px;
          border: 2px #de2006 solid;
          border-radius: 13px;
          .sear-input {
            border: none;
            height: 26px;
            width: 500px;
            font-weight: bold;
            font-size: 16px;
            margin: 12px 50px 12px 20px;
            &:after {
              display: inline-block;
              background: url("/imgs/icon-fd.png") no-repeat center;
              background-size: contain;
              width: 10px;
              height: 15px;
            }
          }
          .wrapper_sub {
            background: #de2006;
            .sub-input {
              display: inline-block;
              height: 26px;
              width: 60px;
              border: none;
              margin: 12px 10px;
              background: #de2006;
            }
          }
        }
      }
    }
  }
}
</style>
