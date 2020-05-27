<template>
  <div class="order-confirm">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order-header">
            <h2>收货地址</h2>
          </div>
          <div class="address-add">
            <i class="icon-add"></i>
            <p>添加收货地址</p>
          </div>
          <div class="item-goods">
            <h2>商品</h2>
            <ul>
                <li>商品图案</li>
              </ul>
          </div>
          <div class="detail">
            <div class="item">
              <span class="item-name">商品总价:</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item">
              <span class="item-name">运费:</span>
              <span class="item-val">0</span>
            </div>
            <div class="item-totall">
              <span class="item-name">应付金额</span>
              <span class="item-val">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order-confirm",
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.order-confirm {
  .wrapper {
    .order-box {
      .order-header {
        margin-top: 30px;
        margin-bottom: 84px;
        h2 {
          font-size: 16px;
        }
      }
      .address-add {
        border: #ff6600 1px solid;
        width: 250px;
        height: 200px;
        text-align: center;
        vertical-align: center;
        color: #999999;
        cursor: pointer;
        .icon-add {
          @include Bgimg(30px, 30px, "/imgs/icon-add.png", contain);
        }
      }
      .item-goods {
        h2 {
          font-size: 20px;
          font-weight: bold;
        }
        ul {
          li {
            height: 15px;
          }
        }


      }
    }
  }
}
</style>
