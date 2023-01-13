import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return(
        <header className={s.header}>
            <img src="https://picsum.photos/id/100/100/100" alt="pic"/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>);
}

export default Header