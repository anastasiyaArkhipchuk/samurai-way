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

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem
                        name={dialogsData[0].name}
                        id={dialogsData[0].id}
                    />
                    <DialogItem
                        name={dialogsData[1].name}
                        id={dialogsData[1].id}
                    />
                    <DialogItem
                        name={dialogsData[2].name}
                        id={dialogsData[2].id}
                    />
                    <DialogItem
                        name={dialogsData[3].name}
                        id={dialogsData[3].id}
                    />
                    <DialogItem
                        name={dialogsData[4].name}
                        id={dialogsData[4].id}
                    />
                </div>
                <div className={s.messages}>
                    <MessageItems
                        title={messagesData[0].title}
                        id={messagesData[0].id}
                    />
                    <MessageItems
                        title={messagesData[1].title}
                        id={messagesData[1].id}
                    />
                    <MessageItems
                        title={messagesData[2].title}
                        id={messagesData[2].id}
                    />
                </div>
            </div>

        </div>
    )
}