import TYPES from './ActionTypes';
import axios from 'axios';



export function requestMemoList() {
    return {
        type: TYPES.REQUEST_MEMOLIST
    };
}

export function receiveMemoList(data) {
    return {
        type: TYPES.RECEIVE_MEMOLIST,
        data
    };
};



export function getMemoList() {
    return (dispatch) => {
        dispatch(requestMemoList());
        return axios.get('/api/memos')
        .then(response => { 
            console.log(response.data);
            dispatch(receiveMemoList(response.data));
        });
    }
}


/*
export function writeMemo(contents, tags) {
    return {
        type: TYPES.WRITE_MEMO,
        contents
        tags
    };
};

export function listMemo() {
    return {
        type: TYPES.LIST_MEMO
    };
};

export function readMemo(id) {
    return {
        type: TYPES.READ_MEMO,
        id
    };
};
*/



