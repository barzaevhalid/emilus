import {ASYNC_SET_USERS, REMOVE_USER, SET_USERS, TOGGLE_IS_FETCHING,} from "../constants/UsersList";

export const setUsers = payload => ({type: SET_USERS, payload})
export const AsyncUsersList = () => ({type: ASYNC_SET_USERS})
export const  removeUser = id => ({type: REMOVE_USER, id})
export const setIsFetching = fetching => ({type:TOGGLE_IS_FETCHING,  fetching})
