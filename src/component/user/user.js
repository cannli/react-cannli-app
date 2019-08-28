import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import browserCookies from 'browser-cookies'
import {List, Modal, Result, WhiteSpace} from 'antd-mobile'
import {logoutSubmit} from '../../redux/user.redux'

@connect(
    state => state.user,
    {logoutSubmit}
)

class User extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout() {
        const alert = Modal.alert
        alert('注销', '确认退出登陆吗！', [
            {text: '取消'},
            {
                text: '确认', onPress: () => {
                    browserCookies.erase('userid')
                    this.props.logoutSubmit()
                }
            }
        ])
    }

    render() {
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        const style = {
            width: 50,
            height: 50,
            borderRadius: 50
        }
        console.log(props,'propspropsprops')
        return props.user ? (
            <div>
                <Result
                    img={<img style={style} src={require(`../../assets/img/avatar/${props.avatar}.jpg`)} alt=""/>}
                    title={props.user}
                    message={props.type === 'boss' ? <div>props.company</div> : null}
                />
                <List renderHeader={() => '简介'}>
                    <Item multipleLine>
                        {props.title}<br/>
                        {props.desc}<br/>
                        {props.money ? <Brief>薪水:{props.money}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item onClick={this.logout}>退出登陆</Item>
                </List>
            </div>
        ) : <Redirect to={props.redirectTo}></Redirect>
    }
}

export default User