import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (<div>
        <div>
            <img src="https://picsum.photos/id/137/1000/100" alt="lol"/>
        </div>
        <div>
            <img src="https://picsum.photos/id/621/200/200" alt="profpic"/>
        </div>
        <div className={s.description}>
            ava+description
        </div>
    </div>);
}

export default ProfileInfo