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

const appRoutes:Routes=[
  
  {path: 'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'assignRolesAdmin',component:AssignRolesAdminComponent},
  {path:'viewUser',component:ViewUserComponent},
  {path:'registerUser',component:RegisterUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewUserComponent,
    AssignRolesAdminComponent,
    HomeComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
