import s from "./Post.module.css";
import React from "react";

type PostProps = {
    message: string
    likecount: string
}
export const Post = (props: PostProps) => {
    return (
        <div className={s.item}>
            <img src='https://memepedia.ru/wp-content/uploads/2021/10/liza-oblozhka-alboma-hate-love.jpg'/>
            {props.message}
            <div>
                <span>like {props.likecount}</span>
            </div>
        </div>
    )
}