import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { deletePost, loadPosts } from '../state/posts.actions';
import { getPosts } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.scss']
})
export class PostsListsComponent implements OnInit {
  posts: Observable<Post[]>;
  count: Observable<number>;
  constructor(private store: Store<AppState>) { 
  }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    // this.count = this.store.select(getCount);
    this.store.dispatch(loadPosts());
  }

  onDeletePost(id: string) {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({ id }));
    }
  }

}
