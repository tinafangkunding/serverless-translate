# Serverless 文本翻译工具 

<br/>

通过 Serverless Framework 的 [Express Component](https://github.com/serverless-components/tencent-express/tree/v2) 实现的文本翻译工具。基于腾讯云 TMT 机器翻译工具，支持多种语言的互相翻译。[点此查看 Demo 部署效果](https://service-q8qqunpf-1251971143.bj.apigw.tencentcs.com/release/)。 

<p align="center">
  <span>简体中文</span> |
  <a href="./README.en.md">English</a>
</p>

特性：

- [x] **开箱即用** - 只需要关心项目代码，一键部署后 Serverless Framework 会完成所有配置。
- [x] **极速部署** - 仅需 5-6 秒，部署整个 Serverless 应用。
- [x] **实时日志** - 通过实时日志的输出查看业务状态，便于直接在云端开发应用。
- [x] **云端调试** - 针对 Node.js 框架支持一键云端调试能力，屏蔽本地环境的差异。
- [x] **应用监控** - 提供应用级别的监控页面，“0”配置即可实现业务监控能力。
- [x] **按需付费** - 按照请求的使用量进行收费，没有请求时无需付费。并且本用例中使用到的产品均有免费额度。

<br/>

快速开始：

1. [**安装**](#1-安装)
2. [**创建**](#2-创建)
3. [**配置**](#3-配置)
4. [**部署**](#4-部署)
5. [**监控**](#5-监控)
6. [**移除**](#6-移除)

更多资源：

- [**架构说明**](#架构说明)
- [**参考资料**](#参考资料)

### 1. 安装

通过 npm 安装最新版本的 Serverless Framework

```
$ npm install -g serverless
```

### 2. 创建

创建并进入一个全新目录：

```
$ mkdir express-trans && cd express-trans
```

通过如下命令和模板链接，快速创建该应用：

```
$ serverless create --template-url https://github.com/tinafangkunding/serverless-translate
$ cd serverless-translate
```

进入 `src` 目录，执行如下命令，安装对应依赖

```
$ cd src && npm install
```

### 3. 配置

修改模板中的 `.env.example` 为 `.env`，并在[API 密钥管理](https://console.cloud.tencent.com/cam/capi)中获取并配置腾讯云的 `SecretId` 和`SecretKey`秘钥信息。

```
# .env
TENCENT_SECRET_ID=123
TENCENT_SECRET_KEY=123
```

> 您可以 [登陆](https://cloud.tencent.com/login)或[注册](https://cloud.tencent.com/register)腾讯云账号。

### 4. 部署


在 `serverless.yml` 文件下的目录中运行如下命令部署应用

```
$ serverless deploy

Please scan QR code login from wechat. 
Wait login...
Login successful for TencentCloud. 

serverless ⚡ framework
Action: "deploy" - Stage: "dev" - App: "appDemo" - Instance: "TranslateDemo"

region: ap-beijing
apigw: 
  serviceId:   service-xxxxx
  subDomain:   service-xxxxx-1250000000.bj.apigw.tencentcs.com
  environment: release
  url:         https://service-xxxxx-1250000000.bj.apigw.tencentcs.com/release/
scf: 
  functionName: express_component_xxxx
  runtime:      Nodejs10.15
  namespace:    default

10s › TranslateDemo › Success
```

部署完毕后，你可以在命令行的输出中查看到该应用的 URL 地址，访问地址即可查看部署结果。支持的翻译语言类型参考[接口文档](https://cloud.tencent.com/document/api/551/15619)。

> 例如： https://service-q8qqunpf-1251971143.bj.apigw.tencentcs.com/release/  输入 `serverless` 并且将其翻译为 `zh` 简体中文，输入语言是自动监测的。
> 翻译结果：无服务器

### 5. 监控

在 [Serverless Dashboard](https://serverless.cloud.tencent.com/) 中查看应用级别的监控信息。当前支持展示如下监控指标：

```
函数触发次数/错误次数：function invocations & errors
函数延迟：function latency
API 请求次数/错误次数：api requests & errors
API 请求延迟：api latency
API 5xx 错误次数：api 5xx errors
API 4xx 错误次数：api 4xx errors
API 错误次数统计：api errors
不同路径下 API 的请求方法、请求次数和平均延迟统计：api path requests
```

### 6. 移除

在`serverless.yml`文件所在的目录下，通过以下命令移除部署的 Express 服务。移除后该组件会对应删除云上部署时所创建的所有相关资源。

```
$ serverless remove
```

> 注：`sls`是 `serverless` 命令的缩写。

### 架构说明

本示例将在腾讯云账户中使用到如下 Serverless 服务：

- [x] **API 网关** - API 网关将会接收外部请求并且转发到 SCF 云函数中。
- [x] **SCF 云函数** - 云函数用于承载 Express.js 应用。
- [x] **CAM 访问控制** - 该组件会创建默认 CAM 角色用于授权访问关联资源。
- [x] **COS 对象存储** - 为确保上传速度和质量，云函数压缩并上传代码时，会默认将代码包存储在特定命名的 COS 桶中。
- [x] **TMT 机器翻译** - 调用机器翻译的 SDK 实现翻译能力，提供免费额度。

### 参考资料

1. [Serverless Express Component 全量配置](https://github.com/serverless-components/tencent-express/blob/v2/docs/configure.md)

2. [机器翻译接口文档](https://cloud.tencent.com/document/api/551/15619)

3. 本 demo 改自 [tencent-serverless-demo](https://github.com/yugasun/tencent-serverless-demo/tree/master/dict)，感谢原作者 yugasun
