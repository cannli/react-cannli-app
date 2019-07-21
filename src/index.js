import React from 'react'
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import './config/axios'
import 'antd-mobile/dist/antd-mobile.css';

/*import {counter} from './redux/index.redux'*/
import counters from './redux/auth/reducer'

import Auth from './redux/auth/Auth'
import Dashboard from './redux/auth/Dashboard'

import * as serviceWorker from './serviceWorker';

const store = createStore(counters, applyMiddleware(thunk))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    {/*只渲染命中的第一个*/}

                    <Route path='/login' exact component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                    {/*   <Route path='/sanying' component={Sanying}></Route>*/}
                    {/*   <Route path='/:lacation' exact component={Test}></Route>*/}
                    {/*直接调到某页面*/}
                    {/* <Redirect to='Sanying'></Redirect>*/}
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
