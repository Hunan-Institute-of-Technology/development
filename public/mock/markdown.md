# HnitFleaMarket


<a name="overview"></a>
## 概览
二手交易平台api文档


### 版本信息
*版本* : 1.0.0


### 联系方式
*名字* : HnitACM  
*邮箱* : 364779323@qq.com


### 许可信息
*服务条款* : https://www.hnitfleamarket.com


### URI scheme
*域名* : localhost:8080  
*基础路径* : /fleamarket


### 标签

* 发送短信相关接口 : Aliyun Sms Controller
* 商品分类相关接口 : Category Controller
* 地址相关接口 : Address Controller
* 用户相关接口 : Users Controller
* 轮播图相关接口 : Carousel Controller




<a name="paths"></a>
## 资源

<a name="8848cf2a5b1f43d2b7412f7b404e3bb6"></a>
### 发送短信相关接口
Aliyun Sms Controller


<a name="checkcodeusingpost"></a>
#### 验证验证码
```
POST /sms/check
```


##### 说明
验证验证码


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**codeCheckBO**  <br>*必填*|codeCheckBO|[CodeCheckBO](#codecheckbo)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/sms/check
```


###### 请求 body
```
json :
{
  "code" : "string",
  "telephone" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="sendsmsusingpost"></a>
#### 发送短信验证码
```
POST /sms/send
```


##### 说明
发送短信验证码


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**phoneNum**  <br>*必填*|phoneNum|string|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/sms/send
```


###### 请求 query
```
json :
{
  "phoneNum" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="4de12047b480bb9e75cd29cffdd9b104"></a>
### 商品分类相关接口
Category Controller


<a name="getallrootcatusingget"></a>
#### 获取商品分类(一级分类)
```
GET /category/getAllRootCat
```


##### 说明
获取商品分类


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/category/getAllRootCat
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="subcatusingget"></a>
#### 获取子分类
```
GET /category/subCat/{rootCatId}
```


##### 说明
获取子分类


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Path**|**rootCatId**  <br>*必填*|rootCatId|integer (int32)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/category/subCat/0
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="2173215cd9bcaca374d1dab5409d1b52"></a>
### 地址相关接口
Address Controller


<a name="addaddressusingpost"></a>
#### 新增用户地址
```
POST /address/add
```


##### 说明
新增用户地址


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**addressBO**  <br>*必填*|addressBO|[AddressBO](#addressbo)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/address/add
```


###### 请求 body
```
json :
{
  "addressId" : 0,
  "city" : "string",
  "detail" : "string",
  "district" : "string",
  "province" : "string",
  "userId" : 0,
  "userName" : "string",
  "userTelephone" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="deleteaddressusingpost"></a>
#### 用户删除地址
```
POST /address/delete
```


##### 说明
用户删除地址


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**addressId**  <br>*必填*|addressId|integer (int64)|
|**Query**|**userId**  <br>*必填*|userId|integer (int64)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/address/delete
```


###### 请求 query
```
json :
{
  "addressId" : 0,
  "userId" : 0
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="getaddresslistusingget"></a>
#### 根据用户id查询收货地址列表
```
GET /address/getList
```


##### 说明
根据用户id查询收货地址列表


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**userId**  <br>*必填*|userId|integer (int64)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/address/getList
```


###### 请求 query
```
json :
{
  "userId" : 0
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="setdefaultusingpost"></a>
#### 用户设置默认地址
```
POST /address/setDefault
```


##### 说明
用户设置默认地址


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Query**|**addressId**  <br>*必填*|addressId|integer (int64)|
|**Query**|**userId**  <br>*必填*|userId|integer (int64)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/address/setDefault
```


###### 请求 query
```
json :
{
  "addressId" : 0,
  "userId" : 0
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="updateaddressusingpost"></a>
#### 用户修改地址
```
POST /address/update
```


##### 说明
用户修改地址


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**addressBO**  <br>*必填*|addressBO|[AddressBO](#addressbo)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/address/update
```


###### 请求 body
```
json :
{
  "addressId" : 0,
  "city" : "string",
  "detail" : "string",
  "district" : "string",
  "province" : "string",
  "userId" : 0,
  "userName" : "string",
  "userTelephone" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="c820f85be08987faad8bf8f326c173d7"></a>
### 用户相关接口
Users Controller


<a name="registerusingpost"></a>
#### 用户注册
```
POST /users/register
```


##### 说明
用户注册


##### 参数

|类型|名称|说明|类型|
|---|---|---|---|
|**Body**|**registerBO**  <br>*必填*|registerBO|[RegisterBO](#registerbo)|


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**201**|Created|无内容|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/users/register
```


###### 请求 body
```
json :
{
  "code" : "string",
  "userName" : "string",
  "userPassword" : "string",
  "userTelephone" : "string"
}
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```


<a name="5647f51323ebf96c5c632a2fafb96f3e"></a>
### 轮播图相关接口
Carousel Controller


<a name="carouselusingget"></a>
#### 获取首页轮播图列表
```
GET /carousel/getCarouselList
```


##### 说明
获取首页轮播图列表


##### 响应

|HTTP代码|说明|类型|
|---|---|---|
|**200**|OK|[JSONResult](#jsonresult)|
|**401**|Unauthorized|无内容|
|**403**|Forbidden|无内容|
|**404**|Not Found|无内容|


##### 消耗

* `application/json`


##### 生成

* `*/*`


##### HTTP请求示例

###### 请求 path
```
/carousel/getCarouselList
```


##### HTTP响应示例

###### 响应 200
```
json :
{
  "data" : "object",
  "msg" : "string",
  "status" : 0
}
```




<a name="definitions"></a>
## 定义

<a name="addressbo"></a>
### AddressBO

|名称|说明|类型|
|---|---|---|
|**addressId**  <br>*可选*|**样例** : `0`|integer (int64)|
|**city**  <br>*可选*|**样例** : `"string"`|string|
|**detail**  <br>*可选*|**样例** : `"string"`|string|
|**district**  <br>*可选*|**样例** : `"string"`|string|
|**province**  <br>*可选*|**样例** : `"string"`|string|
|**userId**  <br>*可选*|**样例** : `0`|integer (int64)|
|**userName**  <br>*可选*|**样例** : `"string"`|string|
|**userTelephone**  <br>*可选*|**样例** : `"string"`|string|


<a name="codecheckbo"></a>
### CodeCheckBO

|名称|说明|类型|
|---|---|---|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**telephone**  <br>*可选*|**样例** : `"string"`|string|


<a name="jsonresult"></a>
### JSONResult

|名称|说明|类型|
|---|---|---|
|**data**  <br>*可选*|**样例** : `"object"`|object|
|**msg**  <br>*可选*|**样例** : `"string"`|string|
|**status**  <br>*可选*|**样例** : `0`|integer (int32)|


<a name="registerbo"></a>
### RegisterBO

|名称|说明|类型|
|---|---|---|
|**code**  <br>*可选*|**样例** : `"string"`|string|
|**userName**  <br>*可选*|**样例** : `"string"`|string|
|**userPassword**  <br>*可选*|**样例** : `"string"`|string|
|**userTelephone**  <br>*可选*|**样例** : `"string"`|string|





