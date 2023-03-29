import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataProps, MessagesDataProps} from "../../index";

type DialogsProps = {
    dialogs: Array<DialogsDataProps>
    messages: Array<MessagesDataProps>
}
export const Dialogs = (props: DialogsProps) => {

let dialogsItems =  props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = props.messages.map(m=> <Message title={m.title} id={m.id}/>)
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsItems}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>

        </div>
    )
}