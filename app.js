const port=process.env.PORT || 3001
const express = require('express')
const app = express()
const QRCode = require('qrcode')
 
app.get('/sourceURL=:sourceURL&width=:width&height=:height', function (req, res) {
    var QRoptions= {
        errorCorrectionLevel : 'H',
        type : 'image/jpeg',
        quality: 0.3, 
        margin: 1,
        color: {
            dark:"#010599FF",
            light:"#FFBF60FF"
          },
          width : req.params.width,
          height : req.params.height
    }
    QRCode.toDataURL(req.params.sourceURL,QRoptions, function (err, url) {
        res.send(url.split(',')[1]);
    })
})
 
app.listen(port)
