let store = {
    _state: {
        profilePage: {
            posts: [{id:1, message: "Hi, my name is KillReal, i'm street photographer", likesCount: '621'},
                {id:2, message: "Would you mind if i take some pictures", likesCount: '512'}],
            newPostText: "yoyooyoy"
        },

        dialogsPage: {
            messages: [{messages: 'Hello'},
                {messages: 'How are u?'},
                {messages: 'Want some Skittles'},
                {messages: 'Bruuh'},
                {messages: 'Ahhh'},
                {messages: 'Ohhh'}],
            dialogs: [{id: 1, name: "Akakiy", image:'https://picsum.photos/id/29/100/100'},
                {id: 2, name: "Jorge", image:'https://picsum.photos/id/21/100/100'},
                {id: 3, name: "Mikola", image:'https://picsum.photos/id/163/100/100'},
                {id: 4, name: "Adolf", image:'https://picsum.photos/id/32/100/100'},
                {id: 5, name: "Rudolf", image:'https://picsum.photos/id/73/100/100'},
                {id: 6, name: "Gandolf", image:'https://picsum.photos/id/12/100/100'}]
        },
        sideBar:[
            {name: "Akakiy", image:'https://picsum.photos/id/29/100/100'},
            {name: "Jorge", image:'https://picsum.photos/id/21/100/100'},
            {name: "Mikola", image:'https://picsum.photos/id/163/100/100'},
            {name: "Adolf", image:'https://picsum.photos/id/32/100/100'},
            {name: "Rudolf", image:'https://picsum.photos/id/73/100/100'},
            {name: "Gandolf", image:'https://picsum.photos/id/12/100/100'}]
    },
    _callSubscriber () {},
    getState () {
        return this._state
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)

    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export default store