import React from 'react'
import {List,Button, InputItem, Radio, WhiteSpace, WingBlank} from 'antd-mobile'
import Logo from '../../component/logo/Logo.js'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            type: 'genius'
        }
    }

    register() {

    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h2>注册页面</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem>确认密码</InputItem>

                        <RadioItem checked={this.state.type=='genius'}>牛人</RadioItem>
                        <RadioItem checked={this.state.type=='boss'}>BOSS</RadioItem>
                    </List>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Register;