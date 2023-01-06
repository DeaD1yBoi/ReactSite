import Profile from "./Profile";
import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../Redux/profile-reducer";
import Preloader from "../../Common/Preloader/Preloader";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
                <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(ProfileContainer);