import {tableReducer} from './tableReducer';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    table: tableReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>