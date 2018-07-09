import Person from "../../src/practice_9/person.js";

export default class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }

    introduce(){
        if(this.klass.leader != undefined){
            if(this.klass.leader.id === this.id)
                return `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
            else
                return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        }
        else
            return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        
    }
}

