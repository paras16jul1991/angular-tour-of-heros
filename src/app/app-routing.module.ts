import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }  from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SplitDetailComponent } from './split-detail/split-detail.component';

const routes: Routes = [
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 { path: 'userdetail', component: UserDetailComponent },
 { path: 'splitdetail', component: SplitDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
