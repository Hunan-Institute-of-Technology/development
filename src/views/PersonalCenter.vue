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
            发布商品
            <span>
              <hr />
            </span>
            <div class="pullimg fl">
              <!-- <img src="imgs/menu3.jpg" alt />
              <div class="btn">上传商品图片</div> -->
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
                    <el-select v-model="form.region" placeholder="请选择商品类别">
                      <el-option label="男装鞋包" value="manshoe"></el-option>
                      <el-option label="女装鞋包" value="femaleshoe"></el-option>
                      <el-option label="书籍资料" value="book"></el-option>
                      <el-option label="护肤彩妆" value="Skincare"></el-option>
                      <el-option label="汇吃美食" value="food"></el-option>
                      <el-option label="时尚配饰" value="Accessories"></el-option>
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
                    <el-switch v-model="form.delivery" active-text="接受" inactive-text="不接受"></el-switch>
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
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <div class="my-unused" v-show="checkmenu == 'unused'">我的闲置</div>
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
      checkmenu: "release",
      isFixed: false,
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
      }
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
      .release-product {
        .pullimg {
          
          background: blue;
          width: 400px;
          .despicture{
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
    }
  }
}
</style>
