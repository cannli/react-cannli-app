const mongoose = require('mongoose')
// 链接 Mongo
const DB_URL = 'mongodb://127.0.0.1:27017/my-app'
mongoose.connect(DB_URL)

const models = {
    user: {
        'user': {type: String, 'require': true},
        'pwd': {type: String, 'require': true},
        'type': {type: String, 'require': true},
        'avatar': {type: String, 'require': true},  // 头像
        'desc': {type: String, 'require': true},    // 个人简介或职位简介
        'title': {type: String, 'require': true},   // 职位名
        'company': {type: String, 'require': true}, // 如果你是boss 还有2个字段
        'money': {type: String, 'require': true},
    },
    chat: {}
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}
/*mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})*/
