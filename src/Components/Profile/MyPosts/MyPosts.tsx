import s from "../MyPosts/MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {PostDataProps} from "../../../App";



type MyPostsPropsType = {
    posts: Array<PostDataProps>
}
export const MyPosts = (props: MyPostsPropsType) => {

    let postItems = props.posts.map(p=> <Post message={p.title} likecount={p.likecount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPostHandler = () => {
        let text = newPostElement.current?.value
        alert(text)
    }
    return (
        <div className={s.postsBlock}>
                <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    {postItems}
                </div>
            </div>
            )
            }

