import Profile from "./Profile";
import React from 'react';
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profile-reducer";
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
        this.props.getProfile(this.props.router.params.userID)
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


export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));