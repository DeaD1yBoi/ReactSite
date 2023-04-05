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
    contacts: Yup.object().shape({
        facebook: Yup.string().url("Please enter a valid URL for Facebook"),
        github: Yup.string().url("Please enter a valid URL for Github"),
        instagram: Yup.string().url("Please enter a valid URL for Instagram"),
        twitter: Yup.string().url("Please enter a valid URL for Twitter"),
        youtube: Yup.string().url("Please enter a valid URL for YouTube"),
        website: Yup.string().url("Please enter a valid URL for Website"),
        vk: Yup.string().url("Please enter a valid URL for VK"),
        mainLink: Yup.string().url("Please enter a valid URL for MainLink"),
    })


})

