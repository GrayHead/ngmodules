import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/user-resolve.service';
import {SingleUserComponent} from './components/single-user/single-user.component';


const routes: Routes = [
  // RO-> app.com.html
  // /users
  {
    path: '', component: AllUsersComponent, resolve: {fetchedUsers: UserResolveService},
    children: [
      // /users/1
      {
        path: ':id', component: SingleUserComponent,
        // children: [
        //   {
        //     path: 'posts', loadChildren : () => import('./')
        //   }
        //   ]
      },
    ]
  }
];

@NgModule({
  declarations: [AllUsersComponent, SingleUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class UserModule {
}
