import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import React from "react";
import {Field, Form, Formik} from "formik";


class MyPosts extends React.Component {
    render() {
        return (<div>
                <h3>New post</h3>
                <AddPostForm addPost={this.props.addPost}/>
                <div className={s.posts}>
                    {this.props.posts
                        .map(post => <Posts message={post.message} likesCount={post.likesCount}/>)}
                </div>
            </div>);
    }
}

const AddPostForm = (props) => {
    return (<Formik
        initialValues={{
            newPostText: "",
        }}
        onSubmit={(values, {resetForm}) => {
            props.addPost(values.newPostText);
            resetForm();
        }}>
        <Form>
            <div>
                <Field
                    name="newPostText"
                    as='textarea'
                    placeholder="Enter your post"
                />
            </div>
            <button type={"submit"}>Send</button>
        </Form>
    </Formik>);
};
export default MyPosts;