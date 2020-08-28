export class Employee {
    public id : number;
    public username: string;
    public email: string;
    public name: string;
    public phoneNumber: string;  
    public department: string;
    public designation: string;  

    constructor(id:number,username:string,email:string,name:string,phoneNumber:string,department:string,designation:string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.department = department;
        this.designation = designation;
    }

}
