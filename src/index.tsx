import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
let postsData = [
    {id: 1,title: 'Hi, how are you?', likecount: 45},
    {id: 2,title: 'It is my first post', likecount: 0}
]
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
ReactDOM.render(

    <App posts={postsData}
         dialogs={dialogsData}
         messages={messagesData}
    />,
  document.getElementById('root')
);