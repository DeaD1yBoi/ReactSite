import {authAPI, profileAPI} from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";
const CATCH_ERROR = "CATCH-ERROR";
const CAPTCHA = "CAPTCHA"


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    error: false,
    errorMessage: '',
    captchaUrl: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case CATCH_ERROR:
            return {
                ...state,
                errorMessage: action.error,
                error: true
            }
        case CAPTCHA:
            return {
                ...state,
                captchaUrl: action.captcha,
            }
        default :
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) =>
    ({
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    })
export const catchError = (error) => ({
    type: CATCH_ERROR,
    error
})
export const getCaptcha = (captcha) => ({
    type: CAPTCHA,
    captcha
})
export const auth = () => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const logInAcc = (email, password, rememberMe, captcha = null) => (dispatch) => {
    authAPI.logInAPI(email, password, rememberMe, captcha)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(auth());
            } else if (data.resultCode === 10) {
                dispatch(catchError(data.messages))
                authAPI.getCaptcha()
                    .then(data => {
                        dispatch(getCaptcha(data.url))
                    })
            } else {
                dispatch(catchError(data.messages))
            }
        })
}
export const logOutAcc = () => (dispatch) => {
    authAPI.logOutAPI()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;
