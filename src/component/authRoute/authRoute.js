import React from 'react'
import axios from 'axios'

class AuthRoute extends React.Component {
    componentDidMount() {
        axios.get('/user/info').then(res => {
            if (res.status === 200) {
                console.log(res.data)
            }
        })
        // 是否登录
        // 现在的URL地址 login是不需要跳转
        // 用户的type 身份是boss还是牛人
        // 用户是否完善信息 （选择头像， 个人简介）
    }

    render() {
        return (
            <div>
                <p>判断跳转的地方</p>
            </div>
        )
    }
}

export default AuthRoute