import {profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = "SET-USER-PROFILE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const SET_STATUS = "SET-STATUS"


let initialState = {
    posts: [{id: 1, message: "Hi, my name is KillReal, i'm street photographer", likesCount: '621'},
        {id: 2, message: "Would you mind if i take some pictures", likesCount: '512'}],
    profile: null,
    isFetching: false,
    newPostText: "",
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default :
            return state;
    }
}
export const addPostActionCreator = (postText) => ({type: ADD_POST, postText: postText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userID) => async (dispatch) => {
    let data = await profileAPI.getProfile(userID)
        dispatch(setUserProfile(data))
}
export const getStatus = (userID) => async (dispatch) => {
    let data = profileAPI.getStatus(userID)
        dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let data = profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}

export default profileReducer;