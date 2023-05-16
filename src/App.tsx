import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Profile} from "./Components/Profile/Profile";
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Route, Switch} from "react-router-dom";


export type PostDataProps = {
    id: number
    title: string
    likecount: number
}
export type DialogsDataProps = {
    id: number
    name: string
}
export type MessagesDataProps = {
    id: number
    title: string
}
export type ProfilePagePropsType = {
    posts: Array<PostDataProps>
}
export type DialogsPagePropsType = {
    messages: Array<MessagesDataProps>
    dialogs: Array<DialogsDataProps>
}
export type StateAppPropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}
type AppPropsType = {
    state: StateAppPropsType
}
const App = (props: AppPropsType) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Switch>
                    <Route path='/dialogs' render={()=><Dialogs
                        state={props.state.dialogsPage}
                    />}/>
                    <Route path='/profile' render={()=><Profile
                        state={props.state.profilePage}
                    />}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/news' render={()=><News/>}/>
                </Switch>
            </div>
        </div>
    );
}
export default App;
