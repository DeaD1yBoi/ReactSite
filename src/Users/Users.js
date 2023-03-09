import React from 'react';
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unfollow}) => {
    return (<div>
        <Pagination totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                    onPageChanged={onPageChanged}/>
        {users.map(u => <User key={u.id} followingInProgress={followingInProgress} follow={follow}
                              unfollow={unfollow}
                              user={u}/>)}
    </div>)
}
export default Users