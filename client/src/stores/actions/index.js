export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function Login(token) {
    return { type: LOGIN, token }
}

export function Logout() {
    return { type: LOGOUT }
}