const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

const _filter = {'pwd': 0, '__v': 0}

Router.get('/list', function (req, res) {
    User.remove({}, function (err, res) {
    })
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})

Router.post('/login', (req, res) => {
    const {user, pwd} = req.body
    User.findOne({user, pwd: md5Pwb(pwd)}, _filter, (err, doc) => {
        if (!doc) {
            return res.json({code: 1, msg: '用户名或密码错误'})
        }
        res.cookie('userid', doc._id)
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

        const userModel = new User({user, pwd: md5Pwb(pwd), type})
        userModel.save(function (e, d) {
            if (e) {
                return res.json({code: 1, msg: '后端出错了'})
            }
            const {user, _id, type} = d
            res.cookie('userid', _id)
            return res.json({code: 0, msg: '添加成功', data: {user, _id, type}})
        })

        // User.create({user, pwd: md5Pwb(pwd), type}, function (err, data) {
        //     if (err) {
        //         return res.json({code: 1, msg: '后端出错了'})
        //     }
        //     return res.json({code: 0, msg: '添加成功'})
        // })
    })
})

Router.get('/info', function (req, res) {
    // 不是 登录 跟 注册 时校验有cookie吗
    console.log(req.cookies,'req.cookie')
    const {userid} = req.cookies
    if (!userid) {
        return res.json({code: 1})
    }
    User.findOne({_id: userid}, _filter, (err, doc) => {
        if (err) {
            return res.json({code: 1, msg: '后端出错了'})
        }
        if (doc) {
            return res.json({code: 0, data: doc})
        }
    })

})

function md5Pwb(pwd) {
    const salt = 'lican_is_haobaba-!@#'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router