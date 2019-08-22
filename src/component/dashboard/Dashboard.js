import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navLink/NavList'
function Boss() {
    return <h2>Boss首页</h2>
}
function Genius() {
    return <h2>牛人首页</h2>
}
function Msg() {
    return <h2>Msg</h2>
}

function User() {
    return <h2>User</h2>
}

@connect(
    state => state
)
class Dashboard extends React.Component {

    render() {
        const pathName = this.props.location.pathname
        console.log(this.props.user,'user')
        console.log(pathName,'pathName')
        const user = this.props.user
        const navList = [
            {
                path: '/bass',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type == 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type == 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg,
            },
            {
                path: '/mg',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User,
            }
        ]
        return (
            <div>
                <NavBar mode="dard">{navList.find(v=> v.path == pathName).title}</NavBar>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard