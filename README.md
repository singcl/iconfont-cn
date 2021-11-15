[![install size](https://packagephobia.com/badge?p=@singcl/iconfont-cn)](https://packagephobia.com/result?p=@singcl/iconfont-cn)
[![](https://img.shields.io/bundlephobia/min/@singcl/iconfont-cn)](https://www.npmjs.com/package/@singcl/iconfont-cn)
[![](https://img.shields.io/npm/v/@singcl/iconfont-cn)](https://www.npmjs.com/package/@singcl/iconfont-cn)
![](https://img.shields.io/github/package-json/v/singcl/iconfont-cn)

## @singcl/iconfont-cn

在`vue2.x`项目中可以使用自定义的 iconfont 图标库。

### Motivation

业务需要自定义一批 ICON 在多个系统间共用，多个系统有的是 React 开发的，有的时候 Vue 开发的。React 可以直接使用@antd/icons; 而 Vue2.x 的项目大多没有多没有引入 antd UI，基于此，我从[ant-design-vue](https://github.com/vueComponent/ant-design-vue/)单独提取出`createFromIconfontCN`这个功能组件。

### 使用简介

#### 1. 安装

```
npm i @singcl/iconfont-cn
```

#### 2. 使用

```js
import Icon from "@singcl/iconfont-cn";

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_1643719_bh60dvbkfv.js"],
});
Vue.component("my-icon", MyIcon);
```

当然UMD模式也是支持的，`examples`中的示例就是浏览器直接使用。