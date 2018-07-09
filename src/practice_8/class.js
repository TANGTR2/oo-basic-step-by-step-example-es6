export default class Class{
    constructor(number){
        this.number = number;
    }
    
    leader;

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        if(student.klass.number === this.number)
            this.leader = student;
        else this.leader = undefined;
    }
}
