var Task = /** @class */ (function () {
    function Task(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    Task.prototype.showTaskInfo = function () {
        console.log("".concat(this.name) + " " + "".concat(this.status));
    };
    return Task;
}());
var user1 = new Task(1, "phu", "newbie");
user1.showTaskInfo();
