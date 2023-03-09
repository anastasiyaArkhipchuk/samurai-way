import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType ={
    id: string
    name: string
}
type MessageItemType = {
    title: string
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
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem
                        name='Nikita'
                        id='1'
                    />
                    <DialogItem
                        name='Nastya'
                        id='2'
                    />
                    <DialogItem
                        name='Maksim'
                        id='3'
                    />
                    <DialogItem
                        name='Victor'
                        id='4'
                    />
                    <DialogItem
                        name='Sasha'
                        id='5'
                    />
                </div>
                <div className={s.messages}>
                    <MessageItems
                        title='Hi'
                    />
                    <MessageItems
                        title='How is your IT-kamasutra?'
                    />
                    <MessageItems
                        title='Yo'
                    />
                </div>
            </div>

        </div>
    )
}