const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index.js'))

const port = process.env.PORT || require('esizluuid')(4, '123456789')
app.listen(port, () => console.log(port))