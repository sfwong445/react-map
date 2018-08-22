import { LOGIN, LOGOUT } from '../actions';

const initialState = {
    isLoggedOn: false,
    token: null
}

function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return Object.assign({}, state, {
                isLoggedOn: true,
                token: action.token
            })
        }
        case LOGOUT: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default auth;