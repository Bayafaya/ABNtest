import { combineReducers, createStore } from 'redux';
import {authStore} from './authStore'
import {composeWithDevTools} from '@redux-devtools/extension';
import { accountStore } from './accountsStore';
    


const rootReducer = combineReducers({
    auth:authStore,
    accounts:accountStore,
})
export const store = createStore(rootReducer,composeWithDevTools());
