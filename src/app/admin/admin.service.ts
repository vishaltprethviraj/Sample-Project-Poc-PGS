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

    employeeChanged = new Subject<Employee[]>();

    employees: Employee[] =[
        new Employee('raju@1234','raju@gmail.com','Rajesh','9895476309',[this.departments[0]],[this.designations[2]]),
        new Employee('sanju_2310','sanju@gmail.com','Sanjay','8089367521',[this.departments[2]],[this.designations[6]])
      ];

    getEmployee() {
        return this.employees.slice();
    }

    getEmployees(index:number) {
      return this.employees[index];
    }

    addEmployee(employee:Employee) {
      this.employees.push(employee);      
      this.employeeChanged.next(this.employees.slice());
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

    questionChanged = new Subject<Question[]>();

    questions:Question[] = [
      new Question("What other apps would you like to see us offer?",[
        new Option('Survey App'),
        new Option('Shopping App'),
        new Option('Learning App')
      ]),
      new Question("If you could change just one thing about our product, what would it be?",[
        new Option('Reduce the Price'),
        new Option('Improve the Quality'),
        new Option('Fast and Effecient Maintainance')
      ]),
      new Question("What are you using this product for?",[
        new Option('Personal'),
        new Option('Business'),
        new Option('Social')
      ]),
      new Question("How strongly do you agree with following statement: company's payment proceess is simple",[        
        new Option('Agree'),
        new Option('Disagree'),        
        new Option('Can\'t say'),
      ]),

    ];

    getQuestion() {
      return this.questions.slice();
    }

    getQuestions(index:number) {
      return this.questions[index];
    }

    addQuestion(question:Question) {
      this.questions.push(question);
      this.questionChanged.next(this.questions.slice());
    }

    updateQuestion(index:number,newQuestion:Question) {
      this.questions[index] = newQuestion;      
      this.questionChanged.next(this.questions.slice());
    }

    deleteQuestion(index:number) {
      this.questions.splice(index,1),
      this.questionChanged.next(this.questions.slice());
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