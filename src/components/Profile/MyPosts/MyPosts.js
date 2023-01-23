import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import React from "react";


const MyPosts = (props) => {
    let posts = props.posts
        .map(post => <Posts message={post.message} likesCount={post.likesCount}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (<div>
        <h3>New post</h3>
        <div className={s.post}>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      placeholder='Enter your post'
                      value={props.newPostText} cols="30" rows="3"/>
        </div>
        <div>
            <button onClick={onAddPost}>Add post</button>
            <button>Remove post</button>
        </div>
        <div className={s.posts}>
            {posts}
        </div>
    </div>);
}

export default MyPosts;