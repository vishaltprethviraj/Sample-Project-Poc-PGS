import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { SurveyQuestionComponent } from './list-survey/survey-question/survey-question.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    ListSurveyComponent,
    SurveyQuestionComponent    
  ],
  imports: [
    RouterModule,    
    EmployeeRoutingModule,
    ReactiveFormsModule,    
    SharedModule,   
    FormsModule 
  ],
  exports: [
    EmployeeComponent,
    HomeComponent,    
    SidebarComponent,
    TopbarComponent,     
  ]
})
export class EmployeeModule {

}