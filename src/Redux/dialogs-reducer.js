const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    messages: [{id: 1, messages: 'Hello'},
        {id: 2, messages: 'How are u?'},
        {id: 3, messages: 'Want some Skittles'},
        {id: 4, messages: 'Bruuh'},
        {id: 5, messages: 'Ahhh'},
        {id: 6, messages: 'Ohhh'}],
    dialogs: [{id: 1, name: "Akakiy", image: 'https://picsum.photos/id/29/100/100'},
        {id: 2, name: "Jorge", image: 'https://picsum.photos/id/21/100/100'},
        {id: 3, name: "Mikola", image: 'https://picsum.photos/id/163/100/100'},
        {id: 4, name: "Adolf", image: 'https://picsum.photos/id/32/100/100'},
        {id: 5, name: "Rudolf", image: 'https://picsum.photos/id/73/100/100'},
        {id: 6, name: "Gandolf", image: 'https://picsum.photos/id/12/100/100'}],
    newMessageText: ''
}
const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
    };

    switch (action.type) {
        case ADD_MESSAGE :
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 7, messages: action.message}]

            }
        default:
            return state;
    }
}
export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message: message})


export default dialogsReducer;