import { LOGIN_SUCCESS } from './constants';

const initialState = {
    email : localStorage.getItem('email') || '',
    picture : localStorage.getItem('avatar') || '',
    name : localStorage.getItem('name') || '',
    description : localStorage.getItem('description') || ''
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            const payload = action.payload;
            return {...state, ...payload}
            
        default:
            return state;
    }
}