const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'RESET_PASSWORD_SUCCESS':
            console.log('Reset password succes');
            return {
                ...state,
                authError: null
            }

        case 'RESET_PASSWORD_ERROR':
            console.log('reset password error');
            return {
                ...state,
                authError: "reset password error"
            }
        case 'SIGNUP_GOOGLE_ERROR':
            console.log('signup google error');
            return {
                ...state,
                authError: "signup google error"
            }
        case 'SIGNUP_GOOGLE_SUCCESS':
            console.log('signup google succes');
            return {
                ...state,
                authError: "signup google succes"
            }
        case 'DELETE_PROJECT_SUCCESS':
            console.log('DELETE_PROJECT_SUCCESS');
            return {
                ...state,
                authError: "DELETE_PROJECT_SUCCESS"
            }
        case 'DELETE_PROJECT_ERROR':
            console.log('DELETE_PROJECT_ERROR');
            return {
                ...state,
                authError: "DELETE_PROJECT_ERROR"
            }

        default:
            return state
    }
};

export default authReducer;