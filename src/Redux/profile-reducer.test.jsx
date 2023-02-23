import profileReducer, {addPostActionCreator} from "./profile-reducer";


it('new post should be added', () => {
    let action = addPostActionCreator('yoyoyooyoyoyoyo')
    let state = {
        posts: [{id: 1, message: "Hi, my name is KillReal, i'm street photographer", likesCount: '621'},
            {id: 2, message: "Would you mind if i take some pictures", likesCount: '512'}]
    };
    let newState = profileReducer(state, action);
    expect(newState.post.length).toBe(3);
})