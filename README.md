![](https://img.shields.io/bundlephobia/min/@singcl/iconfont-cn)
## 支持 Vue2.x 使用自定义 iconfont 项目

```js
import Icon from "@singcl/iconfont-cn";

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_1643719_bh60dvbkfv.js"],
});
Vue.component("my-icon", MyIcon);
```
