import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../Common/Preloader/Preloader";

const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    </div>);
}

export default Profile;