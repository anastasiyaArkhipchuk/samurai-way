
export let state = {
    profilePage: {
        posts: [
            {id: 1,title: 'Hi, how are you?', likeCount: 45},
            {id: 2,title: 'It is my first post', likeCount: 0}
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1,title: 'Hi'},
            {id: 2,title: 'How is your IT-kamasutra?'},
            {id: 3,title: 'Yo'}
        ],
        dialogs: [
            {id: 1,name: 'Nikita'},
            {id: 2,name: 'Anastasiya'},
            {id: 3,name: 'Maksim'},
            {id: 4,name: 'Victor'},
            {id: 5,name: 'Dima'}
        ]
    }
    }

export const addPost = (postMessage) => {
    let NewPost = {
        id: 3, title: postMessage, likeCount:0
    }
    state.profilePage.posts.push(NewPost)
}