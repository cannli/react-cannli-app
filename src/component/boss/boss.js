import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import Usercard from '../usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.getUserList('genius')
    }

    render() {
        console.log(this.props.userlist, 'dataBoss')
        return (
            <Usercard userlist={this.props.userlist}></Usercard>
        )
    }
}

export default Boss