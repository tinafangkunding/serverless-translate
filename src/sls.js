const express = require('express')
const { Capi } = require('tss-capi')
const path = require('path')
const app = express()

const secretId = process.env.SID
const secretKey = process.env.SKEY

  // Routes

  app.get('/:sourceText', async (req, res) => {
    
    const sourceText = req.params.sourceText

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
        Target: 'zh',
        ProjectId: 0,
      },
      {
        host: 'tmt.tencentcloudapi.com',
      },
    )

    res.send( `Your Translation Result : `+ sourceText + ` --- ` + resq.Response.TargetText)
  })

  app.listen(8080)

  module.exports = app