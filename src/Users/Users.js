import React from 'react';
import styles from "./Users.module.css";
import UserPng from "../UserPng/Sample_User_Icon.png";
import {NavLink} from "react-router-dom";
import {followActions} from "../API/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{`${p}/`}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : UserPng} alt="userPhoto"
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                followActions.unfollow(u.id)
                                .then(data => {
                                    if(data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                })

                            }}>UnFollow</button>

                            : <button onClick={() => {

                                followActions.follow(u.id)
                                .then(data => {
                                    if(data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                })
                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
        </div>)}
    </div>
}

export default Users