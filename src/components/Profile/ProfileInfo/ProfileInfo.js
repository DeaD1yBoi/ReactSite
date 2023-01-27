import s from './ProfileInfo.module.css'
import UserPng from "../../../UserPng/Sample_User_Icon.png";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    return (<div>
        <div>
            <img src="https://picsum.photos/id/137/1000/100" alt="lol"/>
        </div>
        <div>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : UserPng} alt="profpic"/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            {`FullName ${props.profile.fullName}`}
        </div>
        <div>
            Social Networks
            <div>{`Facebook-${props.profile.contacts.facebook}`}</div>
            <div>{`Vk-${props.profile.contacts.vk}`}</div>
            <div>{`Twitter-${props.profile.contacts.twitter}`}</div>
            <div>{`Intstagram-${props.profile.contacts.instagram}`}</div>
            <div>{`Youtube-${props.profile.contacts.youtube}`}</div>
            <div>{`Github-${props.profile.contacts.github}`}</div>


        </div>
        <div className={s.description}>
            Ищу работу: {props.profile.lookingForAJob ? "Ищу" : "Не ищу"}
            {props.profile.lookingForAJob
                ? <div>Какую работу: {props.profile.lookingForAJobDescription} </div>
                : null}

        </div>
    </div>);
}

export default ProfileInfo