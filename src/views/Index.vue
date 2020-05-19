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
          <swiper-slide id="slider3">
            <a href="javascript;:">
              <img src="/imgs/swiper4.jpg" />
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
            <div class="picture">
              <img src="/imgs/picture.jpg" />
            </div>
            <div class="personal">
              <a href="/#/personalcenter">个人中心</a>
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
            name: "三只松鼠"
          },
          {
            img: "/imgs/menu2.jpg",
            name: "三只松鼠"
          },
          {
            img: "/imgs/menu3.jpg",
            name: "童装"
          }
        ],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
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
      border: 1px #de2006 solid;
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
              background: url("/imgs/icon-menu.png") no-repeat center;
              background-size: contain;
              width: 10px;
              height: 15px;
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
                // position: absolute;
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
      .swiper-container {
        display: inline-block;
        width: 710px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .nav-infor {
        display: flex;
        width: 300px;
        border-left: #de2006 1px solid;
        .picture {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 290px;
          height: 90px;
          margin-left: 15px;
          border-bottom: #dcd4d4ad 1px ridge;
          img {
            height: 30px;
            width: 30px;
          }
        }
        .personal {
          width: 300px;
          height: 20px;
          a {
            color: #333333;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
