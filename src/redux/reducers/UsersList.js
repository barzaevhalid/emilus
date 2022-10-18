import {REMOVE_USER, SET_USERS, TOGGLE_IS_FETCHING} from "../constants/UsersList";

const initialState = {
    users: [],
    loading: false,
    userDetails: {}
}

const usersList = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                loading: action.fetching
            }
        case SET_USERS:
            return {
            ...state,
                users:  action.payload
            }
        case REMOVE_USER:
            return {
                ...state,
                users: [...state.users.filter(obj => obj.id !== action.id)]
            }
        default:
            return state
    }

}
export default usersList;
