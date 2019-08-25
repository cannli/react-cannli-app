import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import Usercard from '../usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Genuis extends React.Component {
    componentDidMount() {
        this.props.getUserList('boss')
    }

    render() {
        console.log(this.props.userlist, 'genius')
        return (
            <Usercard userlist={this.props.userlist}></Usercard>
        )
    }
}

export default Genuis