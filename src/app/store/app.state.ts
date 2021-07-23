import { AuthReducer } from "../auth/state/auth.reducer";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducers";
import { CounterState } from "../counter/state/counter.state";
import { PostsReducer } from "../posts/state/post.reducers";
import { PostsState } from "../posts/state/posts.state";

export interface AppState{
    counter: CounterState,
    posts: PostsState,
    auth: AuthState
}

export const appReducer = {
    counter: counterReducer,
    posts: PostsReducer,
    auth: AuthReducer
}