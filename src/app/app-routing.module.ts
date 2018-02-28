import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }  from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SplitDetailComponent } from './split-detail/split-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: 'home2', component: LoginComponent },
 { path: 'userdetail', component: UserDetailComponent },
 { path: 'splitdetail', component: SplitDetailComponent },
 { path: 'home', component: AdminComponent },
 { path: 'login', component: AdminloginComponent },
 { path: 'sign-up', component: RegisterComponent }
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
