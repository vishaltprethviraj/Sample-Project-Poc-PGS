import { Question } from '../question/question.model';

export class Survey {    
    public name: string;
    public description: string;
    public thankYouMessage: string;
    public startDate: string;
    public endDate: string;   
    public question: Question[];
    
    constructor(name:string,description:string,
                thankYouMessage:string,startDate:string,endDate:string,question:Question[]
            ) {                
                this.name = name;
                this.description = description;
                this.thankYouMessage = thankYouMessage;
                this.startDate = startDate;
                this.endDate = endDate;
                this.question = question;
             }
}