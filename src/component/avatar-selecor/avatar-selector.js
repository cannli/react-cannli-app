import React from 'react'
import PropTypes from 'prop-types'
import {Grid, List} from 'antd-mobile'

class AvatarSelector extends React.Component {
    // isRequired 表示必须传
    static propTypes = {
        selectAvatar: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const avatarList = Array.from(new Array(8)).map((item, index) => ({
            icon: require(`../../assets/img/avatar/tu${index * 1 + 1}.jpg`),
            text: `tu${index * 1 + 1}`
        }))
        const gridHeader = this.state.text
            ? (<div>
                <span>已选择头像</span>
                <img style={{width: 20}} src={this.state.icon} alt=""/>
            </div>)
            : <div>请选择图像</div>

        return (
            <div>
                <List renderHeader={() => gridHeader}></List>
                <Grid data={avatarList} columnNum={4}
                      onClick={el => {
                          this.setState(el)
                          this.props.selectAvatar(el.text)
                      }}
                />
                头像选择
            </div>
        )
    }
}

export default AvatarSelector