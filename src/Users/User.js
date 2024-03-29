import {NavLink} from "react-router-dom";
import UserPng from "../UserPng/Sample_User_Icon.png";
import styles from "./Users.module.css";

let User = ({followingInProgress, follow, unfollow, user}) => {
    return (
        <div>
            <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : UserPng} alt="userPhoto"
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)

                                      }}>UnFollow</button>

                            : <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
        </div>
    )
}
export default  User