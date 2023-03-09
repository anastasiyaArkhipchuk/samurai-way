import React from "react";
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog+' '+s.active}>
                        Nikita
                    </div>
                    <div className={s.dialog}>
                        Nastya
                    </div>
                    <div className={s.dialog}>
                        Maksim
                    </div>
                    <div className={s.dialog}>
                        Victor
                    </div>
                    <div className={s.dialog}>
                        Sasha
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