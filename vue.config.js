module.exports = {
     devServer:{
       host: 'localhost' ,
       port:8081,
       proxy:{
         '/fleamarket':{
           target:"https://www.hnitfleamarket.com",
           changeOrigin:true,
           pathRewrite:{
             'fleamarket': ''
           }
         }
       }
     },
     //本地调试可以开启，线上部署需要关闭
   //   productionSourceMap:true,
     //删除预加载
   //   chainWebpack:(config)=>{
   //     config.plugins.delete('prefetch')
   //   }
   }
   