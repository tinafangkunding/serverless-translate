const express = require('express')
const { Capi } = require('@tencent-sdk/capi')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const secretId = process.env.SID
const secretKey = process.env.SKEY

var urlencodedParser = bodyParser.urlencoded({ extended: false })
  // Routes
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

  app.post('/process', urlencodedParser, async (req, res) => {
    // 输出 JSON 格式
    var response = {
        "target":req.body.target,
        "words":req.body.words
    };
    const client = new Capi({
      Region: 'ap-beijing',
      SecretId: secretId,
      SecretKey: secretKey,
      ServiceType: 'tmt',
      host: 'tmt.tencentcloudapi.com',
    })

    const resq = await client.request(
      {
        Action: 'TextTranslate',
        Version: '2018-03-21',
        SourceText: req.body.words,
        Source: 'auto',
        Target: req.body.target,
        ProjectId: 0,
      },
      {
        host: 'tmt.tencentcloudapi.com',
      },
    )
    res.send( `Your Translation Result : `+ req.body.words + ` ---> ` + resq.Response.TargetText)
  })

  app.listen(8080)

  module.exports = app