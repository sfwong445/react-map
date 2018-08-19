import { Login, Logout } from '../actions';

const initialState = {
    isLoggedOn: false,
    token: null
}

function auth(state = initialState, action) {
    switch (action.type) {
        case Login: {
            return Object.assign({}, state, {
                isLoggedOn: true,
                token: action.token
            })
        }
        case Logout: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default auth;