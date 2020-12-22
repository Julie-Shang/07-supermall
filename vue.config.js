//配置文件夹别名，打包时vue会把vue.config.js 和noede_modules做合并
const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //设置绝对路径
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@', resolve('./src'))
            .set('assets', resolve('@/assets'))
            .set('components', resolve('@/components'))
            .set('views', resolve('@/views'))
    }

}