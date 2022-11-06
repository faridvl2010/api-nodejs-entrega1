import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes } from '@angular/router';
import { Router } from 'express';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AssignRolesAdminComponent } from './assign-roles-admin/assign-roles-admin.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  
  {path: 'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'assignRolesAdmin',component:AssignRolesAdminComponent},
  {path:'viewUser',component:ViewUserComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewUserComponent,
    AssignRolesAdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
