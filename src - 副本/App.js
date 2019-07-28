import React from 'react'
import {connect} from 'react-redux'
import {addGun, addGunAsync, removeGun} from './redux/index.redux'

const mapStatetoProps = (state) => {
    return {num: state.counter}
}
const actionCreators = {addGun, removeGun, addGunAsync}
//App = connect(mapStatetoProps, actionCreators)(App)
@connect(mapStatetoProps,actionCreators)
class App extends React.Component {
    render() {
        const boss = 'lican'
        return (
            <div>
                <h2>独立团, 团长{boss}有机关枪{this.props.num}把</h2>
                <button onClick={this.props.addGun}>申请武器</button>

                <button onClick={this.props.removeGun}>上交武器</button>

                <button onClick={this.props.addGunAsync}>拖2天再上交武器</button>
                <Yihao laoda="李一"></Yihao>
                <Erhao laoda="李二"></Erhao>
            </div>
        )
    }
}

function Erhao(props) {
    return <h2>骑兵连连长{props.laoda}</h2>
}

class Yihao extends React.Component {
    // 组件内传参
    constructor(props) {
        super(props)
        this.state = {
            solders: ['胡子', '虎子', '梨子']
        }
    }

    addSolders = () => {
        this.setState({
            solders: [...this.state.solders, `新兵袋子${Math.random()}${Math.random()}`]
        })
    }

    render() {
        return (
            <div>
                <h2>一号，营长， {this.props.laoda}</h2>
                <button onClick={this.addSolders}>新增</button>
                <ul>
                    {this.state.solders.map(item => {
                        return <li key="item">{item}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default App;
