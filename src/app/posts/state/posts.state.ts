import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Post } from "src/app/model/posts.model";

export interface PostsState extends EntityState<Post> {
    count: number;
}

export const postsAdapter = createEntityAdapter<Post>({
    sortComparer: sortByName,
});
export const initialState: PostsState = postsAdapter.getInitialState({
    count: 0,
});
// export const initialState: PostsState = {
    // posts: null
    // posts: [
    //     {id: '1', title: 'Title 1', description: 'Desciption 1'},
    //     {id: '2', title: 'Title 2', description: 'Desciption 2'},
    // ]
// }

export function sortByName(a: Post, b: Post): number {
    if(a.title === undefined || b.title === undefined){
        return;
    }
    const compare = a.title.localeCompare(b.title);
    if (compare < 0) {
      return -1;
    }
  
    if (compare > 0) {
      return 1;
    }
  
    return compare;
  }