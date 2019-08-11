import axios from 'axios'
import {getRedirectPath} from '../util'
const REFISTER_SUCCESS = 'REFISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const initState = {
    redirectTo: '',
    isAuth: '',
    msg:'',
    user: '',
    pwd: '',
    repeatpwd: '',
    type: ''
}

// redux
export function user(state = initState, action) {
    console.log(action, 'action')
    switch (action.type) {
        case REFISTER_SUCCESS:
            return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state
    }
    console.log(action, 'action')
    console.log(state, 'action-state')
}

function registerSuccess(data) {
    console.log(getRedirectPath(data),999999)
    return {type: REFISTER_SUCCESS, payload: data}
}

function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}

export function register({user, pwd, repeatpwd, type}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('密码必须一样')
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type}).then(res => {
            console.log(res.status +'===' +  res.code)
            if (res.status === 200 && res.data.code === 0) {
                dispatch(registerSuccess({user, pwd, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}