import  * as Types from '../actions/types';

const  initialState = []

const documentReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case Types.FETCH_DOCUMENTS: 
            return payload;
        case Types.UPLOAD_DOCUMENTS:
            console.log(payload);
            return '';
        default:
            return state;
    }

};

export default documentReducer;