const mongoose = require('mongoose')
// 链接 Mongo
const DB_URL = 'mongodb://127.0.0.1:27017/my-app'
mongoose.connect(DB_URL, { useNewUrlParser: true })

const models = {
    user: {
        'user': {type: String, 'require': true},
        'pwd': {type: String, 'require': true},
        'type': {type: String, 'require': true},
        'avatar': {type: String, 'require': true},  // 头像
        'desc': {type: String, 'require': true},    // 个人简介或职位简介
        'title': {type: String, 'require': true},   // 职位名
        // 如果你是boss，还有2 个字段
        'company': {type: String},
        'money': {type: String},
    },
    chat: {
        'chatid':{type: String, 'require': true},
        'from':{type: String, 'require': true},
        'to':{type: String,'require': true},
        'read':{type: Boolean, default: false},
        'content':{type: String, 'require': true, default: ''},
        'create_time':{type: Number, default: new Date().getTime()}
    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
    getModel: function (name) {
        console.log(name,'name model')
        return mongoose.model(name)
    }
}
/*mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})*/
