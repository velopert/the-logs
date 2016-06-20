import {combineReducers} from 'redux';
import TYPES from '../actions/ActionTypes';

const initialState = {
    memoList: {
        onRequest: false,
        list: []
    }
}

const memoList = (state = initialState.memoList, action) => {
    switch(action) {
        case TYPES.REQUEST_MEMOLIST:
            return Object.assign({}, state, {
                onRequest: true
            });
        case TYPES.RECEIVE_MEMOLIST:
            return Object.assign({}, state, {
                onRequest: true,
                list: action.data
            });
        default:
            return state;
    }     
}

const memoRead = (state = {a: 'empty'}, action) =>{
    return state;
}

const memoApp = combineReducers({memoList, memoRead});

export default memoApp;
