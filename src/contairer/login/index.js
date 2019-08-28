import React from 'react'
import {Button, InputItem, List, WhiteSpace, WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import Logo from '../../component/logo/Logo.js'
import {connect} from 'react-redux'
import {login} from "../../redux/user.redux";

//高阶组件

function wrapperHello(Comp) {
    class WrapComp extends Comp{
        componentDidMount(){
            console.log('高级组件新增的生命周期')
        }
        render(){
            return <Comp/>
        }
    }
    return WrapComp
}
@wrapperHello
class Hello extends React.Component{
    render(){
        return <h2>高阶组件</h2>
    }
}

@connect(
    state => state.user,
    {login}
)
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    register() {
        this.props.history.push('/register')
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleLogin() {
        this.props.login(this.state)
    }

    render() {
        return (
            <div>
                <Hello></Hello>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <h2>注册页面</h2>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : this.props.user}
                        <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                    </List>
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Register;