# nodejs-socket-chat-demo
### 安装

``` shell
$ npm install
```

### 配置

```shell
# 可修改 server.js 端口
```

### 运行

```shell
$ node server.js
或
$ npm run serve
```

### 备注

```shell
# 1、修改 index.html 对应 socket 连接地址和端口;

# 2、index.html 为独立文件，需配合 nginx 或 apache 测试访问；
## 如：http://localhost/index.html

# 3、可通过访问地址带参数区分房间号，可修改 server.js 房间识别方式。
## 如：http://localhost/index.html?room=1
```
