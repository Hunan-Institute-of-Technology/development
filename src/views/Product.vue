<template>
  <div class="product">
    <div class="container">
      <div class="product-head clearfix">
        <p class="heade-title">二级链接</p>
        <div class="swiper-img fl">
          <swiper :options="swiperOption">
            <swiper-slide>
              <a href="javascript:;">
                <img src="/imgs/swiper-1.jpg" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:;">
                <img src="/imgs/swiper-2.jpg" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:;">
                <img src="/imgs/swiper-3.jpg" />
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          </swiper>
        </div>
        <div class="seller fl">
          <p class="product-title">商品标题</p>
          <div class="product-price">
            <span style="text-decoration:line-through;">￥原价998</span>
            <p class="present-price">现价98</p>
            <p class="bargain">可议价/不讲价</p>
          </div>
          <div class="seller-msg">
            <p class="seller-title">卖家信息</p>
            <div class="seller-name">卖家姓名</div>
            <div class="seller-phone">卖家电话</div>
            <div class="seller-adder">卖家粗略地址</div>
          </div>
          <div class="product-handle">
            <div class="btn btn-group">
              <img src="/imgs/icon/collect.png" alt /> 加入关注
            </div>
            <div class="btn btn-group">
              <img src="/imgs/icon/pay.png" alt />在线支付
            </div>
          </div>
          <p class="release-time">发布于2020/05/24</p>
        </div>
      </div>
      <div class="product-des">
        商品描述
        <p>商品描述东西质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。</p>
      </div>
      <div class="product-comment">
        <h2>留言</h2>
        <div class="comment-list">
          <div class="comment-item" v-for="(item , index) of 3" :key="index">
            <p class="comment-content">九折排队</p>
            <p class="comment-time">2020/05/26 20.39</p>
          </div>
          <div class="release-comment">
            <div class="commentblock">
              <i class="icon-comment"></i>
              <el-input  class="comment-input" placeholder="给卖家留言" v-model="commentItem" clearable></el-input>
              <div class="btn-mini">确认</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "product",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        grabCursor: true,
        autoplay: true,
        loop: true,
        effect: "fade",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: "true"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      commentItem: "" //评论内容
    };
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.product {
  background: #f0f0f0;
  .product-head {
    .heade-title {
      font-size: 28px;
    }
    .swiper-img {
      width: 750px;
      height: 420px;
      background: #2ecc71;
      img {
        height: 420px;
      }
    }
    background: #fff;
    .seller {
      margin-left: 25px;
      .product-title {
        font-size: 26px;
      }
      .product-price {
        margin-top: 15px;
        span {
          display: inline-block;
          color: #bdc3c7;
          margin-bottom: 10px;
        }
        .present-price {
          font-size: 18px;
          color: #e74c3c;
        }

        .bargain {
          margin-top: 15px;
          margin-bottom: 25px;
          color: #2ecc71//不议价#e74c3c;
        }
      }
      .seller-msg {
        div[class^="seller"] {
          margin-bottom: 15px;
        }
        .seller-title {
          position: relative;
          font-size: 20px;
          margin-bottom: 25px;
          &::after {
            content: "";
            width: 100%;
            height: 1px;
            background: #000;
            display: block;
            position: absolute;
            top: 2px;
            bottom: 0px;
            margin: auto;
            left: 82px;
          }
        }
        .seller-name::before {
          content: " ";
          display: inline-block;
          @include Bgimg(28px, 28px, "/imgs/icon/contacts.png", contain);
          vertical-align: middle;
          margin-right: 10px;
        }
        .seller-phone::before {
          content: " ";
          display: inline-block;
          @include Bgimg(28px, 28px, "/imgs/icon/phone.png", contain);
          vertical-align: middle;
          margin-right: 10px;
        }
        .seller-adder::before {
          content: " ";
          display: inline-block;
          @include Bgimg(26px, 26px, "/imgs/icon/address.png", contain);
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      .product-handle {
        img {
          vertical-align: middle;
          display: inline-block;
          width: 24px;
          height: 24px;
        }
      }
      .release-time {
        margin-top: 10px;
        font-size: 12px;
        &::before {
          content: " ";
          display: inline-block;
          vertical-align: middle;
          @include Bgimg(22px, 22px, "/imgs/icon/time.png", contain);
        }
      }
    }
  }
  .product-des {
    margin-top: 40px;
    background: #fff;
  }
  .product-comment {
    margin-top: 40px;
    background: #fff;
    h2 {
      padding: 20px 0 0 20px;
    }
    h2::after {
      content: " ";
      display: block;
      height: 2px;
      width: 100px;
      background: #409eff;
      margin-top: 15px;
      margin-bottom: 40px;
    }
    .comment-list {
      margin-left: 20px;
      .comment-item {
        margin-bottom: 25px;
        border-bottom: 1px solid #e5e5e5;
        .comment-time {
          margin-top: 10px;
          margin-bottom: 5px;
          font-size: 10px;
          color: gainsboro;
          &::before {
            content: " ";
            margin-right: 3px;
            display: inline-block;
            vertical-align: middle;
            @include Bgimg(14px, 14px, "/imgs/icon/time.png", contain);
          }
        }
      }
    }
    .release-comment {
      .commentblock {
        position: relative;
        margin: 0 auto;
        width: 700px;
        .icon-comment {
          display: block;
          position: absolute;
          z-index: 11;
          top: 10px;
          left: 10px;
          @include Bgimg(22px, 22px, "/imgs/icon/comment.png", contain);
        }
        .comment-input{
          input{
            padding-left: 34px;
          }
        }
        .el-input:focus{
          .icon-comment{
            display: none;
          }
        }
      }
      .btn-mini{
        margin: 0 auto;
        margin-top: 15px;
      }
    }
  }
}
</style>