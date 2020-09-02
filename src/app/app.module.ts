import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { AddDepartmentComponent } from './add-department/add-department.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,             
  ],
  imports: [
    BrowserModule,     
    AppRoutingModule,
    AdminModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
