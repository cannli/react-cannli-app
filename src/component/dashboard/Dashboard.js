import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Route, Switch} from 'react-router-dom'
import NavLinkBar from '../navLink/NavList'

import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'

function Msg() {
    return <h2>Msg</h2>
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
                path: '/boss',
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
        console.log(navList,'navListnavList')
        return (
            <div>
                <NavBar mode="dard" className='fixd-header '>{navList.length>0&&navList.find(v => v.path == pathName).title}</NavBar>
                <div>
                    <Switch>
                        {navList.map(v => (
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard