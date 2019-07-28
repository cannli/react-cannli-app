const express = require('express')
const mongoose = require('mongoose')

// 链接 Mongo
const DB_URL = 'mongodb://127.0.0.1:27017/my-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})

// 类似于MySQL的表 mongo里有文档 字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))

// 新增数据
// User.create({
//     user: 'lican',
//     age: 188
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })
// 删除
// User.remove({age: 18}, (err,doc) => {
//     console.log(doc)
// })
// 修改
User.update({user: 'lican'}, {'$set': {age: 23}}, (err, doc) => {
    console.log(doc)
})
const app = express()
app.get('/', function (rep, res) {
    User.find({}, function (err, doc) {
        res.json(doc)
    })
})

app.get('/data', (req, res) => {
    User.find({age: 23}, (err, doc) => {
        res.json(doc)
    })
})

app.listen(9093, function () {
    console.log('lican')
})
