import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { QuestionComponent } from './question/question.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ReportComponent } from './report/report.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { path: 'admin' , component : AdminComponent, 
    
    children: [        
         { path: '', component: HomeComponent },
         { path: 'home', component: HomeComponent},
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
},
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}