import Person from "../../src/practice_6/person.js";

export default class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        if(this.klass != null)
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
        else 
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
}
