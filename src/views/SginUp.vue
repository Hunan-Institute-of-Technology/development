<template>
  <div class="signup">
    <div class="wrapper">
      <div class="container">
        <div class="nav-header-logo">
          <a href="/#/index"></a>
        </div>
        <h2>注册账号</h2>
        <div class="sginupform">
          <div class="country">
            <span>国家/地区</span>
            <div class="slectcountry">
              <el-select class="el-select" v-model="value" placeholder="请选择">
                <el-option v-for="(item,index) in options" :key="index" :value="item"></el-option>
              </el-select>
            </div>
            <p>成功注册账号后，国家/地区将不能被修改</p>
          </div>
          <div class="from">
            <span>邮箱地址</span>
            <div class="input">
              <input type="email" placeholder="请输入邮箱地址" v-model="email" />
            </div>
          </div>
          <div class="from">
            <span>账户用户名</span>
            <div class="input">
              <input type="text" placeholder="请输入账户用户名" v-model="username" />
            </div>
          </div>
          <div class="from">
            <span>密码</span>
            <div class="input">
              <el-input placeholder="请输入密码" v-model="password" class="password" show-password></el-input>
            </div>
          </div>
          <div class="info">
            <span class="checkbox" :class="{'checked':checked}" @click="changcheck"></span>
            已同意本公司
            <span>用户协议</span> 和
            <span>隐私政策</span>
          </div>
          <div class="btn btn-submit" @click="register">立刻注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "signup",
  data() {
    return {
      value: "",
      username: "",
      password: "",
      email: "",
      checked: false,
      options: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cote d'Ivoire",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Faeroe Islands",
        "Falkland Islands",
        "Fiji",
        "Finland",
        "Former Yugoslav Republic of Macedonia",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "North Korea",
        "Northern Marianas",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn Islands",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Sqo Tome and Principe",
        "Saint Helena",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Saudi Arabia",
        "Senegal",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "The Bahamas",
        "The Gambia",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Virgin Islands",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Yugoslavia",
        "Zambia",
        "Zimbabwe"
      ]
    };
  },
  components:{

  },
  methods: {
    register() {
      if(this.email ==''){
         this.$message.warning('请填写邮箱')
      }else if(this.username ==''){
         this.$message.warning('请填写用户名')
      }else if(this.password ==''){
         this.$message.warning('请填写密码')
      }else if (this.checked == false) {
        this.$message.warning("请同意小米用户协议和隐私政策");
      } else {
        this.axios
          .post("/user/register", {
            username: this.username,
            password: this.password,
            email: this.password
          })
          .then(() => {
            this.$router.push("/login");
          });
      }
    },
    changcheck() {
      this.checked = !this.checked;
    }
  }
};
</script>
<style lang="scss">
.input {
  margin: 10px 0;
  display: block;
  width: 332px;
  height: 42px;
  border: 1px solid #e5e5e5;
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 18px;
  }
}
.signup {
  .wrapper {
    .container {
      text-align: center;
      h2 {
        margin-top: 46px;
        font-size: 30px;
        font-weight: 400;
      }
      .sginupform {
        text-align: left;
        margin-top: 42px;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        .country {
          font-size: 14px;
          margin-bottom: 20px;
          span {
            font-size: 14px;
            font-weight: bold;
          }
          .slectcountry {
            margin: 10px 0;
            .el-select {
              width: 332px;
              height: 42px;
              font-size: 14px;
            }
          }
          p {
            color: #999999;
          }
        }
        .from {
          display: block;
          .password {
            height: 42px;
            line-height: 42px;
          }
          span {
            font-size: 14px;
            font-weight: bold;
          }
        }
        .info {
          font-size: 18px;
          .checkbox {
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 1px solid #e5e5e5;
            vertical-align: middle;
            margin-right: 17px;
            cursor: pointer;
            &.checked {
              background: url("/imgs/icon-gou.png") #409EFF no-repeat center;
              background-size: 16px 12px;
              border: none;
            }
          }
          span {
            color: #999999;
          }
        }
        .btn {
          margin-top: 43px;
        }
      }
    }
  }
}
</style>
