import { createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePostSuccess, loadPostsSuccess, updatePostSuccess } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState,
    on(addPostSuccess, (state, action) => {
        let post = { ...action.post }
        return {
            ...state,
            posts: [...state.posts, post]

        }
    }),
    on(updatePostSuccess, (state, action) => {
        const updatedPost = state.posts.map((post) =>{
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatedPost

        }
    }),
    on(deletePostSuccess, (state, {id}) => {
        const newPostList = state.posts.filter(post => {
            return post.id !== id;
        })
        return {
            ...state,
            posts: newPostList
        }
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts
        }
      })
);

export function PostsReducer(state, action) {
    return _postsReducer(state, action);
}