import React from 'react'
import {Card, WingBlank} from 'antd-mobile'
import {WhiteSpace} from "antd-mobile/lib/index";

class Usercard extends React.Component {
    render() {
        const Header = Card.Header
        const Body = Card.Body
        return (
            <WingBlank>
                <WhiteSpace/>
                {this.props.userlist.length>0&&this.props.userlist.map(v => (
                    v.avatar ? (<Card key={v._id}>
                            <Header
                                title={v.user}
                                thumb={require(`../../assets/img/avatar/${v.avatar}.jpg`)}
                                thumbStyle={{width: 50, height: 50, borderRadius: 50}}
                                extra={<span>{v.title}</span>}
                            />
                            <Body>
                            {v.type==='boss'?<div>公司：{v.company}</div>:null}
                            {v.desc}
                            {v.type==='boss'?<div>薪资：{v.money}</div>:null}
                            </Body>
                        </Card>
                    ) : null
                ))}
            </WingBlank>
        )
    }
}

export default Usercard