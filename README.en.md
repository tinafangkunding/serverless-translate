# Serverless Translate

Deploy a zero configuration Translate Tool via Serverless Framework's [Express Component](https://github.com/serverless-components/tencent-express/tree/v2). [Here is a Demo](https://service-q8qqunpf-1251971143.bj.apigw.tencentcs.com/release/)。 

<p align="center">
  <span>English</span> |
  <a href="./README.md">简体中文</a>
</p>

Serverless Components are simple abstractions that enable developers to deploy serverless applications and use-cases easily, via the [Serverless Framework](https://github.com/serverless/serverless).

<br/>

- [x] **Ease** - Deploy serverless infrastructure or entire serverless applications via Components.
- [x] **Instant Deployments** - Components deploy in 4-6 seconds.
- [x] **Build Your Own** - Components are easy to build.
- [x] **Registry** - Share your Components with you, your team, and the world, via the Serverless Registry.

<br/>

Quick Start:

1. [Install](#1-install)
2. [Create](#2-create)
3. [Configure](#3-configure)
4. [Deploy](#4-deploy)
5. [Monitoring](#5-monitoring)
6. [Remove](#6-remove)

- [Architecture](#architecture)
- [References](#References)

### 1. Install

Install the latest Serverless Framework via npm

```
$ npm install -g serverless
```

### 2. Create

Create an empty folder:

```
$ mkdir express-trans && cd express-trans
```

Clone the template:

```
$ serverless create --template-url https://github.com/tinafangkunding/serverless-translate
$ cd serverless-translate
```

Install dependencies in `src` folder:

```
$ cd src && npm install
```

### 3. Configure

Rename `.env.example` file to `.env`, add the access keys of a [Tencent CAM Role](https://console.cloud.tencent.com/cam/capi) with `AdministratorAccess` in the `.env` file, using this format:

```
# .env
TENCENT_SECRET_ID=123
TENCENT_SECRET_KEY=123
```

- If you don't have a Tencent Cloud account, you could [sign up](https://intl.cloud.tencent.com/register) first.

### 4. Deploy


Run `sls deploy` in the same folder with `serverless.yml`:

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

Visit the url from the output, then you can input and translate words into different languages!

### 5. Monitoring

Go to the [Serverless Dashboard](https://serverless.cloud.tencent.com/) to check the application level Monitoring Metrics for Express.js, currently the dashbaord can support the following metrics:

```
function invocations & errors
function latency
api requests & errors
api latency
api 5xx errors
api 4xx errors
api errors
api path requests
```

### 6. Remove

Run `sls deploy` in the same folder with `serverless.yml` to remove the whole project and related cloud resources.

```
$ serverless remove
```

> `sls` is short for `serverless`

### Architecture

This demo will use the following Tencent Cloud services, all the services are `serverless`:

- [x] **API Gateway** 
- [x] **Serverless Cloud Function**
- [x] **Cloud Access Management**
- [x] **Cloud Object Storage**
- [x] **Tencent Machine Translation**

### References

1. [Serverless Express Component Yaml Specifications](https://github.com/serverless-components/tencent-express/blob/v2/docs/configure.md)

2. [API Docs for the Translate Service](https://cloud.tencent.com/document/api/551/15619)

3. Changed from [tencent-serverless-demo](https://github.com/yugasun/tencent-serverless-demo/tree/master/dict) thanks for yugasun's help!
