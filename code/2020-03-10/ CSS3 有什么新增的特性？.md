# 一、CSS3 边框(border)

1. `border-radius`;
2. `box-shadow`;
3. `border-image`

# 二、CSS3 背景(background)

1. `background-size`：背景大小
2. `background-origin`：背景放置的位置（`content-box` `padding-box` `border-box`）
3. `background-clip`：背景颜色的绘制区域
4. `background-image`：背景图片（多重背景图片）

# 三、CSS3 文本效果(text-shadow)

1. `text-shadow`：给为本添加阴影，能够设置水平阴影、垂直阴影、模糊距离，以及阴影的颜色。
2. `text-warp`：设置区域内的自动换行。

# 四、CSS3 字体

> 在 CSS3 之前，web 设计师必须使用已在用户计算机上安装好的字体。但是通过 CSS3，web 设计师可以使用他们喜欢的任意字体

```css
/* 定义字体 */
@font-face {
  font-family: myFont;
  src: url("Sansation_Light.ttf"), url("Sansation_Light.eot"); /* IE9+ */
}

div {
  font-family: myFont;
}
```

# 五、CSS3 2D 转换

2D Transform 方法汇总

| 函数                  |                   描述                   |
| --------------------- | :--------------------------------------: |
| matrix(n,n,n,n,n,n)   |      定义 2D 转换，使用六个值的矩阵      |
| translate(x,y)        |  定义 2D 转换，沿着 X 和 Y 轴移动元素。  |
| translateX(n)         |    定义 2D 转换，沿着 X 轴移动元素。     |
| translateY(n)         |    定义 2D 转换，沿着 Y 轴移动元素。     |
| scale(x,y)            | 定义 2D 缩放转换，改变元素的宽度和高度。 |
| scaleX(x,y)           |     定义 2D 缩放转换，改变元素的宽度     |
| scaleY(x,y)           |     定义 2D 缩放转换，改变元素的高度     |
| rotate(angle)         |     定义 2D 旋转，在参数中规定角度。     |
| skew(x-angle,y-angle) |    定义 2D 倾斜转换，沿着 X 和 Y 轴。    |
| skewX(angle)          |      定义 2D 倾斜转换，沿着 X 轴。       |
| skewY(angle)          |      定义 2D 倾斜转换，沿着 Y 轴。       |

# 六、CSS3 3D 转换

CSS3 允许使用 3D 转换来对元素进行格式化

1.`rotateX()` 1.`rotateY()`

# 七、CSS3 过渡

> 通过 CSS3 可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果

要实现这一点，必须规定以下两项内容：

- 设置添加过渡效果的 CSS 属性；
- 设置过渡效果的时长；

| 属性                       |                     描述                     |
| -------------------------- | :------------------------------------------: |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。 |
| transition-property        |       规定应用过渡的 CSS 属性的名称。        |
| transition-duration        |      定义过渡效果花费的时间。默认是 0。      |
| transition-timing-function |   规定过渡效果的时间曲线。默认是 "ease"。    |
| transition-delay           |       规定过渡效果何时开始。默认是 0。       |

# 八、CSS3 动画

| 属性                      |                           描述                           |
| ------------------------- | :------------------------------------------------------: |
| @keyframes                |                        规定动画。                        |
| animation                 | 所有动画属性的简写属性，除了 animation-play-state 属性。 |
| animation-name            |               规定 @keyframes 动画的名称。               |
| animation-duration        |     规定动画完成一个周期所花费的秒或毫秒。默认是 0。     |
| animation-timing-function |           规定动画的速度曲线。默认是 "ease"。            |
| animation-delay           |               规定动画何时开始。默认是 0。               |
| animation-iteration-count |             规定动画被播放的次数。默认是 1。             |
| animation-direction       |   规定动画是否在下一周期逆向地播放。默认是 "normal"。    |
| animation-play-state      |      规定动画是否正在运行或暂停。默认是 "running"。      |
| animation-fill-mode       |               规定对象动画时间之外的状态。               |

# 九、CSS3 多列

通过 CSS3 够创建多个列来对文本进行布局，就像我们经常看到的报纸的布局一样。

| 属性              |                   描述                   |
| ----------------- | :--------------------------------------: |
| column-count      |        规定元素应该被分隔的列数。        |
| column-fill       |             规定如何填充列。             |
| column-gap        |            规定列之间的间隔。            |
| column-rule       | 设置所有 column-rule-\* 属性的简写属性。 |
| column-rule-width |          规定列之间规则的宽度。          |
| column-rule-style |          规定列之间规则的样式。          |
| column-rule-color |          规定列之间规则的颜色。          |
| column-span       |         规定元素应该横跨的列数。         |
| column-width      |              规定列的宽度。              |
| columns           |    语法 : column-width column-count。    |

# 十、CSS3 新增选择器

| 属性          |                                                      描述                                                       |
| ------------- | :-------------------------------------------------------------------------------------------------------------: |
| E[foo^="bar"] | 选择匹配 E 的元素，且该元素定义了 foo 属性，foo 属性值以“bar”开始。E 选择符可以省略，表示可匹配任意类型的元素。 |
| E[foo$="bar"] | 选择匹配 E 的元素，且该元素定义了 foo 属性，foo 属性值以“bar”结束。E 选择符可以省略，表示可匹配任意类型的元素。 |
| E[foo*="bar"] |  选择匹配 E 的元素，且该元素定义了 foo 属性，foo 属性值包含“bar”。E 选择符可以省略，表示可匹配任意类型的元素。  |

https://www.w3school.com.cn/css3/index.asp
