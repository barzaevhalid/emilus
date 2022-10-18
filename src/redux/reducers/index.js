import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import usersList from "./UsersList";

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    usersList,
});

export default reducers;
