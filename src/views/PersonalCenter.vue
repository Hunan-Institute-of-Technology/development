<template>
  <div class="personal">
    <pag-header></pag-header>
    <div class="container">
      <div class="personal-body">
        <div class="fl per-left">
          <div class="wrapper">
            <div class="per-log">
              <img src="imgs/hearimg.jpg" alt />
              <p class="per-name">名字</p>
              <p class="per-college">大学</p>
              <p class="free-num">闲置数量:15</p>
            </div>
            <div class="per-menu">
              <ul>
                <li>我的消息</li>
                <li>关注列表</li>
                <li @click="checkmenu = 'setupper'">个人设置</li>
                <li @click="checkmenu = 'release'">发布商品</li>
                <li @click="checkmenu = 'unused'">我的闲置</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="fr per-right">
          <div class="improve-message" v-show="checkmenu == 'setupper'">
            <p class="title">完善个人信息</p>
            <table style="margin: auto">
              <tr>
                <th>用户名:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>性别:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>生日:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>大学:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>地址:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>手机号:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>大学:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>邮箱:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>Q Q:</th>
                <th><input type="text" /></th>
              </tr>
              <tr>
                <th>微信:</th>
                <th><input type="text" /></th>
              </tr>
            </table>

            <div class="btn btn-preserve">
              保存修改信息
            </div>
          </div>
          <div class="release-product" v-show="checkmenu == 'release'">
            发布商品
          </div>
          <div class="my-unused" v-show="checkmenu == 'unused'">
            我的闲置
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PagHeader from "./../components/PagHeader";
export default {
  name: "personal-center",
  components: {
    PagHeader
  },
  data() {
    return {
      checkmenu: "",
      isFixed: false
    };
  }
};
</script>
<style lang="scss">
.personal {
  .personal-body {
    margin-top: 8px;
    position: absolute;
    .per-left {
      padding-top: 15px;
      width: 200px;
      height: 600px;
      background: blanchedalmond;
      .wrapper {
        text-align: center;
        .per-log {
          margin-bottom: 60px;
          p {
            margin-bottom: 8px;
          }
          img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
          }
          .per-name {
            font-size: 24px;
            color: blueviolet;
          }
          .free-num {
            font-size: 18px;
            color: aqua;
          }
        }
        .per-menu {
          li {
            font-size: 16px;
            border-top: 2px solid #e5e5e5;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
            &:last-child {
              border-bottom: 2px solid #e5e5e5;
            }
          }
        }
      }
    }
    .per-right {
      padding-top: 15px;
      width: 1026px;
      background: yellowgreen;
      // height: 800px;
      .improve-message {
        text-align: center;
        .title {
          font-size: 30px;
          padding-bottom: 50px;
        }
        tr {
          border: 2px #e5e5e5 solid;
          height: 80px;
          line-height: 80px;
        }
        .table-border{
          width: 50px;
          height: 4px;
          background: #e5e5e5;
        }
        .btn {
          margin: 0 auto;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
