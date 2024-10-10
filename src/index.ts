class Task {
    id: number;
    name: string;
    status: string;

    constructor(id: number, name: string, status: string) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    showTaskInfo() {
        console.log(`${this.name}` + " " + `${this.status}`);

    }
}
class Student extends Task {
    idCard: number;

    // constructor(id: number, name:string,status: string,idCard:number){
    //     super();
    // }
}





// let user1 = new Task(1, "phu", "newbie")
// user1.showTaskInfo();


interface Man {
    id: string;
    talk(message:string): void
}

interface Animal {
   // id: number
    talk():void
}

class Monkey implements Man, Animal{
    id: string;
    talk(): void {
        console.log("meow");
    }
}

let uuble:any= ['ca con', 4, 'vit con']
console.log(uuble);

// const mon1 = new Monkey
// mon1.talk();

interface Mans {
    talk():void
}

class Women implements Mans{
talk(): void {
    const temp:number = 1+2;
    console.log(temp);
    
}
}
class Men implements Mans{
talk(): void {
    const temp:number = 3-2;
    console.log(temp);
}
}

let a = new Men();
let b = new Women();

a.talk()
b.talk()