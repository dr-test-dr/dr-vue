module.exports = {
    // baseUrl: './',
    // assetsDir: 'static',
    // productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://localhost:7001/',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                    // 后面组件中我们掉接口时直接用api代替 比如我要调
                    // 用'http://425.0.100.100:8888/user/add'，直接写‘/api/user/add’即可
                }
            }
        }
    }
}