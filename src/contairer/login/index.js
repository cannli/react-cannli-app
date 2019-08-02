import React from 'react'
import { List, InputItem, Toast, WingBlank, WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../component/logo/Logo.js'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>注册页面</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
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