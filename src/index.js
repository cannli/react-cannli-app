import React from 'react'
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import './config/axios'
import './index.css'
import 'antd-mobile/dist/antd-mobile.css';
// pages
import {BossInfo, GeniusInfo, Login, Register} from './contairer/pages'
import AuthRoute from './component/authRoute/authRoute'
import Dashboard from './component/dashboard/Dashboard'
import Chat from './component/chat/chat'

import counters from './redux/reducer'

import * as serviceWorker from './serviceWorker';

const store = createStore(counters, applyMiddleware(thunk))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <AuthRoute></AuthRoute>
            <Switch>
                <Route path='/bossinfo' exact component={BossInfo}></Route>
                <Route path='/geniusInfo' exact component={GeniusInfo}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/chat/:user' component={Chat}></Route>
                <Route component={Dashboard}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
