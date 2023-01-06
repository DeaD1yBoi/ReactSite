const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

let initialState = {
    posts: [{id: 1, message: "Hi, my name is KillReal, i'm street photographer", likesCount: '621'},
        {id: 2, message: "Would you mind if i take some pictures", likesCount: '512'}],
    profile: null,
    isFetching: false,
    newPostText: ""
}
const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            };

        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default :
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;