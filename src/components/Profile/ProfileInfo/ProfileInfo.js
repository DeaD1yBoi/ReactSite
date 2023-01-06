import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (<div>
        <div>
            <img src="https://picsum.photos/id/137/1000/100" alt="lol"/>
        </div>
        <div>
            <img src={props.profile.photos.large} alt="profpic"/>
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
            <div>Какую работу: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : null}</div>
        </div>
    </div>);
}

export default ProfileInfo