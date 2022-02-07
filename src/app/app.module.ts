import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { TodoCardComponent } from './todos/todo-card/todo-card.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FilterPipe } from './filter.pipe';

const routes = [
  {
  path:'',
  redirectTo:'Home',
  pathMatch:'full'
},
  {
path :'Home',
component : HomeComponent,
},{
  path :'Users',
  component : UsersComponent,
},
{
  path :'Todos',
  component : TodosComponent,
},
{
  path :'Login',
  component : LoginComponent,
},
{
  path :'Register',
  component : RegisterComponent,
},
{
  path :'Login/Register',
  component : RegisterComponent,
},
{
  path :'Register/Login',
  component : LoginComponent,
},
 {
  path:'**',
  component:NotFoundComponent,
} 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    TodosComponent,
    UserCardComponent,
    TodoCardComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,

  ],
  imports: [BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule,MatProgressSpinnerModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
