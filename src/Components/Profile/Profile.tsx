import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../App";


type ProfilePropsType={
    state: ProfilePagePropsType
    addPost: (postMessage:string) => void

    updateNewPost: (newText:string)=>void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
                     newPostText={props.state.newPostText}
                     updateNewPost={props.updateNewPost}
            />
        </div>)
}

