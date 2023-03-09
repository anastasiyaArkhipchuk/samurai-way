import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to='/dialogs/1'> Nikita</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/2'> Nastya</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/3'> Maksim</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/4'> Victor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/5'> Sasha</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How is your IT-kamasutra?</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>

        </div>
    )
}