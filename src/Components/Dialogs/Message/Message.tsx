import s from "./../Dialogs.module.css";
import React from "react";

type MessageItemType = {
    title: string
    id: number
}
export const Message = (props: MessageItemType) => {
    return (
        <div className={s.message}>{props.title}</div>
    )
}