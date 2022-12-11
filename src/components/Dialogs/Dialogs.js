import s from "./Dialog.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
const Dialogs = (props) => {
    let dialogData = [
        {id: 1, name: "Akakiy"},
        {id: 2, name: "Jorge"},
        {id: 3, name: "Mikola"},
        {id: 4, name: "Adolf"},
        {id: 5, name: "Rudolf"},
        {id: 6, name: "Gandolf"}
    ]
    let dialogElemetnts = dialogData
        .map(item => <DialogItem name={item.name} id={item.id}/>)

    let messagesData = [
        {messages: 'Hello'},
        {messages: 'How are u?'},
        {messages: 'Want some Skittles'},
        {messages: 'Bruuh'},
        {messages: 'Ahhh'},
        {messages: 'Ohhh'}
    ]
    let messageElements = messagesData
        .map(message => <Message message={message.messages}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElemetnts}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs