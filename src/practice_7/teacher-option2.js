import Person from "../../src/practice_7/person.js";

export default class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        if(this.klass != null)
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`;
        else 
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    introduceWith(student){
        if(student.klass.number === this.klass.number)
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
        else 
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
    }
}
