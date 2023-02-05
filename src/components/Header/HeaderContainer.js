import Header from "./Header";
import React from 'react'
import {connect} from "react-redux";
import {auth, logOutAcc, setAuthUserData} from "../../Redux/auth-reducer";
import {headerAPI} from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, {auth, logOutAcc})(HeaderContainer);