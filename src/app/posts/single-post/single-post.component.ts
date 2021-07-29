import { Store } from '@ngrx/store';
import { AppState } from './../../store/app.state';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/posts.model';
import { getPostById } from '../state/posts.selectors';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  post: Observable<Post>;
  count$ = of(NaN);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.post = this.store.select(getPostById);  
    }, 1);
      
    
  }
}
