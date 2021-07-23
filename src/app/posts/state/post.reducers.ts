import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post }
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]

        }
    }),
    on(updatePost, (state, action) => {
        const updatedPost = state.posts.map((post) =>{
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatedPost

        }
    }),
    on(deletePost, (state, {id}) => {
        const newPostList = state.posts.filter(post => {
            return post.id !== id;
        })
        return {
            ...state,
            posts: newPostList
        }
    })
);

export function PostsReducer(state, action) {
    return _postsReducer(state, action);
}