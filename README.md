[![Build Status](https://app.travis-ci.com/singcl/iconfont-cn.svg?branch=master)](https://app.travis-ci.com/singcl/iconfont-cn)
[![install size](https://packagephobia.com/badge?p=@singcl/iconfont-cn)](https://packagephobia.com/result?p=@singcl/iconfont-cn)
[![](https://img.shields.io/bundlephobia/min/@singcl/iconfont-cn)](https://www.npmjs.com/package/@singcl/iconfont-cn)
[![](https://img.shields.io/npm/v/@singcl/iconfont-cn)](https://www.npmjs.com/package/@singcl/iconfont-cn)

## @singcl/iconfont-cn

在`vue2.x`项目中可以使用自定义的 iconfont 图标库。

### Motivation

业务需要自定义一批 ICON 在多个系统间共用，多个系统有的是 React 开发的，有的时候 Vue 开发的。React 可以直接使用@antd/icons; 而 Vue2.x 的项目大多没有多没有引入 antd UI，基于此，我从[ant-design-vue](https://github.com/vueComponent/ant-design-vue/)单独提取出`createFromIconfontCN`这个功能组件。

### 使用简介

#### 1. 安装

```
npm i @singcl/iconfont-cn -S
```

#### 2. API

| 参数      | 说明                                                                                | 类型                                      | 默认值       |
| --------- | ----------------------------------------------------------------------------------- | ----------------------------------------- | ------------ |
| type      | 图标类型。遵循图标的命名规范                                                        | `string`                                  | -            |
| style     | 设置图标的样式，例如 `fontSize` 和 `color`                                          | `CSSProperties`                           | -            |
| theme     | 图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标 `'filled', 'outlined'` | `'filled', 'outlined'`                    | `'outlined'` |
| spin      | 是否有旋转动画                                                                      | `boolean`                                 | `false`      |
| rotate    | 图标旋转角度（1.4.0 后新增，IE9 无效）                                              | `number`                                  | -            |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `svg` 的 Vue 组件，会使 type 属性失效      | `ComponentType<CustomIconComponentProps>` | -            |

#### 3. 使用

```js
import Icon from "@singcl/iconfont-cn";

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_1643719_bh60dvbkfv.js"],
});
Vue.component("my-icon", MyIcon);
```

```jsx
<my-icon type="iconnew1" style="font-size: 30px"></my-icon>
```

当然 UMD 模式也是支持的，`examples`中的示例就是浏览器直接使用。

![](https://img.shields.io/github/package-json/v/singcl/iconfont-cn)
