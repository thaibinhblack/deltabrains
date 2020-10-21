import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarActionUserComponent } from './user/sidebar-action-user/sidebar-action-user.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/ModuleUser/ModuleUserReducer';

const routes: Routes = [
  { path: '', component: ListUserComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    SidebarActionUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot({ user: userReducer }),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
