class Task{
    id: number;
    name: string;
    status: string;

    constructor(id: number, name:string,status: string){
        this.id = id;
        this.name= name;
        this.status= status;
    }

    showTaskInfo(){
        console.log(`${this.name}`+ " "+ `${this.status}`);
        
    }
}

class Student extends Task{
    idCard: number;

    // constructor(id: number, name:string,status: string,idCard:number){
    //     super();
    // }
}





let user1= new Task(1, "phu", "newbie")
user1.showTaskInfo();

