import * as Yup from 'yup';
export const LoginValidationSchema = Yup.object().shape({
    login: Yup.string()
        .min(3, 'Too short!')
        .max(20, 'Too long!')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Too short!')
        .max(20, 'Too long!')
        .required('Required')
})

