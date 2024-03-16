import s from "../MyPosts/MyPosts.module.css";
import React, {ChangeEvent, ChangeEventHandler, MouseEventHandler} from "react";
import {Post} from "./Post/Post";
import {PostDataProps} from "../../../App";
import {isBoolean} from "node:util";
import {addPost} from "../../redax/state";



type MyPostsPropsType = {
    posts: Array<PostDataProps>
    addPost: (postMessage:string)=> void
    newPostText: string
    updateNewPost: (newText:string)=>void
}
export const MyPosts = (props: MyPostsPropsType) => {

    let postItems = props.posts.map(p=> <Post message={p.title} likeCount={p.likeCount}/>)

    let addPostHandler = ( ) => {
            props.addPost(props.newPostText)
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPost(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
                <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                              value={props.newPostText}
                              onChange={onPostChange}
                    />
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

