import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType ={
    id: number
    name: string
}
type MessageItemType = {
    title: string
    id: number
}
const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const MessageItems = (props: MessageItemType) => {
    return (
        <div className={s.message}>{props.title}</div>
    )
}
export const Dialogs = () => {

    let dialogsData = [
        {id: 1,name: 'Nikita'},
        {id: 2,name: 'Anastasiya'},
        {id: 3,name: 'Maksim'},
        {id: 4,name: 'Victor'},
        {id: 5,name: 'Dima'}
    ]
    let messagesData = [
        {id: 1,title: 'Hi'},
        {id: 2,title: 'How is your IT-kamasutra?'},
        {id: 3,title: 'Yo'}
    ]
let dialogsItems =  dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messagesData.map(m=> <MessageItems title={m.title} id={m.id}/>)
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