import * as Yup from 'yup';
export const ProfileDataValidationSchema = Yup.object().shape({
    aboutMe: Yup.string()
        .min(1, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
    fullName: Yup.string()
        .min(1, 'Too short!')
        .max(30, 'Too long!')
        .required('Required'),
    lookingForAJobDescription: Yup.string()
        .min(1, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
})

