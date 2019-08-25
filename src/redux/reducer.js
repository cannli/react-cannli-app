// 专门合并state的， 并且返回
import {combineReducers} from 'redux'
import {user} from './user.redux'
import {chatuser} from './chatuser.redux'
// import {counter} from '../index.redux'
// import {auth} from './auth.redux'


export default combineReducers({user, chatuser})