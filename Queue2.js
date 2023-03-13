"use strict";
exports.__esModule = true;
var Linklist_1 = require("./Linklist"); //เรียกใช้เพื่อ reuse ใช้ใหม่ได้
var Queue2 = /** @class */ (function () {
    function Queue2() {
        this.myList = new Linklist_1.ChainNode; //เข้าไป arraylinearlist เพื่อสร้างตาม constuctor ที่กำหนดไว้ใน chainnode
    }
    Queue2.prototype.isEmpty = function () {
        return this.myList.isEmpty(); //เรียกใช้ได้เลย
    };
    Queue2.prototype.enqueue = function (theElement) {
        this.myList.addData(this.myList.sizeList(), theElement);
    };
    Queue2.prototype.dequeue = function () {
        this.myList.removeData(0);
    };
    Queue2.prototype.getsize = function () {
        return this.myList.sizeList();
    };
    Queue2.prototype.display = function () {
        this.myList.display();
    };
    return Queue2;
}());
var myQueue = new Queue2();
console.info(myQueue.isEmpty());
console.info("----- add data -----");
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
myQueue.enqueue('e');
myQueue.display();
console.info("size of List = " + myQueue.getsize());
console.info("----- delete data -----");
myQueue.dequeue();
myQueue.display();
console.info("size of List = " + myQueue.getsize());
