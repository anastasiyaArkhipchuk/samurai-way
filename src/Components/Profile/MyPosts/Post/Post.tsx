import s from "./Post.module.css";
import React from "react";

export const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://memepedia.ru/wp-content/uploads/2021/10/liza-oblozhka-alboma-hate-love.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}