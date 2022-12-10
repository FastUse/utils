# utils

业务场景工具库记录

## Docs

文档是借鉴 [antfu](https://github.com/antfu) 大佬的 [VueUse](https://github.com/vueuse/vueuse) 的方式来构建的。

## 三方依赖与参考

- [uni-app](https://github.com/dcloudio/uni-app) 使用 Vue.js 的跨平台框架
- [safeAreaInsets](https://github.com/zhetengbiji/safeAreaInsets) 使用 js 获取安全区域
- [ua-parser-js](https://github.com/faisalman/ua-parser-js) 从用户代理数据中检测浏览器、引擎、操作系统、CPU 和设备类型/型号
- [query-string](https://github.com/sindresorhus/query-string) 解析和字符串化 URL 查询字符串

## Utils

- url

  - [x] stringifyUrl - 字符串化 URL 参数

  - [x] parseUrl - 解析 URL 参数

  - [x] pickUrl - 选择保留 URL 参数

  - [x] excludeUrl - 移除 URL 参数

- browser
  - scroll
    - [x] getScrollTop - 获取滚动条的顶部距离
    - [x] setScrollTop - 设置滚动条的顶部距离
    - [x] scrollTopTo - 顺滑移动滚动条竖直方向位置
    - [x] scrollLeftTo - 顺滑移动滚动条横向位置
    - [x] scrollToLower - 滚动到底部触发

  - touch
    - [x] drag - 移动端拖拽事件
    - [x] pinch - 移动端缩放事件
    - [x] rotate - 移动换旋转事件

  - systemInfo
    - [x] getOs - 获取系统信息
    - [x] getDevice - 获取设备信息
    - [x] parserUa - 解析设备 user-agent
    - [x] getBrowser - 获取浏览器信息
