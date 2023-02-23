import {followActions, userAPI} from "../API/api";
import {updateObjectInArray} from "../Common/utils/validators/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [], pageSize: 4, totalUsersCount: 0, currentPage: 1, isFetching: false, followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.user, action.userID, 'id', {followd: true})
            }
        case UNFOLLOW:
            return {
                ...state, users: updateObjectInArray(state.user, action.userID, 'id', {followd: false})
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingProcess ? [...state.followingInProgress, action.userID] : state.followingInProgress.filter(id => id != action.userID)
            }
        default :
            return state;
    }
}
export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (followingProcess, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, followingProcess, userID
})

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = userAPI.getUsers(page, pageSize)
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, id))
    let data = apiMethod(id)
    dispatch(toggleFollowingProgress(false, id))
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
}

export const follow = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, id, followActions.follow.bind(followActions), followSuccess)
}

export const unfollow = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, id, followActions.unfollow.bind(followActions), unfollowSuccess)

}


export default usersReducer;
