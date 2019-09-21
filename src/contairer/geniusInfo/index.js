import React from 'react'
import {Button, InputItem, NavBar, TextareaItem} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selecor/avatar-selector'
import {update} from '../../redux/user.redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
@connect(
    state => state.user,
    {update}
)
class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            desc:'',
        }
        this.onChange = this.onChange.bind(this)
        this.selectAvatar = this.selectAvatar.bind(this)
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    selectAvatar(imgname) {
        console.log(imgname,'imgname')
        this.setState({
            avatar: imgname
        })
    }
    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {/*{redirect && redirect !== path?<Redirect to={this.props.redirect}></Redirect>:null}*/}
                {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar mode="dark">牛人完善信息页</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname) => {
                        this.selectAvatar(imgname)
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>求职岗位</InputItem>
                <TextareaItem
                    onChange={(v) => this.onChange('desc', v)}
                    rows={3}
                    autoHeight
                    title='个人简历'
                ></TextareaItem>
                <Button type="primary" onClick={() => this.props.update(this.state)}>保存</Button>
            </div>
        )
    }
}

export default BossInfo