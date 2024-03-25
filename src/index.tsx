import './index.css';
import {state, subscribe} from "./Components/redax/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateAppPropsType} from './App';
import {addPost, updateNewPost} from "./Components/redax/state";
import {BrowserRouter} from "react-router-dom";

export const renderEntireTree =  (state: StateAppPropsType) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(state)

subscribe(renderEntireTree)

