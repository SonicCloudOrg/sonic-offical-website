---
contributors:
  - 'ZhouYixun'
  - 'soniclei'
---

# 前后端部署

本文将介绍如何部署 Sonic 的 Server 端与 Client 端。

## 快速部署

该方式将一次性部署前后端。

准备工作：docker-compose、Docker、MySQL

1. 创建一个MySQL数据库，数据库名可自定义，注意字符集为 utf8，排序规则为 utf8_general_ci。如果你想MySQL随着Sonic一同启动（不推荐），可以参考本页下方`在docker-compose.yml中内置MySQL`的内容。
2. [点击这里](https://ghproxy.com/https://github.com/SonicCloudOrg/sonic-server/releases/download/v2.6.3/sonic-server-v2.6.3.zip) 下载最新版本的 **zip** 文件到任意目录（如加速链接失效，请自行前往 <a href="https://github.com/SonicCloudOrg/sonic-server/releases" target="_black">这里</a> 下载）。
3. 解压 zip，更改.env 中的信息。（无需改动 docker-compose.yml 文件。env 配置项内容可查看下方表格。如果您的系统没显示.env，在本页最下方【常见问题】查看解决方案）
4. 当前目录下执行以下指令

```bash
docker-compose up -d
```
::: tip 如果您为中国大陆用户，出现访问DockerHub较慢的情况，可以从以下两点选择一个进行操作：
- 配置国内加速镜像源（推荐）
- 执行以下指令直接使用加速镜像（不推荐，加速源可能出现不稳定或网络波动，后续down的时候需要docker-compose -f docker-compose-zh.yml down）
```bash
docker-compose -f docker-compose-zh.yml up -d
```
:::
5. 前后端部署完毕！（因 Eureka 心跳机制，刚启动完毕微服务间互相访问需要 3~5 分钟，请耐心等候）打开浏览器访问 [http://localhost:3000](http://localhost:3000)，然后可 **直接前往** Agent 端部署。
6. （附）如果您是经验丰富的运维人员，也可以前往 Eureka 页面查看各微服务状态。

## .env 配置项解释

| 字段名                    | 解释                                                               | 示例                       |
|------------------------|------------------------------------------------------------------|--------------------------|
| SONIC_SERVER_HOST      | 部署 sonic-server 机器的 ipv4 地址，不能使用 localhost、127.0.0.1。**可以使用域名。** | 192.168.0.1              |
| SONIC_SERVER_PORT      | 整个服务端对外暴露端口，默认 3000。**可以使用 80**                                  | 3000                     |
| SONIC_EUREKA_USERNAME  | Eureka 的用户名（为提高安全性，不建议使用默认值，可以更改为其他任意字符串，不能含`@`和`%`）             | sonic                    |
| SONIC_EUREKA_PASSWORD  | Eureka 的密码（为提高安全性，不建议使用默认值，可以更改为其他任意字符串，不能含`@`和`%`）              | sonic                    |
| SONIC_EUREKA_PORT      | Eureka 启动端口（一般不需要改动）                                             | 9090                     |
| MYSQL_HOST             | MySQL 服务的 host，不能使用 localhost、127.0.0.1.                         | 192.168.0.1              |
| MYSQL_PORT             | MySQL 服务的端口（一般默认为 3306）                                          | 3306                     |
| MYSQL_DATABASE         | Sonic 服务要用到的数据库                                                  | sonic                    |
| MYSQL_USERNAME         | MySQL 数据库用户名                                                     | root                     |
| MYSQL_PASSWORD         | MySQL 数据库密码                                                      | Sonic!@#123              |
| SECRET_KEY             | token 加密密钥（为提高安全性，不建议使用默认值，可以更改为其他任意字符串）                         | sonic                    |
| EXPIRE_DAY             | token 有效天数                                                       | 14                       |
| PERMISSION_ENABLE      | 是否开启权限配置                                                         | true                     |
| PERMISSION_SUPER_ADMIN | 超管用户名                                                            | sonic                    |
| REGISTER_ENABLE        | 是否开启用户注册                                                         | true                     |
| NORMAL_USER_ENABLE     | 是否开启普通用户登录                                                       | true                     |
| LDAP_USER_ENABLE       | 是否开启 LDAP 用户登录                                                   | true                     |
| LDAP_USER_ID           | LDAP user id 搜索字段                                                | cn                       |
| LDAP_BASE_DN           | LDAP user 搜索用户组                                                  | users                    |
| LDAP_BASE              | LDAP Base DN                                                     | ou=system                |
| LDAP_USERNAME          | LDAP Base DN 管理员用户名                                              | uid=admin,ou=system      |
| LDAP_PASSWORD          | LDAP Base DN 管理员密码                                               | Sonic!@#123              |
| LDAP_URL               | LDAP 服务 URL                                                      | ldap://192.168.0.1:10389 |
| LDAP_OBJECT_CLASS      | LDAP 筛选 class，默认为 person                                         | person                   |

## 使用自己的 Eureka

如果您自己有 Eureka 服务，可以查看本小节。

1. 将 **docker-compose.yml** 文件去掉 Eureka 服务。
2. 将 **docker-compose.yml** 的 SONIC_EUREKA_HOST 填写为自己 Eureka 服务的 host。
3. 将.env 中的配置修改为自己 Eureka 服务的信息。
4. 完成！

## 在docker-compose.yml中内置MySQL（不推荐）

因Docker挂载时如果出现操作不当或数据迁移时的风险会引起MySQL容易数据丢失，因此docker-compose.yml默认没有附带MySQL镜像。

::: warning 警告
该方式不一定兼容所有Docker版本与Linux系统与Mysql版本，操作前应当备份当前数据。而且更新时会导致MySQL容器停止与删除，因此推荐MySQL单独部署或使用已有MySQL服务。
:::

如果想MySQL随着sonic一同启动，你可以进行如下操作：

1. 当前目录下创建`mysql`文件夹
```shell
mkdir -p mysql/log mysql/data mysql/conf
```
2. 将.env中的`MYSQL_HOST`改为`sonic-mysql`
3. 在docker-compose.yml中加入以下 **注释部分** 的内容
```
version: '3'
services:
  sonic-server-eureka:
  .
  .
  .
  .
  .
  sonic-client-web:
    image: "sonicorg/sonic-client-web:SONIC_VERSION"
    environment:
      - SONIC_SERVER_HOST
      - SONIC_SERVER_PORT
    networks:
      - sonic-network
    depends_on:
      - sonic-server-gateway
    restart: on-failure
    ports:
      - "${SONIC_SERVER_PORT}:80"
# ==== MySQL ====
  sonic-mysql:
    image: "mysql:5.7"
    hostname: sonic-mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
    environment:
      - MYSQL_ROOT_PASSWORD=${MYSQL_PASSWORD}
      - MYSQL_DATABASE
    volumes:
      - ./mysql/log:/var/log/mysql
      - ./mysql/data:/var/lib/mysql
      - ./mysql/conf:/etc/mysql
    ports:
      - "3306:3306"
    networks:
      - sonic-network      
# ==== End ====

networks:
  sonic-network:
    driver: bridge
```
4. 执行 `docker-compose up -d` 即可。

## 常见问题（Q&A）

Q1: 浏览器访问前端无误，但是注册时出现【系统出错了】或【发生未知异常】。

A1: 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/35-sonic)

---

Q2: 查看日志发现是 MySQL 没有连上，该怎么解决？

A2: 主要分为多种情况:

- MySQL 没有开启远程访问权限。
- 因为采用 Docker 容器部署，127.0.0.1 或 localhost 这种 ip 地址是无效的。
- 公司网络限制等等特殊情况。

解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/33-mysql)。

---

Q3: 目前文件挂载在 Docker 默认目录，怎样才能挂载到自定义的文件目录呢？

A3: 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/120-sonic)。

---

Q4: Mac 系统解压后没看到.env 文件，怎么解决呢？

A4: 解决方案可参考 [这个帖子](https://sonic-cloud.wiki/d/707-mac)

---

Q5: Linux 系统解压后没看到.env 文件，怎么解决呢？

A5: 可以使用 ls -a 指令查看隐藏文件

---

::: tip
更多疑问可前往 👉[社区](https://sonic-cloud.wiki)👈 交流
:::
