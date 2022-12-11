import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = () => {
    let postData = [
        {message:"Hi, my name is KillReal, i'm street photographer", likesCount:'621'},
        {message:"Would you mind if i take some pictures", likesCount:'512'}
    ]
    let posts = postData
        .map(post => <Posts message={post.message} likesCount={post.likesCount}/>);
    return (<div>
        <h3>New post</h3>
        <div className={s.post}>
            <textarea name="Enter post" id="" cols="30" rows="3"></textarea>
        </div>
        <div>
            <button>Add post</button>
            <button>Remove post</button>
        </div>
        <div className={s.posts}>
            {posts}
        </div>
    </div>);
}

export default MyPosts;