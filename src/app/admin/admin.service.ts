import { Department } from './department/department.model';
import { Designation } from './designation/designation.model';
import { Employee } from './employee-details/employee.model';
import { Question } from './question/question.model';
import { Option } from './question/option.model';
import { Survey } from './survey-list/survey.model';
import { AuditLog } from './audit-log/audit-log.model';
import { Subject } from 'rxjs';

export class AdminService {
    
    //department section
    departmentChanged = new Subject<Department[]>();

    departments: Department[] = [
        new Department('Web Development'),
        new Department('Analytics'),
        new Department('Business'),
        new Department('Accountancy')
      ];

    getDepartment(){
        return this.departments.slice();    
    }

    getDepartments(index:number) {
      return this.departments[index];
    }

    addDepartment(department:Department) {
      this.departments.push(department);
      this.departmentChanged.next(this.departments.slice());
    }

    updateDepartment(index:number, newDepartment:Department) {
      this.departments[index] = newDepartment;
      this.departmentChanged.next(this.departments.slice());
    }

    deleteDepartment(index:number) {
      this.departments.splice(index,1);
      this.departmentChanged.next(this.departments.slice());
    }
    //designation section

    designationChanged = new Subject<Designation[]>();
    designations: Designation[] = [
        new Designation('Regional Director'),
        new Designation('System Architect'),
        new Designation('Full Stack Developer'),
        new Designation('Junior Software Engineer'),
        new Designation('Software Engineer Trainee'),
        new Designation('Accountant'),
        new Designation('Business Analyst')
      ];
    
    getDesignation() {
      return this.designations.slice();
    }

    getDesignations(index:number) {
      return this.designations[index];
    }

    addDesignation(newDesignation:Designation) {
      this.designations.push(newDesignation);
      this.designationChanged.next(this.designations.slice());
    }

    updateDesignation(index:number,newDesignation:Designation) {
      this.designations[index] = newDesignation;
      this.designationChanged.next(this.designations.slice());
    }

    deleteDesignation(index:number) {
      this.designations.splice(index,1);
      this.designationChanged.next(this.designations.slice());
    }
    //employee section

    employees: Employee[] =[
        new Employee(1,'raju@1234','raju@gmail.com','Rajesh','9895476309',[this.departments[0]],[this.designations[2]]),
        new Employee(2,'sanju_2310','sanju@gmail.com','Sanjay','8089367521',[this.departments[2]],[this.designations[6]])
      ];

    getEmployee() {
        return this.employees.slice();
    }


    //audit log section

    auditLogs: AuditLog[] = [
      new AuditLog(1,[this.employees[0]],'Home','Logged In','24-08-2020 11:50'),
      new AuditLog(2,[this.employees[1]],'New Survey','Create Survey','25-08-2020 11:50'),
    ]

    getAuditLog() {
      return this.auditLogs.slice();
    }
    //question section

    questions:Question[] = [
      new Question(1,"What other apps would you like to see us offer?",[
        new Option(1,'Survey App'),
        new Option(2,'Shopping App'),
        new Option(3,'Learning App')
      ]),
      new Question(2,"If you could change just one thing about our product, what would it be?",[
        new Option(4,'Reduce the Price'),
        new Option(5,'Improve the Quality'),
        new Option(6,'Fast and Effecient Maintainance')
      ]),
      new Question(3,"What are you using this product for?",[
        new Option(7,'Personal'),
        new Option(8,'Business'),
        new Option(9,'Social')
      ]),
      new Question(4,"How strongly do you agree with following statement: company's payment proceess is simple",[        
        new Option(11,'Agree'),
        new Option(12,'Disagree'),        
        new Option(14,'Can\'t say'),
      ]),

    ];

    getQuestion() {
      return this.questions.slice();
    }

    //survey section
    
    surveys: Survey[] = [
      new Survey(1,'Product Survey','This survey is for knowing the user\'s take on various aspects of our product',
                 'Thank you for your valuable suggestion','25-08-2020','27-08-2020',[
                   this.questions[0],
                   this.questions[1],
                   this.questions[2]
                 ])
    ];

    getSurvey() {
      return this.surveys.slice();
    }

}