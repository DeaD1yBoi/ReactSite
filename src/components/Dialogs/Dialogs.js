import s from "./Dialog.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
const Dialogs = (props) => {
    let dialogElemetnts = props.dialogsPage.dialogs
        .map(item => <DialogItem name={item.name} id={item.id} image={item.image}/>)
    let newMessageElement = React.createRef();
    let addMessage =() =>{
        let text = newMessageElement.current.value;
        alert(text)
    }
    let messageElements = props.dialogsPage.messages
        .map(message => <Message message={message.messages}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElemetnts}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea ref={newMessageElement} cols="25" rows="2"></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs