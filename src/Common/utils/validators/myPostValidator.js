import * as Yup from 'yup';
export const MyPostValidationSchema = Yup.object().shape({
    newPostText: Yup.string()
        .min(2, 'Too short!')
        .max(150, 'Too long!')
        .required('Required'),

})
