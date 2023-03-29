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
import {DialogsDataProps, MessagesDataProps, PostDataProps} from "./index";

type AppPropsType = {
    posts: Array<PostDataProps>
    dialogs: Array<DialogsDataProps>
    messages: Array<MessagesDataProps>
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path='/dialogs' render={()=><Dialogs
                    dialogs={props.dialogs}
                    messages={props.messages}
                />}/>
                <Route path='/profile' render={()=><Profile
                    posts={props.posts}
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
