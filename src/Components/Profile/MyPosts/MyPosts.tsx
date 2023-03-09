import s from "../MyPosts/MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
                <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' likecount='45'/>
                    <Post message='It is my first post' likecount='35'/>
                </div>
            </div>
            )
            }

