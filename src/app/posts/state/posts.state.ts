import { Post } from "src/app/model/posts.model";

export interface PostsState {
    posts: Post[];
}
export const initialState: PostsState = {
    posts: null
    // posts: [
    //     {id: '1', title: 'Title 1', description: 'Desciption 1'},
    //     {id: '2', title: 'Title 2', description: 'Desciption 2'},
    // ]
}