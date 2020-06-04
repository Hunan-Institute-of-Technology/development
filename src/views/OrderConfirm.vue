<template>
  <div class="order-confirm">
    <pag-header></pag-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order-header">
            <h2>收货地址</h2>
            <div class="address-list clearfix">
              <div class="addr-info">
                <h2>MAOKAIOU</h2>
                <div class="phone">123456</div>
                <div class="street">湖南省衡阳市珠晖区</div>
                <div class="action">
                  <a href="javascript:;" class="fl">
                    <i class="delete"></i>
                  </a>
                  <a href="javascript:;" class="fr">
                      <i class="edit"></i>
                  </a>
                </div>
              </div>
              <div class="address-add">
                <i class="icon-add"></i>
                <p>添加收货地址</p>
              </div>
            </div>
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
import PagHeader from "./../components/PagHeader.vue";
export default {
  name: "order-confirm",
  components: {
    PagHeader
  }
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
.order-confirm {
  .wrapper {
    background-color: #F5F5F5;
    padding-bottom: 35px;
    padding-top: 30px;
    .order-box {
      background-color:  #ffffff;
      padding-left: 40px;
      padding-bottom: 40px;
      .order-header {
        padding-top:40px;
        h2 {
          font-size: 16px;
          color: #333333;
        }
        .address-list {
          padding-top: 30px;
          .addr-info,
          .address-add {
            box-sizing: border-box;
            float: left;
            width: 271px;
            height: 180px;
            border: 1px solid #E5E5E5;
            margin-right: 15px;
            padding: 15px 24px;
            font-size: 14px;
            color: #757575;
          }
          .addr-info {
            .action {
              .edit {
                @include Bgimg(20px, 20px, "/imgs/icon-adjust.png", contain);
              }
              .delete {
                @include Bgimg(20px, 20px, "/imgs/icon-del.png", contain);
              }
            }
            
          }
          .address-add {
            text-align: center;
            cursor: pointer;
            .icon-add {
              margin-top:45px;
              @include Bgimg(30px, 30px, "/imgs/icon-add.png", contain);
            }
          }
        }
      }
      .item-goods {
        margin-top: 15px;
        border-bottom: 1px solid #E5E5E5;
        padding-top: 20px;
        padding-bottom:20px;
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
      .detail {
        text-align: right;
        margin-top: 5px;
        padding: 60px 50px 40px;
        color: #666666;
        font-size: 20px;
        .item {
          height: 40px;
        }
        .item-val {
          display: inline-block;
          width:100px;
          color: #FF6700;
        }
        .item-totall {
          .item-name {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
