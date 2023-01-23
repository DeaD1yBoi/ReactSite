import s from '../Navbar.module.css'

const Friend = (props) => {
    return <div className={s.friends}><img src={props.image} alt="frImg"/>{props.name}</div>
}
export default Friend