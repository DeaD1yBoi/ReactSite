import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://picsum.photos/id/100/100/100" alt="pic"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logOutAcc}>Log Out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>);
}

export default Header