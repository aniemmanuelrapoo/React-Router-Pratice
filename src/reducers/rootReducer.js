const initState = {
    posts: [
        {id: '1', title: 'aboy always goes to the gym', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores beatae et rerum cupiditate, unde, alias nisi dolore laboriosam culpa aliquid. Molestiae voluptatum, facilis delectus magnam quam quos. Cumque, exercitationem.'},
        {id: '2', title: 'favour always sing', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores beatae et rerum cupiditate, unde, alias nisi dolore laboriosam culpa aliquid. Molestiae voluptatum, facilis delectus magnam quam quos. Cumque, exercitationem.'},
        {id: '3', title: 'rapoo always code in his system', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores beatae et rerum cupiditate, unde, alias nisi dolore laboriosam culpa aliquid. Molestiae voluptatum, facilis delectus magnam quam quos. Cumque, exercitationem.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPost
        }
    }
    return state;
}

export default rootReducer;