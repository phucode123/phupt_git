var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Task));
var Monkey = /** @class */ (function () {
    function Monkey() {
    }
    Monkey.prototype.talk = function () {
        console.log("meow");
    };
    return Monkey;
}());
var uuble = ['ca con', 4, 'vit con'];
console.log(uuble);
var Women = /** @class */ (function () {
    function Women() {
    }
    Women.prototype.talk = function () {
        var temp = 1 + 2;
        console.log(temp);
    };
    return Women;
}());
var Men = /** @class */ (function () {
    function Men() {
    }
    Men.prototype.talk = function () {
        var temp = 3 - 2;
        console.log(temp);
    };
    return Men;
}());
var a = new Men();
var b = new Women();
a.talk();
b.talk();
