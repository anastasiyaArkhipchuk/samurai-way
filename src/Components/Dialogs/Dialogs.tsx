import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagePropsType} from "../../App";

type DialogsProps = {
    state: DialogsPagePropsType
}
export const Dialogs = (props: DialogsProps) => {

    let dialogsItems = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message title={m.title} id={m.id}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessagesHandler = () => {
    let text = newMessageElement.current?.value
        alert(text)
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsItems}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessagesHandler}>GO</button>
                </div>
            </div>

        </div>
    )
}