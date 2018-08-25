import {FETCH_POST_SUCCESS,FETCH_POST_REQUEST,FETCH_POST_ERROR} from './types';

const initialState = {
    posts: [],
    page : 0,
    total_pages: 0,
  };

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POST_REQUEST:
            return state;
        case FETCH_POST_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
