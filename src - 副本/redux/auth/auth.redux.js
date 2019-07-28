import axios from "axios/index";

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
const initState = {
    isAuth: false,
    user: '李灿',
    age: 20
}

export function auth(state = initState, action) {
    console.log(state,11111)
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        case USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

// 异步操作
export function getUserData() {
    // dispatch 用来通知数据修改
    return dispatch => {
        axios.get('/data').then(res => {
            if (res.status === 200) {
                dispatch(userData(res.data[0]))
            }
        })
    }
}

export function userData(data) {
    return {type: USER_DATA, payload: data}
}

// active
export function login() {
    return {type: LOGIN}
}

export function logout() {
    return {type: LOGOUT}
}