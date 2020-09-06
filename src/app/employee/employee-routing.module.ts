import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee.component';
import { HomeComponent } from './home/home.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';

const routes: Routes = [
    { path: 'employee' , component : EmployeeComponent, 
    
    children: [        
         { path: '', component: HomeComponent },
         { path: 'home', component: HomeComponent},
         { path: 'list-survey', component:ListSurveyComponent}
        //  { path: 'audit-log', component: AuditLogComponent },
        //  { path: 'employee-details', children: [
        //      { path: '', component: EmployeeDetailsComponent , pathMatch:'full'},
        //      { path: ':id/edit', component:EditEmployeeComponent}
        //     ] },
        //  { path: 'department', component: DepartmentComponent, children:[
        //      { path: 'add', component: AddDepartmentComponent },                          
        //      { path: ':id/edit', component: EditDepartmentComponent}
        //  ] },
        //  { path: 'designation', component: DesignationComponent, children: [
        //      { path: 'add', component: AddDesignationComponent},
        //      { path: ':id/edit',component:EditDesignationComponent }
        //  ] },
        //  { path: 'question',  children: [
            
        //         { path: '', component: QuestionComponent, pathMatch: 'full' },
        //         { path: 'add', component: AddQuestionComponent },
        //         { path: ':id/edit', component: EditQuestionComponent }
              
        //  ] },
        //  { path: 'survey-list', children:[
        //     { path:'' ,component: SurveyListComponent },
        //     { path:':id/detail',component:SurveyDetailComponent}
        //  ] 
        //   },
        //  { path: 'new-survey', component: NewSurveyComponent },
        //  { path: 'new-employee', component: NewEmployeeComponent},
        //  { path: 'report', component: ReportComponent }
    ]
},
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {

}