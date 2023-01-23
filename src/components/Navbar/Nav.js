import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";

const Nav = (props) => {
    let friendsElements = props.dialogs.map(friend => <Friend name={friend.name} image={friend.image} key={friend.id}/>)
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={navAct => navAct.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={navAct => navAct.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Massages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div>
                <h3>Friends</h3>
                <div>
                    {friendsElements}
                </div>
            </div>
        </nav>
    );
}

export default Nav;