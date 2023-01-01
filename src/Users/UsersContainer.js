import React from 'react';
import {followAC, setUsersAC, unfollowAC} from "../Redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

const UsersContainer = (props) => {
    return <div>
        Users will be here
    </div>
}
let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);