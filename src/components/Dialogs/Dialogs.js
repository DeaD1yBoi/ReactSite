import s from "./Dialog.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";


const Dialogs = (props) => {
    let dialogElemetnts = props.dialogsPage.dialogs
        .map(item => <DialogItem name={item.name} id={item.id} key={item.id} image={item.image}/>)
    let messageElements = props.dialogsPage.messages
        .map(message => <Message message={message.messages} key={message.id}/>)
    let newMessageElement = React.createRef();
    let onAddMessage = () => {
        props.addMessage()
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElemetnts}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange} ref={newMessageElement}
                          placeholder='Enter your message'
                          value={props.dialogsPage.newMessageText}
                          cols="25" rows="2"></textarea>
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs