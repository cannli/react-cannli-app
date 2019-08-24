import React from 'react'
import axios from 'axios'
import {Card, WingBlank} from 'antd-mobile'

class Boss extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('/user/list?type=genius').then(res => {
            if (res.data.code == 0) {
                this.setState({data: res.data.data})
            }
        })
    }

    render() {
        const Header = Card.Header
        const Body = Card.Body
        console.log(this.state.data, 'data')
        return (
            <WingBlank>
                {this.state.data.map(v => (
                    v.avatar ? (<Card key={v._id}>
                        <Header
                            title={v.user}
                            thumb={require(`../../assets/img/avatar/tu${v.avatar.split('name')[1]}.jpg`)}
                            thumbStyle={{width: 50, height: 50, borderRadius: 50 }}
                            extra={<span>{v.title}</span>}
                        />
                        <Body>
                        {v.desc}
                        </Body>
                    </Card>) : null
                ))}
            </WingBlank>
        )
    }
}

export default Boss