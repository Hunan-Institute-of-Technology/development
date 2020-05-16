<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-user">
          <a href="/#/login">登录</a>
          <a href="/#/signup">注册</a>
          <a href="javascript">消息通知</a>
          <a href="javascript">我的订单</a>
          <a href="javascript">购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container " >
        <div class="header-logo ">
          <!-- 点击图标返回首页 -->
          <a href="/#/index">
            <img src="/imgs/app1.png" alt="" />
          </a>
        </div>
        <div class="header-search ">
          <form action="get" class="search_box">
            <span class="fd"> <img src="/imgs/icon-fd.png"/></span>
            <input type="text" placeholder="搜索想要的商品" />
            <input type="submit" value="搜索" />
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
            color: #ff6600;
          }
        }
      }
    }
  }
  .nav-header {
    height: 112px;
    line-height: 112px;
    .container {
      position: relative;
      width: 1226px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: auto;
      margin-left: auto;
      .header-logo {
        margin-right: 50px;
        a {
          display: inline-block;
          width: 80px;
          height: 80px;
          padding-top: 10px;
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
      .header-search {
        display: inline-block;
        margin-bottom: 35px;
        .search_box {
          height: 80px;
          width: 300px;
          .fd {

            img {
              width: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
