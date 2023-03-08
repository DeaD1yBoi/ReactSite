import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [{id: 1, message: "Hi, my name is KillReal, i'm street photographer", likesCount: '621'},
        {id: 2, message: "Would you mind if i take some pictures", likesCount: '512'}]
};

it('new post should be added', () => {
    let action = addPostActionCreator('yoyoyooyoyoyoyo')
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(3);
})

it('message incorrect', () => {
    let action = addPostActionCreator('yoyoyooyoyoyoyo')
    let newState = profileReducer(state, action);
    expect (newState.posts[2].message).toBe('yoyoyooyoyoyoyo');
})

it('lenght should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(1);
})