import Profile from "./Profile";
import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../Redux/profile-reducer";
import Preloader from "../../Common/Preloader/Preloader";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.router.params.userID;
        if(!userID){userID=2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <>
            {/*{this.props.isFetching ? <Preloader/> : null}*/}
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(withRouter(ProfileContainer));