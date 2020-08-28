import { Option } from './option.model';

export class Question {
    public questionId : number;
    public question : string; 
    public option: Option[];   

    constructor(questionId:number,question:string,option:Option[]) {
        this.questionId = questionId;
        this.question = question;
        this.option = option;
    }
}