import s from "./Dialog.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {Navigate} from "react-router-dom";
import { Formik, Field, Form } from 'formik';

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
                    <AddMessageForm addMessage={this.props.addMessage}/>
                </div>
            </div>
        )
    }
}


const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{
                newMessageText: "",
            }}
            onSubmit={(values,{resetForm}) =>
            {props.addMessage(values.newMessageText);
            resetForm();
            }}>
            <Form>
                    <Field
                        name='newMessageText'
                        as='textarea'
                        placeholder='Enter your message'
                    />
                <button type="submit">Send</button>
            </Form>
        </Formik>
    );
};




export default Dialogs