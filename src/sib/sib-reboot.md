---
contributors:
- 'ZhouYixun'
---

# 重启或关机

重启或关机您的设备。

## 马上重启
输入指令
```bash
sib reboot -u 0000****-001****6F****E
```

## 马上关机
输入指令
```bash
sib reboot -s -u 0000****-001****6F****E
``` 

## 可用选项

| 快捷使用 | 选项名        | 数据类型   | 描述信息                      |
|------|------------|--------|---------------------------|
| -u   | --udid     | string | 指定目标udid设备，不指定默认获取列表第一个设备 |
| -s   | --shutdown |        | 关机                        |
| -h   | --help     |        | 获取帮助指南                    |

