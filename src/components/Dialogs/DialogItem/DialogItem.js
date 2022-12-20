import s from "../Dialog.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = `/dialog/${props.id}`
    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>
            <img src={`${props.image}`} alt="picture"/>{`${props.name}`}</NavLink>
    </div>;
}
export default DialogItem