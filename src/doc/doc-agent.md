---
contributors:
- 'ZhouYixun'
- 'ArryListY'
- 'shinyvince'
---

# Agent中心

对Agent进行管理。

::: tip 
Agent部署有疑问？可前往 [Agent端部署文档](https://soniccloudorg.github.io/deploy/agent-deploy.html) 查看哦~
:::

## 新增Agent

1. 点击【新增Agent】。
2. 输入Agent名称。
3. 设置高温值，拖动进度条或在右方输入温度值进行设置(可选，默认值为45℃)。
4. 设置高温超时，输入超时时间进行设置(可选，默认值为15min)。
5. 设置机器人类型，目前可选择钉钉、企业微信和飞书机器人(可选)。
6. 设置WebHook，选择对应机器人类型后复制该机器人webhook并粘贴到输入框中(可选)。
7. 设置Secret，输入群机器人的密钥(可选)。
8. 点击【确定】，Agent创建成功。

::: tip 注意
当机器人设置参数错误时，不会发送告警，请确保设置参数正确。
:::

## 复制Agent Key

获取Agent的Key用作Agent端部署使用。

1. 在Agent列表中，选择对应新增的Agent。
2. 点击【点击复制】按钮

## 编辑Agent

1. 点击【编辑】，对Agent信息进行修改。
2. 输入Agent名称，修改当前Agent名称。
3. 编辑高温值，拖动进度条或在右方输入温度值进行设置。
4. 编辑高温超时，输入超时时间进行设置。
5. 编辑机器人类型，目前可选择钉钉、企业微信和飞书机器人。
6. 编辑WebHook，选择对应机器人类型后复制该机器人webhook并粘贴到输入框中。
7. 编辑Secret，输入群机器人的密钥。
8. 点击【确定】，Agent编辑成功。

## 查看Agent

1. 在Agent列表中可查看已创建Agent的基础信息，包括Agent名称、host、port、运行系统、运行版本及状态。
2. 点击【自动刷新】按钮，开启/关闭自动刷新Agent状态。

## 终止Agent

远程停止Agent服务。

1. 在Agent列表找到对应的Agent。
2. 点击【终止运行】按钮，终止运行当前Agent。Agent状态将变更为 [离线] 状态。

::: warning 注意
当Agent为 [在线] 状态时，才可以被终止运行。
:::

## 常见问题（Q&A）

Q1: 为什么Agent接入后，仍然显示离线？

A1: 刚连上需要手动刷新页面或打开【自动刷新】，如果一直没连上，需要查看Agent日志排查，要检查好填写的Server IP与Agent Key。

---

Q2: 感觉远控设备卡顿，或者装包时间过长？

A2: 针对这个问题可以看以下两点：
1. 建议 Agent 优先使用有线网络环境而不是无线网络。
2. 检查设备连接的数据线是否完好，建议使用USB3.0数据线或官方硬件方案的数据线。

---

Q3: Mac上启动会有sonic-android-supply或其他插件安全弹窗？

A3: Mac：系统偏好设置 -> 安全性与隐私 -> 通用，点击信任或仍要打开。

---
::: tip
更多疑问可前往 👉[社区](https://discord.gg/c9ZD6jSyTE)👈 交流
:::

