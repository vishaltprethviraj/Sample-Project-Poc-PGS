import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './admin/home/home.component';
import { AuditLogComponent } from './admin/audit-log/audit-log.component';
import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';
import { DepartmentComponent } from './admin/department/department.component';
import { DesignationComponent } from './admin/designation/designation.component';
import { QuestionComponent } from './admin/question/question.component';
import { SurveyListComponent } from './admin/survey-list/survey-list.component';
import { NewSurveyComponent } from './admin/new-survey/new-survey.component';
import { NewEmployeeComponent } from './admin/new-employee/new-employee.component';
import { ReportComponent } from './admin/report/report.component';

const appRoutes : Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'audit-log', component: AuditLogComponent },
    { path: 'employee-details', component: EmployeeDetailsComponent },
    { path: 'department', component: DepartmentComponent },
    { path: 'designation', component: DesignationComponent },
    { path: 'question', component: QuestionComponent },
    { path: 'survey-list', component: SurveyListComponent },
    { path: 'new-survey', component: NewSurveyComponent },
    { path: 'new-employee', component: NewEmployeeComponent},
    { path: 'report', component: ReportComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}