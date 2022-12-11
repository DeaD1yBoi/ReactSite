import s from './Posts.module.css'
const Posts = (props) => {
    const date = new Date()
    const nowDate = `${date.getFullYear()}:${date.getMonth()+1}:${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
    let likeCounter = 0

    return(
        <div className={s.item}>
            <img src="https://picsum.photos/id/177/100/100" alt="postPic"/>
            {props.message}
            <div>
                {nowDate}
                <span> Like</span> {props.likesCount}
            </div>
        </div>);
}

export default Posts;