import React from "react";
import s from "./ProfileInfo/ProfileInfo.module.css";

const ProfileContacts = ({contactTitle, contactValue}) => {
    if(!contactValue) return null
    return (
        <div className={s.contact}>
            <b>{contactTitle}: </b> {contactValue}
        </div>
    )
}

export default ProfileContacts