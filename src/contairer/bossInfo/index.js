import React from 'react'
import {InputItem, NavBar, TextareaItem} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selecor/avatar-selector'

// import {connect} from 'react-redux'

class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.onChange = this.onChange.bind(this)
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">BOSS完善信息页</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname) => {
                        this.setState({
                            avatar: imgname
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>招聘职位</InputItem>
                <InputItem onChange={(v) => this.onChange('company', v)}>公司名称</InputItem>
                <InputItem onChange={(v) => this.onChange('money', v)}>职位薪资</InputItem>
                <TextareaItem
                    onChange={(v) => this.onChange('desc', v)}
                    rows={3}
                    autoHeight
                    title='职位要求'
                ></TextareaItem>
            </div>
        )
    }
}

export default BossInfo