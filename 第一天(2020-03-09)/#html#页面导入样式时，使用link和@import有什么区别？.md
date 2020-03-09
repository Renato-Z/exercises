# 页面导入样式时，使用 link 和@import 有什么区别？

**区别一**：`link`是`XHTMl`标签，出了可以加载 CSS 外，还可以用于定义 RSS，定义 rel 连接属性等作用；而`@import`是`CSS`提供的，只能用于加载 CSS；

**区别二**：link 引入 CSS 时，在页面加载时同时加载，@import 需要页面完全载入后加载；

**区别三**：link 是 XHTML 标签，没有兼容问题；@import 是 CSS2.1 提出的，低版本（IE5 以下）
的浏览器不支持

**区别四**：link 支持使用 DOM API 去操作，而@import 不可以

> ## link 标签的使用

MDN:https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link

> ## @import 使用

- html 中使用

```html
<style>
  @import url(css/style.css);
</style>
```

- css 文件中使用

```css
@import url(css/style.css);
```
