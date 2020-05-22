<template>
  <div class="personal">
    <pag-header></pag-header>
    <div class="container">
      <div class="personal-body clearfix">
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

                <li @click="checkmenu = 'information'">
                  <i class="infor"></i>
                  我的消息
                </li>
                <li><i class="star"></i>关注列表</li>
                <li @click="checkmenu = 'setupper'">
                  <i class="setting"></i>
                  个人设置
                </li>
                <li @click="checkmenu = 'release'">
                  <i class="release-items"></i>
                  发布商品
                </li>
                <li @click="checkmenu = 'unused'">
                  <i class="idle-items"></i>
                  我的闲置
                </li>
              </ul>
            </div>
          </div>
        </div>
         <div class="fr per-right">
          <div class="my-infor" v-show="checkmenu == 'information'">
            <div class="infor-box">
              <div class="infor-header">
                <p>我的消息</p>
              </div>
              <div class="wrapper">
                <el-scrollbar>
                  <ul
                    class="infinite-list"
                    v-infinite-scroll="load"
                    style="overflow:auto"
                  >
                    <li
                      v-for="(i, index) in count"
                      class="infinite-list-item"
                      :key="index"
                    >
                      <p>{{ i }}</p>
                      <div class="item-replay">
                        <span>标记已读</span>
                        <a href="javascript:;">回复</a>
                      </div>
                    </li>
                </ul>
                </el-scrollbar>
              </div>
            </div>
          </div>
          <div class="improve-message" v-show="checkmenu == 'setupper'">
            <div class="menu-title">
              <p >个人设置</p>
              <span></span>
            </div>
            <p class="title">完善个人信息</p>
            <table style="margin: auto">
              <tr>
                <th>用户名:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>性别:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>生日:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>大学:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>地址:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>手机号:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>大学:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>邮箱:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>Q Q:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
              <tr>
                <th>微信:</th>
                <th>
                  <input type="text" />
                </th>
              </tr>
            </table>

            <div class="btn btn-preserve">保存修改信息</div>
          </div>
          <div class="release-product clearfix" v-show="checkmenu == 'release'">
            <div class="menu-title">
              <p >发布商品</p>
              <span></span>
            </div>

            <div class="pullimg fl">
              <!-- <img src="imgs/menu3.jpg" alt />
              <div class="btn">上传商品图片</div>-->
              <p class="despicture">添加图片描述</p>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
            </div>
            <div class="pulltext fr">
              <div class="fl pullbody" style="background:white">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="商品名称">
                    <el-input v-model="form.name" clearable></el-input>
                  </el-form-item>
                  <el-form-item label="商品类别">
                    <el-select
                      v-model="form.region"
                      placeholder="请选择商品类别"
                    >
                      <el-option label="男装鞋包" value="manshoe"></el-option>
                      <el-option
                        label="女装鞋包"
                        value="femaleshoe"
                      ></el-option>
                      <el-option label="书籍资料" value="book"></el-option>
                      <el-option label="护肤彩妆" value="Skincare"></el-option>
                      <el-option label="汇吃美食" value="food"></el-option>
                      <el-option
                        label="时尚配饰"
                        value="Accessories"
                      ></el-option>
                      <el-option label="寝室用品" value="Bedding"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="购买时间">
                    <el-col :span="11">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="form.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="接受议价">
                    <el-switch
                      v-model="form.delivery"
                      active-text="接受"
                      inactive-text="不接受"
                    ></el-switch>
                  </el-form-item>
                  <el-form-item label="商品特点">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="全新" name="type"></el-checkbox>
                      <el-checkbox label="稀有" name="type"></el-checkbox>
                      <el-checkbox label="跳楼价" name="type"></el-checkbox>
                      <el-checkbox label="量大从优" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="范围限制">
                    <el-radio-group v-model="form.resource">
                      <el-radio label="同校"></el-radio>
                      <el-radio label="同城"></el-radio>
                      <el-radio label="同省"></el-radio>
                      <el-radio label="不限"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="商品描述">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary"
                      >立即创建</el-button
                    >
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <div class="my-unused" v-show="checkmenu == 'unused'">
            <div class="menu-title">
              <p >我的闲置</p>
              <span></span>
            </div>
            <div class="unusedbody">
              <div class="unuser-item" v-for="(item,index) of 3" :key=index>
                <div class="userimg">
                  <img src="imgs/hearimg.jpg" alt />
                </div>
                <p class="product-title">商品标题</p>
                <p class="product-des">商品描述东西质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。</p>
                <div class="product-img">
                  <img src="/imgs/menu1.jpg" alt />
                  <img src="/imgs/menu1.jpg" alt />
                  <img src="/imgs/menu1.jpg" alt />
                </div>
                <div class="handleproduct clearfix">
                  <span class="fl"><i class="delete"></i> 编辑</span>
                  <span class="fl"><i class="edit"></i>删除</span>
                  <span class="fr"><i class="time"></i>2020/05/22</span>
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
import PagHeader from "./../components/PagHeader";
export default {
  name: "personal-center",
  components: {
    PagHeader
  },
  data() {
    return {
      checkmenu: "unused",
      isFixed: false,
      dialogImageUrl: "",
      dialogVisible: false,
      count: 13,
      form: {
        name: "", //商品名称
        region: "",
        productType: [
          "男装鞋包",
          "女装鞋包",
          "书籍资料",
          "护肤彩妆",
          "汇吃美食",
          "时尚配饰",
          "寝室用品"
        ],
        proType: "", //商品类型
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
   onSubmit() {
      //表单提交事件
     },
    load() {
      this.count += 2;
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
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
            font-size: 18px;
            border-top: 2px solid #e5e5e5;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
            &:last-child {
              border-bottom: 2px solid #e5e5e5;
            }
            i {
              margin-right: 5px;
              vertical-align: middle;
              margin-top: -3px;
            }
            .infor {
              @include Bgimg(24px, 24px, "/imgs/icon-per-5.png", contain);
            }
            .star {
              @include Bgimg(24px, 24px, "/imgs/icon-per-4.png", contain);
            }
            .setting {
              @include Bgimg(24px, 24px, "/imgs/icon-per-3.png", contain);
            }
            .release-items {
              @include Bgimg(24px, 24px, "/imgs/icon-per-1.png", contain);
            }
            .idle-items {
              @include Bgimg(24px, 24px, "/imgs/icon-per-2.png", contain);
            }
          }
        }
      }
    }
    .per-right {
      position: relative;
      .menu-title {
        font-size: 32px;
        margin-bottom: 25px;
        span{
         position: absolute;
         height: 1px;
         width: 87%;
         background: #e5e5e5;
         top: 35px;
         left: 132px;
        }
      }
      padding-top: 15px;
      width: 1026px;
      background: yellowgreen;
      //  < -----------------------我的消息---------------------->
      .my-infor {
        .infor-box {
          width: 500px;
          height: 650px;
          margin-left: 50px;
          margin-bottom: 70px;
          background-color: #e0e0e0;
          .infor-header {
            height: 55px;
            line-height: 55px;
            background-color: rgb(248, 245, 245);
            margin-bottom: 10px;
            p {
              margin-left: 5px;
              font-size: 16px;
              font-weight: bold;
            }
          }
          .wrapper {
            width: 480px;
            height: 550px;
            .el-scrollbar {
              height: 100%;
              .el-scrollbar_wrap {
                overflow-x: hidden;
              }
              .infinite-list {
                .infinite-list-item {
                  width: 440px;
                  height: 70px;
                  border: #898181 1px solid;
                  margin-top: 4px;
                  margin-left: 6px;
                  border-radius: 9px;
                  p {
                    height: 40px;
                  }
                  .item-replay {
                    // width: 200px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 13px;
                    span {
                      color: #cc8975;
                      margin-right: 4px;
                    }
                    a {
                      color: #60c17f;
                      font-size: 13px;
                    }
                  }
                }
              }
            }
          }
        }
      }
      //  < -----------------------个人设置---------------------->
      .improve-message {
        text-align: center;
        .menu-title{
          text-align: left;
        }
        .title {
          font-size: 30px;
          padding-bottom: 50px;
        }
        tr {
          border: 2px #e5e5e5 solid;
          height: 80px;
          line-height: 80px;
        }
        .table-border {
          width: 50px;
          height: 4px;
          background: #e5e5e5;
        }
        .btn {
          margin: 0 auto;
          margin-top: 40px;
        }
      }
      //  < -----------------------发布物品---------------------->
      .release-product {
        .pullimg {
          background: blue;
          width: 400px;
          .despicture {
            text-align: center;
            font-size: 28px;
          }
        }
        .pulltext {
          .pullbody {
            margin-right: 100px;
          }
        }
      }
      .my-unused {
        .unusedbody {
          .unuser-item {
            position: relative;
            width: 800px;
            margin: 0 auto 25px;
            background: #e5e5e5;
            border-radius: 5px;
            .userimg {
              position: absolute;
              left: -50px;
              top: 10px;
              img {
                border-radius: 50%;
                width: 100px;
                height: 100px;
              }
            }
            .product-title{
              font-size: 24px;
              padding-top: 40px;
              margin-left: 62px;
            }
            .product-des{
              font-size: 16px;
              margin-left: 62px;
              margin-top: 45px;
            }
            .product-img{
              margin-top: 45px;
              margin-left: 62px;
              img{
                height: 200px;
                width: 200px;
                margin-left: 20px;
              }
            }
            .handleproduct{
              margin-top: 15px;
              font-size: 22px;
              span{
                margin-right: 15px;
                
                margin-bottom: 15px;
              }
              i{
                vertical-align: middle;
                margin-top: -3px;
                
              }
              .delete{
                margin-right: -9px;
                margin-top: -3px;
                @include Bgimg(28px, 28px, "/imgs/icon/delete.png", contain);
              }
              .edit{
                @include Bgimg(24px, 24px, "/imgs/icon/edit.png", contain);
              }
              .time{
                @include Bgimg(24px, 24px, "/imgs/icon/time.png", contain);
              }
            }
          }
        }
      }
    }
  }
}
</style>
