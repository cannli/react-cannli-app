const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function (req, res) {
    User.remove({}, function (err, res) {
    })
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})

Router.post('/login', (req, res) => {
    const {user, pwd} = req.body
    User.findOne({user, pwd: md5Pwb(pwd)}, {pwd:0}, (err, doc) => {
        if (!doc) {
            return res.json({code: 1, msg: '用户名或密码错误'})
        }
        return res.json({code: 0, data: doc})
    })
})

Router.post('/register', function (req, res) {
    console.log(req.body)
    const {user, pwd, type} = req.body
    User.findOne({user}, function (err, doc) {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        User.create({user, pwd: md5Pwb(pwd), type}, function (err, data) {
            if (err) {
                return res.json({code: 1, msg: '后端出错了'})
            }
            return res.json({code: 0, msg: '添加成功'})
        })
    })
})

Router.get('/info', function (req, res) {
    return res.json({code: 1})
})

function md5Pwb(pwd) {
    const salt = 'lican_is_haobaba-!@#'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router