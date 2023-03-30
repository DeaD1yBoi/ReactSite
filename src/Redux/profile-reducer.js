import {profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = "SET-USER-PROFILE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const SET_STATUS = "SET-STATUS"
const DELETE_POST = "DELETE-POST"
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS"
const EDIT_CONTACTS = "EDIT-CONTACTS"

let initialState = {
    posts: [{id: 1, message: "Hi, my name is KillReal, i'm street photographer", likesCount: '621'}, {
        id: 2,
        message: "Would you mind if i take some pictures",
        likesCount: '512'
    }], profile: null, isFetching: false, newPostText: "", status: '', contacts: null
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5, message: action.postText, likesCount: 0
            };
            return {
                ...state, posts: [...state.posts, newPost]
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postID)}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}

        case SET_STATUS:
            return {...state, status: action.status}
        case EDIT_CONTACTS:
            return {...state, contacts: action.contacts}
        default :
            return state;
    }
}
export const addPostActionCreator = (postText) => ({type: ADD_POST, postText: postText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export  const deletePost = (postID) => ({type:DELETE_POST, postID})
export  const savePhotoSuccess = (photos) => ({type:SAVE_PHOTO_SUCCESS, photos})
export const editContacts = (contacts) => ({type: EDIT_CONTACTS, contacts})

export const getProfile = (userID) => async (dispatch) => {
    let data = await profileAPI.getProfile(userID)
    dispatch(setUserProfile(data))
}
export const getStatus = (userID) => async (dispatch) => {
    let data = await profileAPI.getStatus(userID)
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const updateContacts = (contacts) => async (dispatch) => {
    let data = await profileAPI.updateContacts(contacts)
    if (data.resultCode === 0) {
        dispatch(editContacts(data.contacts))
    }
}

export default profileReducer;