module.exports={
devServer:{
    host:'localhost',
    port:8081,
    proxy:{
// 一定不能加空格
    '/api': {
        target:'http://localhost:8080/fleamarket',
        changeOrigin:true,
    //   错误示范pathRewriter
        pathRewrite:{
          '/api':''
        }
    }
    }
}
};