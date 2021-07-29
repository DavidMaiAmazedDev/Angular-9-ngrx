import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/store/router/custom-serializer";
import { getCurrentRoute } from "src/app/store/router/router.selector";
import { postsAdapter, PostsState } from "./posts.state";
export const postsSelectors = postsAdapter.getSelectors();
export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const getPostEntities = createSelector(
    getPostsState,
    postsSelectors.selectEntities
  );
// export const getPosts = createSelector(getPostsState, (state) => {    
//     return state.posts;
// });

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll );

export const getPostById = createSelector(
    getPostEntities,
    getCurrentRoute,
    (posts, route: RouterStateUrl) => {
        return posts? posts[route.params['id']] : null ;
    }
  );
// export const getCount = createSelector(getPostsState, (state) => state.count);