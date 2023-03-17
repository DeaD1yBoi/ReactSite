import Profile from "./Profile";
import React from 'react';
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<Component
            {...props}
            router={{location, navigate, params}}
        />);
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    profileUpdate () {
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = this.props.userId
            if (!userID){
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userID);
        this.props.getStatus(userID);
}

    componentDidMount() {
        this.profileUpdate()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger;
        if (this.props.router.params.userID !== prevProps.router.params.userID) {
            this.profileUpdate()
        }
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} isOwner={!this.props.router.params.userID} savePhoto={this.props.savePhoto}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, {
    getProfile, getStatus, updateStatus, savePhoto
}))(ProfileContainer);