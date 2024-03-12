import s from "../MyPosts/MyPosts.module.css";
import React, {MouseEventHandler} from "react";
import {Post} from "./Post/Post";
import {PostDataProps} from "../../../App";



type MyPostsPropsType = {
    posts: Array<PostDataProps>
    addPost: (postMessage:string)=> void
}
export const MyPosts = (props: MyPostsPropsType) => {

    let postItems = props.posts.map(p=> <Post message={p.title} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPostHandler = () => {
        let text:string | undefined = newPostElement.current?.value
      if (text) props.addPost(text)
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

