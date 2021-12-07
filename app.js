const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser())

app.post('/', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
