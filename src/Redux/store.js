import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: "Hi, my name is KillReal, i'm street photographer", likesCount: '621'},
                {id: 2, message: "Would you mind if i take some pictures", likesCount: '512'}],
            newPostText: ""
        },

        dialogsPage: {
            messages: [{id: 1,messages: 'Hello'},
                {id: 2,messages: 'How are u?'},
                {id: 3,messages: 'Want some Skittles'},
                {id: 4,messages: 'Bruuh'},
                {id: 5,messages: 'Ahhh'},
                {id: 6,messages: 'Ohhh'}],
            dialogs: [{id: 1, name: "Akakiy", image: 'https://picsum.photos/id/29/100/100'},
                {id: 2, name: "Jorge", image: 'https://picsum.photos/id/21/100/100'},
                {id: 3, name: "Mikola", image: 'https://picsum.photos/id/163/100/100'},
                {id: 4, name: "Adolf", image: 'https://picsum.photos/id/32/100/100'},
                {id: 5, name: "Rudolf", image: 'https://picsum.photos/id/73/100/100'},
                {id: 6, name: "Gandolf", image: 'https://picsum.photos/id/12/100/100'}],
            newMessageText: ''
        },
        sideBar: [
            {name: "Akakiy", image: 'https://picsum.photos/id/29/100/100'},
            {name: "Jorge", image: 'https://picsum.photos/id/21/100/100'},
            {name: "Mikola", image: 'https://picsum.photos/id/163/100/100'},
            {name: "Adolf", image: 'https://picsum.photos/id/32/100/100'},
            {name: "Rudolf", image: 'https://picsum.photos/id/73/100/100'},
            {name: "Gandolf", image: 'https://picsum.photos/id/12/100/100'}]
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}



// export default store
