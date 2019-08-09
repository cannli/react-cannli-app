import React from 'react'
import {Button, InputItem, List, Radio, WhiteSpace, WingBlank} from 'antd-mobile'
import Logo from '../../component/logo/Logo.js'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
        this.register = this.register.bind(this)
    }

    register() {
        console.log(this.state, 'state')
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h2>注册页面</h2>
                <WingBlank>
                    <List>
                        <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={v => this.handleChange('wpd', v)}>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={v => this.handleChange('repeatpwd', v)}>确认密码</InputItem>

                        <RadioItem
                            checked={this.state.type == 'genius'}
                            onChange={v => this.handleChange('type', 'genius')}>
                            牛人
                        </RadioItem>
                        <RadioItem checked={this.state.type == 'boss'}
                                   onChange={v => this.handleChange('type', 'boss')}
                        >BOSS</RadioItem>
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