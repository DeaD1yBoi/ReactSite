import {headerAPI} from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
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

export const auth = () => (dispatch) => {
    headerAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const logInAcc = (email, password, rememberMe) => (dispatch) => {
    headerAPI.logInAPI(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
            }
            dispatch(auth());
        })
}
export const logOutAcc = () => (dispatch) => {
    headerAPI.logOutAPI()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;
