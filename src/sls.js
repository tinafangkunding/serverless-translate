const express = require('express')
const { Capi } = require('@tencent-sdk/capi')
const path = require('path')
const app = express()

const secretId = process.env.SID
const secretKey = process.env.SKEY

  // Routes
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

  app.get('/:target/:sourceText', async (req, res) => {
    
    const sourceText = req.params.sourceText
    const target = req.params.target

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
        SourceText: sourceText,
        Source: 'auto',
        Target: target,
        ProjectId: 0,
      },
      {
        host: 'tmt.tencentcloudapi.com',
      },
    )

    res.send( `Your Translation Result : `+ sourceText + ` ---> ` + resq.Response.TargetText)
  })

  app.listen(8080)

  module.exports = app