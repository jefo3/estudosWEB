const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
  const valores = req.body
  
  return res.status(200).json(valores)
})

app.listen(3003, () => {
  console.log('started')
})