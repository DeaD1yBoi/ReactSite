import Nav from "./Nav";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.sideBar.Friends
    }
}
const mapDispatchToProps = (dispatch) => {
return{

}
}
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer