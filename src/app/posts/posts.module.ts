import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListsComponent } from './posts-lists/posts-lists.component';
import { PostsReducer } from './state/post.reducers';
import { POST_STATE_NAME } from './state/posts.selectors';

const routes: Routes = [
  {
    path: '',
    component: PostsListsComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      {
        path: 'edit/:id',
        component: EditPostComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [PostsListsComponent, AddPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME, PostsReducer),
    // EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostsModule {}