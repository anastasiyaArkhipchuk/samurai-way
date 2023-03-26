import s from "../MyPosts/MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        {id: 1,title: 'Hi, how are you?', likecount: 45},
        {id: 2,title: 'It is my first post', likecount: 0}
    ]
    let postItems = postsData.map(p=> <Post message={p.title} likecount={p.likecount}/>)
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
                    {postItems}
                </div>
            </div>
            )
            }

