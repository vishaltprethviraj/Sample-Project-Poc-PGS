import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { QuestionComponent } from './question/question.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ReportComponent } from './report/report.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AuditLogComponent,
    EmployeeDetailsComponent,
    DepartmentComponent,
    DesignationComponent,
    SurveyListComponent,
    QuestionComponent,
    NewEmployeeComponent,
    ReportComponent,
    NewSurveyComponent,
    SidebarComponent,
    TopbarComponent    
  ],
  imports: [
    RouterModule,    
    AdminRoutingModule,
    SharedModule
  ],
  exports: [
    AdminComponent,
    HomeComponent,
    AuditLogComponent,
    EmployeeDetailsComponent,
    DepartmentComponent,
    DesignationComponent,
    SurveyListComponent,
    QuestionComponent,
    NewEmployeeComponent,
    ReportComponent,
    NewSurveyComponent,
    SidebarComponent,
    TopbarComponent
  ]
})
export class AdminModule {

}