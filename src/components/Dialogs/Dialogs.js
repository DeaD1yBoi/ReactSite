import s from "./Dialog.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {Navigate} from "react-router-dom";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {Textarea} from "../../Common/FormControls/FormsControls";
import {MessagesValidationSchema} from "../../Common/utils/validators/messagesValidator";

class Dialogs extends React.Component {
    render() {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {this.props.dialogsPage.dialogs
                        .map(item => <DialogItem name={item.name} id={item.id} key={item.id} image={item.image}/>)}
                </div>
                <div className={s.messages}>
                    {this.props.dialogsPage.messages
                        .map(message => <Message message={message.messages} key={message.id}/>)}
                    <MessagesForm addMessage={this.props.addMessage}/>
                </div>
            </div>
        )
    }
}


const MessagesForm = (props) => {
    return (
        <Formik
            initialValues={{newMessageText: ""}}
            validationSchema={MessagesValidationSchema}
            onSubmit={(values,{resetForm}) =>
            {props.addMessage(values.newMessageText);
            resetForm();
            }}>
            <Form>
                    <Field name='newMessageText' as={Textarea} placeholder='Enter your message' />
                <ErrorMessage name={'newMessageText'} component={'div'} className={s.requiredField}/>
                <button type="submit">Send</button>
            </Form>
        </Formik>
    );
};




export default Dialogs