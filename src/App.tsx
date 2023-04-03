import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./Components/Profile/Profile";
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";


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
        <BrowserRouter>
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path='/dialogs' render={()=><Dialogs
                    state={props.state.dialogsPage}
                />}/>
                <Route path='/profile' render={()=><Profile
                    state={props.state.profilePage}
                />}/>
                <Route path='/settings' render={()=><Settings/>}/>
                <Route path='/music' render={()=><Music/>}/>
                <Route path='/news' render={()=><News/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;
