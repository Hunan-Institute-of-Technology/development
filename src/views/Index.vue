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
              <img src="/imgs/swiper-1.jpg" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript;:">
              <img src="/imgs/swiper-2.jpg" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript;:">
              <img src="/imgs/swiper-3.jpg" />
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
        <div class="pro-module">
          <span @click="child_num = 'true'">最新发布</span>
          <span @click="child_num = 'false'">猜你喜欢</span>
        </div>
        <div class="product-menu">
          <div class="children" v-show="child_num == 'true'">
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
          <div class="children" v-show="child_num == 'false'">
            <div v-for="(item, i) in productList_1" :key="i" class="pro-menu">
              <div v-for="(pro, j) in item" :key="j" class="pro-item">
                <div class="pro-img">
                  <img :src="pro ? pro.img : '/imgs/product-1.jpg'" />
                </div>
                <div class="pro-infor">
                  <p>￥{{ pro ? pro.price : "400" }}</p>
                  <p>{{ pro ? pro.name : "二手手机" }}</p>
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
  mounted() {
    this.photo();
  },
  methods: {
    photo() {
      this.axios.get("/carousel/getCarouselList").then((res)=>{
        console.log(res);
      })
    }
  },
  data() {
    return {
      child_num: "false",
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
      ],
      productList_1: [
        [
          {
            img: "/imgs/product-1.jpg",
            name: "手机",
            price: "400"
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
      border: 1px rgba(122, 119, 119, 0.2) solid;
      // box-shadow: 2px 2px 10px ragb(255, 255, 0, 0.5);
      // <-----------------------主题栏---------------------->
      .nav-menu {
        display: inline-block;
        width: 200px;
        border-right: #de2006 1px solid;
        position: absolute;
        z-index: 9;
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
            // width: 720px;
            width: 860px;
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
        // display: inline-block;
        width: 1060px;
        height: 450px;
        .swiper-button-prev {
          left: 200px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      // <-----------------------右边框---------------------->
      .nav-infor {
        // width: 300px;
        width: 160px;
        border-left: #de2006 1px solid;
        .demo-type {
          display: flex;
          justify-content: center;
          align-items: center;
          // width: 290px;
          width: 80px;
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
      height: 1050px;
      // border-bottom: #de2006 1px solid;
      .pro-module {
        padding-top: 15px;
        font-size: 18px;
        font-weight: bold;
        span {
          display: inline-block;
          width: 80px;
          height: 30px;
          cursor: pointer;
          margin-left: 6px;
          &:hover {
            border-bottom: #62a5e9 3px solid;
            color: #de2006;
          }
        }
      }
      .product-menu {
        position: absolute;
        left: 0px;
        top: 38px;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        .children {
          margin-top: 25px;
          width: 1226px;
          height: 900px;
          // border: #333333 1px solid;
          .pro-menu {
            display: flex;
            margin-top: 20px;
            .pro-item {
              width: 273px;
              height: 280px;
              // border: #de2006 1px solid;
              box-shadow: 0px 0px 10px ragb(255, 0, 0, 0.5);
              margin-left: 20px;
              text-align: center;
              background-color: #fff;
              cursor: pointer;
              &:last-children {
                margin-left: 0px;
              }
              &:hover {
                transform: scale(1.1);
              }
              .pro-img {
                margin-top: 5px;
                margin-left: auto;
                margin-right: auto;
                width: 250px;
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
</style>
