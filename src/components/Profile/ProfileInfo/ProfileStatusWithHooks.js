import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status]);

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (<div>
        {!editMode && <div>
            <span onDoubleClick={activateMode}>{status || '---'}</span>
        </div>}
        {editMode && <div>
            <input onBlur={deactivateEditMode} autoFocus={true}
                   onChange={onStatusChange} value={status}
                   placeholder='Enter your status'></input>
        </div>}
    </div>)
}


export default ProfileStatusWithHooks;