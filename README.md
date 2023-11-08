#小程序

基于tora的多端同构框架，支持编译为H5、和微信、支付宝、头条等多端小程序。


## 技术栈
- typescript
- taro
- taro-ui
- react

## 目录结构
- assets 静态资源
- components 通用组件
- constants 全局常量
- store mobx的store目录
- utils 通用工具
- pages 页面


## 主题定制
UI层采用taro-ui，定制主题方案如下；
- taro-custom-themes为taro-ui主题变量，修改全局主题样，式优先使用这些变量修改
- theme-overrides为taro-ui定制样式，用于处理无法通过变量修改的样式。
- 其他自定义样式为非共用样式，在组件内自行覆盖处理。
  

## 环境判断
- 同构taro提供的环境变量，https://taro-docs.jd.com/taro/docs/apis/about/env
- H5和native的差异可以通过utils/ua判断

```javascript
// 编译类型
if (process.env.TARO_ENV === 'weapp') {
  require('path/to/weapp/name')
} else if (process.env.TARO_ENV === 'h5') {
  require('path/to/h5/name')
}

// 运行环境判断
// @see https://taro-docs.jd.com/taro/docs/apis/about/env/
```

## CSS单位
更具taro推荐，统一使用px为单位
- https://taro-docs.jd.com/taro/docs/size

## store
对于所有store中数据的修改，必须通过action。

## 接口文档
http://10.20.20.102:21003/swagger-ui/index.html


## H5测试环境

### jenkins
### 域名


## H5生产环境

### jenkins
### 域名



## 注意事项
1. dev 模式生成的文件较大，设置环境变量 NODE_ENV 为 production 可以开启压缩，方便预览，但编译速度会下降。
2. 时间转换统一使用Day.js 官网地址：https://dayjs.fenxianglu.cn/
3. 小程序启动分包加载，主包：放置默认启动页面/TabBar 页面，所有分包需要用的公共资源，分包开发者根据模块划分，
  目前小程序分包大小限制：
    -  整个小程序所有分包大小不超过 20M
    -  单个分包/主包大小不能超过 2M
4. 使用小程序原生组件，需要先从 Taro 标准组件库 @tarojs/components 引用组件，例如使用View、Text，
  import { View, Text } from '@tarojs/components'
5. UI使用taro-ui https://taro-ui.jd.com/#/docs/customizetheme，例如：import { AtIcon } from 'taro-ui'
6. 设计稿及尺寸单位：单位建议使用px、百分比%，Taro 默认以 750px 作为换算尺寸标准，设计稿是750，1:1书写即可，如果设计稿不是以 750px 为标准，修改配置文件designWidth。
  注意****默认配置会对所有的 px 单位进行转换，有大写字母的 Px 或 PX 则会被忽略
