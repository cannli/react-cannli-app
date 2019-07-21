import React from 'react'
import {Link, Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from "./auth.redux";
import App from '../../App';


function Erying() {
    return <h2>二颍</h2>
}

function Sanying() {
    return <h2>三颍</h2>
}


@connect(
    state => state.auth,
    {logout}
)
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
                <ul>
                    <li>
                        <Link to='/dashboard'>一营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/erying'>二</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/sanying'>三营</Link>
                    </li>
                </ul>
                <Route path='/dashboard' exact component={App}></Route>
                <Route path='/dashboard/erying' component={Erying}></Route>
                <Route path='/dashboard/sanying' component={Sanying}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard