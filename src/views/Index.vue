<template>
  <div class="index">
    <div class="container">
      <div class="wrapper-box">
        <div class="nav-menu">
          <ul class="menu-wrapper">
            <li class="menu-item">
              <a href="javascript:;">最新发布</a>
              <div class="children">
                <ul v-for="(item, i) of menuList" :key="i">
                  <li v-for="(sub, j) of item" :key="j">
                    <a href="javascript:;">
                      <img :src="sub ? sub.img : '/imgs/menu1.jpg'" />
                      {{ sub ? sub.name : "三只松鼠" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">美妆衣物</a>
              <div class="children">
                <ul v-for="(item, i) of menuList" :key="i">
                  <li v-for="(sub, j) of item" :key="j">
                    <a href="javascript:;">
                      <img :src="sub ? sub.img : '/imgs/menu1.jpg'" />
                      {{ sub ? sub.name : "三只松鼠" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">二手图书</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机数码</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活百货</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">鞋子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">箱包</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">其它</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href="javascript;:">
              <img src="/imgs/swiper1.jpg" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript;:">
              <img src="/imgs/swiper2.jpg" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript;:">
              <img src="/imgs/swiper3.jpg" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div
            class="swiper-button-prev  swiper-button-white"
            slot="button-prev"
          ></div>
          <div
            class="swiper-button-next  swiper-button-white"
            slot="button-next"
          ></div>
        </swiper>
        <div class="nav-infor">
          <div class="nav">
            <div class="demo-type">
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
            </div>
            <!-- --------------- -->
            <div class="personal">
              <i class="per-center"></i>
              <a href="/#/personalcenter">个人中心</a>
            </div>
            <div class="shop">
              <i class="shopping"></i>
              <a href="/#/personalcenter">商城</a>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="product-menu">
          <div class="product-item">
            <span>最新发布</span>
            <div class="children" v-if="child_num == 1" @click="change_laster">
              <div v-for="(item, i) in productList" :key="i" class="pro-menu">
                <div v-for="(pro, j) in item" :key="j" class="pro-item">
                  <div class="pro-img">
                    <img :src="pro ? pro.img : '/imgs/menu1.jpg'" />
                  </div>
                  <div class="pro-infor">
                    <p>￥{{ pro ? pro.price : "80" }}</p>
                    <p>{{ pro ? pro.name : "四肢松鼠" }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item">
            <span>猜你喜欢</span>
            <div class="children" v-if="child_num == 2" @click="change_favor">
              <div v-for="(item, i) in productList" :key="i" class="pro-menu">
                <div v-for="(pro, j) in item" :key="j" class="pro-item">
                  <div class="pro-img">
                    <img :src="'pro.img'" />
                  </div>
                  <div class="pro-infor">
                    <p>￥{{ pro.price }}</p>
                    <p>{{ pro.img }}</p>
                  </div>
                </div>
              </div>
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
  name: "index",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      child_num: 1,
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
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
      menuList: [
        [
          {
            img: "/imgs/menu1.jpg",
            name: "三只松鼠",
            price: "40"
          },
          {
            img: "/imgs/menu2.jpg",
            name: "三只松鼠",
            price: "50"
          },
          {
            img: "/imgs/menu3.jpg",
            name: "童装",
            price: "30"
          }
        ],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      productList: [
        [
          {
            img: "/imgs/menu1.jpg",
            name: "三只松鼠",
            price: "40"
          },
          {
            img: "/imgs/menu2.jpg",
            name: "三只松鼠",
            price: "50"
          },
          {
            img: "/imgs/menu3.jpg",
            name: "童装",
            price: "30"
          },
          {
            img: "/imgs/menu3.jpg",
            name: "童装",
            price: "30"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    };
  },
  methods: {
    change_laster() {
      this.chid_num = 1;
    },
    change_favor() {
      this.chid_num = 2;
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.index {
  .container {
    .wrapper-box {
      display: flex;
      height: 450px;
      border: 1px #de2006 solid;
      // <-----------------------主题栏---------------------->
      .nav-menu {
        display: inline-block;
        width: 200px;
        border-right: #de2006 1px solid;
        .menu-item {
          display: flex;
          height: 50px;
          line-height: 50px;
          padding-left: 10px;
          a {
            position: relative;
            display: inline-block;
            color: #333333;
            padding-left: 20px;
            font-size: 16px;
            &:after {
              position: absolute;
              left: 170px;
              top: 15px;
              content: "";
              display: inline-block;
              @include Bgimg(10px, 15px, "/imgs/icon-menu.png", contain);
            }
          }
          &:hover {
            background-color: #de2006;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            position: absolute;
            z-index: 2;
            width: 720px;
            height: 450px;
            left: 200px;
            top: 0;
            background-color: #ffffff;
            border: #de2006 1px solid;
            ul {
              display: flex;
              height: 130px;
              justify-content: space-between;
              li {
                height: 130px;
                flex: 1;
                z-index: 8;
                a {
                  font-size: 14px;
                  color: #e0e0e0;
                  img {
                    height: 50px;
                    line-height: 50px;
                    width: 70px;
                  }
                }
              }
            }
          }
        }
      }
      // <-----------------------轮播图---------------------->
      .swiper-container {
        display: inline-block;
        width: 710px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      // <-----------------------右边框---------------------->
      .nav-infor {
        width: 300px;
        border-left: #de2006 1px solid;
        .demo-type {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 290px;
          height: 90px;
          margin-left: 15px;
          border-bottom: #dcd4d4ad 1px ridge;
        }
        .personal,
        .shop {
          height: 30px;
          line-height: 30px;
          margin: 15px 0px 15px 15px;
          a {
            display: absolute;
            font-size: 17px;
            color: #333333;
            font-weight: bold;
            margin-left: 4px;

          }
        }
        .personal {
          i {
             @include Bgimg(25px, 25px, "/imgs/icon-personal.png", contain);
          }
        }
        .shop {
          i {
            @include Bgimg(25px, 25px, "/imgs/icon-shopping.png", contain);
          }
        }
      }
    }
    // <-----------------------产品栏---------------------->
    .product {
      position: relative;
      margin-top: 50px;
      margin-bottom: 40px;
      width: 1226px;
      height: 950px;
      border-bottom: #de2006 1px solid;
      .product-menu {
        display: flex;
        .product-item {
          width: 80px;
          height: 30px;
          margin-right: 16px;
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          cursor: pointer;
          &:hover {
            border-bottom: #de2006 3px solid;
          }
          .children {
            position: absolute;
            left: 0px;
            top: 10px;
            margin-top: 25px;
            width: 1226px;
            border: #333333 1px solid;
            .pro-menu {
              display: flex;
              margin-top: 5px;
              justify-content: space-between;
              .pro-item {
                width: 280px;
                height: 280px;
                border: #de2006 1px solid;
                margin-left: 10px;
                text-align: center;
                &:last-children {
                  margin-left: 0px;
                }
                .pro-img {
                  margin-top: 5px;
                  margin-left: 11px;
                  width: 225px;
                  height: 225px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
