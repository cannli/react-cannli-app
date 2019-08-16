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
import {Login, Register, BossInfo} from './contairer/pages'
import AuthRoute from './component/authRoute/authRoute'

import counters from './redux/reducer'

import * as serviceWorker from './serviceWorker';
const store = createStore(counters, applyMiddleware(thunk))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <AuthRoute></AuthRoute>
            <Route path='/bossinfo' exact component={BossInfo}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' component={Register}></Route>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
