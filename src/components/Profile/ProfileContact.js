import React from "react";

const ProfileContacts = ({objectKey, objectValue}) => {
    if(!objectValue) return null
    return (
        <div>
            <b>{objectKey}:</b> {objectValue}
        </div>
    )
}

export default ProfileContacts