import {authAPI, profileAPI} from "../API/api";

const SET_USER_DATA = "AUTH/SET-USER-DATA";
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
export const auth = () => async (dispatch) => {
    let data =  await authAPI.authMe()
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
}

export const logInAcc = (email, password, rememberMe, captcha = null) => async (dispatch) => {
    let data = await authAPI.logInAPI(email, password, rememberMe, captcha)
            if (data.resultCode === 0) {
                dispatch(auth());
            } else if (data.resultCode === 10) {
                dispatch(catchError(data.messages))
                authAPI.getCaptcha()
                        dispatch(getCaptcha(data.url))
            } else {
                dispatch(catchError(data.messages))
            }
}
export const logOutAcc = () => async (dispatch) => {
    let data = await authAPI.logOutAPI()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
}

export default authReducer;
