import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ArticlesComponent }   from './articles/articles.component';
import { ArticleViewComponent }   from './article-view/article-view.component';
import { ArticleCreateComponent }   from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path:'', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/view/:slug', component: ArticleViewComponent },
  { path: 'article/create', component: ArticleCreateComponent },
  { path: 'article/edit/:id', component: ArticleEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
