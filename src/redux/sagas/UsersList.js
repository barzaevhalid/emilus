import *  as axios from 'axios'
import {put, takeEvery} from 'redux-saga/effects'
import {setIsFetching, setUsers} from '../actions/UsersList'
import {ASYNC_SET_USERS} from "../constants/UsersList";
function* getUsersWorker() {
    yield put(setIsFetching(true))
   const data = yield axios.get('https://jsonplaceholder.typicode.com/users')
    yield put(setUsers(data.data))
    yield put(setIsFetching(false))
}

export default function*  usersWatcher () {
    yield takeEvery(ASYNC_SET_USERS, getUsersWorker)
}
