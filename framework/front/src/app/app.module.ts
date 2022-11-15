import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes } from '@angular/router';
import { Router } from 'express';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AssignRolesAdminComponent } from './assign-roles-admin/assign-roles-admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginService } from './services/login.service';
import { ModalComponent } from './modal/modal.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoutes:Routes=[
  {path:'login',component:LoginComponent},
  {path: 'home',component:HomeComponent},
  {path:'assignRolesAdmin',component:AssignRolesAdminComponent},
  {path:'viewUser',component:ViewUserComponent},
  {path:'registerUser',component:RegisterUserComponent},  
  {path:'adminUsers',component:AdminUsersComponent},
  {path:'newRol',component:NewRoleComponent},
  {path:'editUser',component:EditUserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewUserComponent,
    AssignRolesAdminComponent,
    HomeComponent,
    RegisterUserComponent,
    AdminUsersComponent,
    NewRoleComponent,
    FilterPipe,
    ModalComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
