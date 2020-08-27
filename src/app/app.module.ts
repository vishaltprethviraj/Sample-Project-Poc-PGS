import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomeComponent } from './admin/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuditLogComponent } from './admin/audit-log/audit-log.component';
import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';
import { DepartmentComponent } from './admin/department/department.component';
import { DesignationComponent } from './admin/designation/designation.component';
import { SurveyListComponent } from './admin/survey-list/survey-list.component';
import { QuestionComponent } from './admin/question/question.component';
import { NewEmployeeComponent } from './admin/new-employee/new-employee.component';
import { ReportComponent } from './admin/report/report.component';
import { NewSurveyComponent } from './admin/new-survey/new-survey.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    AuditLogComponent,
    EmployeeDetailsComponent,
    DepartmentComponent,
    DesignationComponent,
    SurveyListComponent,
    QuestionComponent,
    NewEmployeeComponent,
    ReportComponent,
    NewSurveyComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
