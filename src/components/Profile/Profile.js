import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../Common/Preloader/Preloader";

const Profile = ({savePhoto,isOwner, profile, status, updateStatus, updateContacts}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (<div>
        <div>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} updateContacts={updateContacts}/>
            <MyPostsContainer/>
        </div>
    </div>);
}

export default Profile;