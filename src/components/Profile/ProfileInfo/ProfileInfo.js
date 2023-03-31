import s from './ProfileInfo.module.css'
import UserPng from "../../../UserPng/Sample_User_Icon.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileContacts from "../ProfileContact";

const ProfileInfo = ({savePhoto, profile, status, updateStatus, isOwner, updateContacts}) => {

    let [editMode, setEditMode] = useState(false)

    const mainPhotoSelected = (e) => {
        debugger
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (<div>
        <div>
            <img src="https://picsum.photos/id/137/1000/100" alt="lol"/>
        </div>
        <div>
            <img src={profile.photos.large != null ? profile.photos.large : UserPng} alt="profpic"/>
            {isOwner && <input type="file" onChange={mainPhotoSelected}/>}
            <div><b>Status</b> :<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
        </div>
        {editMode ? <ProfileDataForm profile={profile} updateContacts={updateContacts} onClose={()=>{setEditMode(false)}}/> : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}
    </div>);
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div><b>FullName</b>: {profile.fullName}</div>
            <div>
                <b>About Me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <ProfileContacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>

            <div className={s.description}>
                <b>Ищу работу:</b> {profile.lookingForAJob ? "Yes" : "No"}
                {profile.lookingForAJob ?
                    <div><b>My skills: </b>{profile.lookingForAJobDescription} </div> : null}

            </div>
        </div>
}



export default ProfileInfo