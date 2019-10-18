import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OAuth2CallbackComponent } from './o-auth2-callback/o-auth2-callback.component';
import { UserComponent } from './user/user.component';
import { BoardsComponent } from './boards/boards.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'boards', component: BoardsComponent },
  { path: 'oauth2/callback', component: OAuth2CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
