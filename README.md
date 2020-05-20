# Serverless 文本翻译工具 

通过 Serverless Framework 的 [Express Component](https://github.com/serverless-components/tencent-express/tree/v2) 实现的文本翻译工具。基于腾讯云 TMT 机器翻译工具，支持多种语言的互相翻译。

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
3. [**部署**](#3-部署)
4. [**监控**](#4-监控)
5. [**移除**](#5-移除)

更多资源：

- [**架构说明**](#架构说明)
- [**账号配置**](#账号配置)
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

通过如下命令和模板链接，快速创建一个 express 应用：

```
$ serverless create --template-url https://github.com/tinafangkunding/serverless-translate
$ cd serverless-translate
```

执行如下命令，安装 express 应用的对应依赖

```
$ cd src && npm install
```

安装完毕后，目录结构如下所示：

### 3. 部署


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

部署完毕后，你可以在命令行的输出中查看到该应用的 URL 地址，在地址后缀增加希望查询的英文单词，访问地址即可查看翻译结果。

例如： https://service-xxxxx-1250000000.bj.apigw.tencentcs.com/release/serverless

翻译结果：无服务器

**注意：**

如您的账号未[登陆](https://cloud.tencent.com/login)或[注册](https://cloud.tencent.com/register)腾讯云，您可以直接通过`微信`扫描命令行中的二维码进行授权登陆和注册。

### 4. 监控

在 [Serverless Dashboard](https://serverless.cloud.tencent.com/) 中查看应用级别的监控信息。包括函数触发次数、API 错误次数等指标。

### 5. 移除

在`serverless.yml`文件所在的目录下，通过以下命令移除部署的 Express 服务。移除后该组件会对应删除云上部署时所创建的所有相关资源。

```
$ serverless remove
```

和部署类似，支持通过 `sls remove --debug` 命令查看移除过程中的实时日志信息，`sls`是 `serverless` 命令的缩写。

## 架构说明

本示例将在腾讯云账户中使用到如下 Serverless 服务：

- [x] **API 网关** - API 网关将会接收外部请求并且转发到 SCF 云函数中。
- [x] **SCF 云函数** - 云函数将承载 Express.js 应用。
- [x] **CAM 访问控制** - 该组件会创建默认 CAM 角色用于授权访问关联资源。
- [x] **COS 对象存储** - 为确保上传速度和质量，云函数压缩并上传代码时，会默认将代码包存储在特定命名的 COS 桶中。
- [x] **TMT 机器翻译** - 调用机器翻译的 SDK 实现翻译能力。

## 账号配置

当前默认支持 CLI 扫描二维码登录，如您希望配置持久的环境变量/秘钥信息，也可以创建 `.env` 文件，或修改模板中的 `.env.example` 内容。

```console
$ touch .env # 腾讯云的配置信息
```

在 `.env` 文件中配置腾讯云的 SecretId 和 SecretKey 信息并保存

如果没有腾讯云账号，可以在此[注册新账号](https://cloud.tencent.com/register)。

如果已有腾讯云账号，可以在[API 密钥管理](https://console.cloud.tencent.com/cam/capi)中获取 `SecretId` 和`SecretKey`.

```
# .env
TENCENT_SECRET_ID=123
TENCENT_SECRET_KEY=123
```
## 参考资料

1. [Serverless Express Component 全量配置](https://github.com/serverless-components/tencent-express/blob/v2/docs/configure.md)

2. [机器翻译接口文档](https://cloud.tencent.com/document/api/551/15619)

3. 本 demo 改自 [tencent-serverless-demo](https://github.com/yugasun/tencent-serverless-demo/tree/master/dict)，感谢原作者 yugasun
