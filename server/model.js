const mongoose = require('mongoose')
// 链接 Mongo
const DB_URL = 'mongodb://127.0.0.1:27017/my-app'
mongoose.connect(DB_URL)

/*
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})*/
