<template>
  <div class="personal">
    <div class="container">
      <div class="home-header"></div>
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
        <div class="fr per-right" >
          <div class="improve-message" v-show="checkmenu == 'setupper'">
            <p class="title">完善个人信息</p>
            <table style="margin: auto">
              <tr>
                <th>昵称:</th>
                <th><input type="text"></th>
              </tr>
              <tr>
                <th>昵称:</th>
                <th><input type="text"></th>
              </tr>
               <tr>
                <th>昵称:</th>
                <th><input type="text"></th>
                <th>验证</th>
              </tr>
               <tr>
                <th>昵称:</th>
                <th><input type="text"></th>
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
export default {
  name: "personal-center",
  data() {
    return {
      checkmenu:"",
    }
  }
};
</script>
