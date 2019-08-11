const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
app.listen(9093, function () {
    console.log('lican')
})


// 类似于MySQL的表 mongo里有文档 字段的概念
// const User = mongoose.model('user', new mongoose.Schema({
//     user: {type: String, require: true},
//     age: {type: Number, require: true}
// }))
