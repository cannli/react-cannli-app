import React from 'react'
import {connect} from 'react-redux'
import {login,getUserData} from './auth.redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

@connect(
    state => state.auth,
    {login, getUserData}
)
class Auth extends React.Component {
/*    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }*/

    componentDidMount() {
        // axios.get('/data').then(res => {
        //     if (res.status === 200) {
        //         this.setState({data: res.data[0]})
        //     }
        //     console.log(res.data)
        // })
        this.props.getUserData()
    }

    render() {
        return (
            <div>
                <h2>我的名字是：{this.props.user}, 年龄：{this.props.age}</h2>
                {this.props.isAuth ? <Redirect to='/dasaboard'></Redirect> : null}
                <h2>您没有权限登陆</h2>
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}

export default Auth