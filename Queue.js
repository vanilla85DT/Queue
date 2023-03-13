"use strict";
exports.__esModule = true;
var ArrayLinearlist_1 = require("./ArrayLinearlist"); //เรียกใช้เพื่อ re use ใช้ใหม่ได้
var Queue = /** @class */ (function () {
    function Queue() {
        this.myList = new ArrayLinearlist_1.ArrayLinearList(); //เข้าไป arraylinearlist เพื่อสร้างตาม constuctor ที่กำหนดไว้ใน arraylinearlist
    }
    Queue.prototype.isEmpty = function () {
        return this.myList.isEmpty(); //เรียกใช้ได้เลย
    };
    Queue.prototype.enqueue = function (theElement) {
        //ใช้แบบไหนก็ได้ แล้วแต่เราจะเลือก
        //this.myList.addLast(theElement) //เรียกใช้เฉยๆ ต้องการส่งออก 1 ข้อมูลก็กำหนดค่าส่งออกเป็น string
        //this.myList.addData(this.myList.sizeList(),theElement) //เขียนแบบกำหนด size
        this.myList.addData(this.getsize(), theElement);
    };
    Queue.prototype.dequeue = function () {
        this.myList.removeData(1);
    };
    Queue.prototype.getsize = function () {
        return this.myList.sizeList();
    };
    Queue.prototype.display = function () {
        this.myList.displayData();
    };
    return Queue;
}());
var myQueue = new Queue();
console.info(myQueue.isEmpty());
console.info("----- add data -----");
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
myQueue.display();
console.info("size of List = " + myQueue.getsize());
console.info("----- delete data -----");
myQueue.dequeue();
myQueue.display();
console.info("size of List = " + myQueue.getsize());
