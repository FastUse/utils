# utils

业务场景工具库记录

## Docs

文档是借鉴 [antfu](https://github.com/antfu) 大佬的 [VueUse](https://github.com/vueuse/vueuse) 的方式来构建的。

## TODO

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
