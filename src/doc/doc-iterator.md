---
contributors:
- 'ZhouYixun'
---

# 迭代控件列表

迭代控件的子列表控件。（该功能需升级至Sonic v2.2.0版本）

## 功能介绍

在Sonic进行UI自动化的时候，如果需要对列表类型控件操作，就会非常头疼，除非使用自定义脚本，不然的话需要一个个控件添加进行操作。

![iter-1](./images/iter-1.png)

但是如果使用【迭代控件列表】功能，就可以实现只需添加一个列表控件，就能不停迭代列表中的每个子控件进行操作。

## 使用方法

1. 先找到控件列表的父控件，快捷复制父控件的xpath，然后在xpath结尾加上子控件的className，那么最终xpath搜出来的结果就是整个控件列表。

![iter-2](./images/iter-2.png)

::: tip 注意
当然，不仅仅xpath，如果resource-id能定位到多个同resource-id的控件，一样有效。

其他定位方式同理。
:::

2. 添加【迭代控件列表】步骤，选择刚刚新增的控件

![iter-3](./images/iter-3.png)

3. 子步骤中选择要操作的迭代控件，图中的【当前迭代控件】就是列表中的每个子控件

![iter-4](./images/iter-4.png)

4. 运行，你会发现列表中每个控件都会执行所有子步骤

![iter-5](./images/iter-5.png)

## 适用控件

当前功能适用范围如下

1. 安卓原生控件
2. iOS原生控件
3. POCO控件

Web控件我们正努力适配中...




