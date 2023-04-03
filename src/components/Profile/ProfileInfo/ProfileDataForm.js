import {Field, Form, Formik} from "formik";
import React from "react";
import {ProfileDataValidationSchema} from "../../../Common/utils/validators/ProfileDataValidator";
import s from "../../Login/Login.module.css";



const ProfileDataForm = (props) => {
    return(
        <div>
            <Formik
                initialValues={{
                    contacts:{facebook: props.profile.contacts.facebook || '',
                        github: props.profile.contacts.github || '',
                        instagram: props.profile.contacts.instagram || '',
                        twitter: props.profile.contacts.twitter || '',
                        youtube:props.profile.contacts.youtube || '' ,
                        website: props.profile.contacts.website || '',
                        vk:props.profile.contacts.vk || '',
                        mainLink:props.profile.contacts.mainLink || '',},
                    lookingForAJob:props.profile.lookingForAJob,
                    aboutMe:props.profile.aboutMe || '',
                    fullName:props.profile.fullName || '',
                    lookingForAJobDescription:props.profile.lookingForAJobDescription || ''}}
                validationSchema={ProfileDataValidationSchema}
                onSubmit={async (values, {setSubmitting} ) => {
                    await props.updateContacts(values)
                    setSubmitting(false);
                    props.onClose()
                }}>
                {({isSubmitting, errors, touched}) => (
                    <Form>
                        <div>
                            <b>Full Name:</b><Field type={'input'} name={'fullName'}></Field>
                            {errors.fullName && touched.fullName ? (
                                <div className={s.requiredErrors}>{errors.fullName}</div>) : null}
                        </div>
                        <div>
                            <b>About me :</b><Field type={'input'} name={'aboutMe'}/>
                            {errors.aboutMe && touched.aboutMe ? (
                                <div className={s.requiredErrors}>{errors.aboutMe}</div>) : null}
                        </div>
                        <div>
                            <b>Contacts:</b>
                        </div>
                        <div>
                            <b>Facebook :</b><Field type={'input'} name={'contacts.facebook'}/>
                        </div>

                        <div>
                            <b>Website :</b><Field type={'input'} name={'contacts.website'}/>
                        </div>
                        <div>
                            <b>Vk :</b><Field type={'input'} name={'contacts.vk'}/>
                        </div>
                        <div>
                            <b>Twitter :</b><Field type={'input'} name={'contacts.twitter'}/>
                        </div>
                        <div>
                            <b>Instagram :</b><Field type={'input'} name={'contacts.instagram'}/>
                        </div>
                        <div>
                            <b>Youtube :</b><Field type={'input'} name={'contacts.youtube'}/>
                        </div>
                        <div>
                            <b>GitHub :</b><Field type={'input'} name={'contacts.github'}/>
                        </div>
                        <div>
                            <b>MainLink :</b><Field type={'input'} name={'contacts.mainLink'}/>
                        </div>
                        <div>
                            <b>Looking For A Job :</b><Field type={'checkbox'} name={'lookingForAJob'}/>
                        </div>
                        <div>
                            <b>Looking for a Job description: </b> <Field type={'input'} name={'lookingForAJobDescription'}/>
                            {errors.lookingForAJobDescription && touched.lookingForAJobDescription ? (
                                <div className={s.requiredErrors}>{errors.lookingForAJobDescription}</div>) : null}
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProfileDataForm