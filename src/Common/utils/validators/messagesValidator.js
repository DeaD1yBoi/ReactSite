import * as Yup from 'yup';
export const MessagesValidationSchema = Yup.object().shape({
    newMessageText: Yup.string()
        .min(2, 'Too short!')
        .max(500, 'Too long!')
        .required('Required'),

})