import React from 'react'
import {Icon, InputItem, List, NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList, recvMsg, sendMsg} from '../../redux/chat.redux'
import {getChatId} from '../../util'
import io from 'socket.io-client'

const socket = io('ws://localhost:9093')

@connect(
    state => state,
    {getMsgList, sendMsg, recvMsg}
)
    let dd ='Grinning Face   Grinning Face With Big Eyes   Grinning Face With Smiling Eyes   Beaming Face With Smiling Eyes   Grinning Squinting Face   Grinning Face With Sweat   Rolling on the Floor Laughing   Face With Tears of Joy   Slightly Smiling Face   Upside-Down Face   Winking Face   Smiling Face With Smiling Eyes   Smiling Face With Halo   Smiling Face With Hearts   Smiling Face With Heart-Eyes   Star-Struck   Face Blowing a Kiss   Kissing Face   Smiling Face   Kissing Face With Closed Eyes   Kissing Face With Smiling Eyes   Face Savoring Food   Face With Tongue   Winking Face With Tongue   Zany Face   Squinting Face With Tongue   Money-Mouth Face   Hugging Face   Face With Hand Over Mouth   Shushing Face   Thinking Face   Zipper-Mouth Face   Face With Raised Eyebrow   Neutral Face   Expressionless Face   Face Without Mouth   Smirking Face   ' +
    'Unamused Face   Face With Rolling Eyes   Grimacing Face   Lying Face   Relieved Face'
class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: '', msg: []}
    }

    componentDidMount() {
        console.log(this.props.chat, 'chat')
        if (!this.props.chat.chatmsg.length) {
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }

    handleSubmit() {
        // socket.emit('sendmsg', {text: this.state.text})

        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({from, to, msg})
        this.setState({text: ''})
    }

    render() {
        //  console.log(this.props, 'chat')
        const userid = this.props.match.params.user
        const Item = List.Item
        const users = this.props.chat.users
        if (!users[userid]) return null
        const chatmsg = this.props.chat.chatmsg
        const chatid = getChatId(userid, this.props.user._id)
        const chatmsgFilter = chatmsg.filter(v => v.chatid == chatid)
        return (
            <div id='chat-page'>
                <NavBar
                    mode='dark'
                    icon={<Icon type="left"></Icon>}
                    onLeftClick={() => {
                        this.props.history.goBack()
                    }}
                >
                    {users[userid].name}
                </NavBar>
                {chatmsgFilter.map((v) => {
                    const avatar = require(`../../assets/img/avatar/${users[v.from].avatar}.jpg`)
                    // userid是点击时的ID
                    // from 是别人发我的
                    return v.from == userid ?
                        (<List key={v._id}>
                            <Item
                                thumb={avatar}

                            >{v.content}</Item>
                        </List>) :
                        (<List key={v._id}>
                            <Item
                                extra={<img src={avatar}/>}
                                className="chat-me"
                            >{v.content}</Item>
                        </List>)
                })}
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder="请输入"
                            value={this.state.text}
                            onChange={v => {
                                this.setState({text: v})
                            }}
                            extra={<span onClick={() => this.handleSubmit()}>发送</span>}
                        ></InputItem>
                    </List>
                </div>
            </div>
        )
    }
}

export default Chat

