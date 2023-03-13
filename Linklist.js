"use strict";
exports.__esModule = true;
exports.ChainNode = exports.Nodedata = void 0;
var Nodedata = /** @class */ (function () {
    // element1 : string | null// element2 : string | null
    // Lnext : Nodedata | nul // Rnext : Nodedata | nul
    function Nodedata(elem, n) {
        if (elem === void 0) { elem = null; }
        if (n === void 0) { n = null; }
        //เป็นการกำหนดตัวแปรเริ่มต้นภายใน class //มีพารามิเตอรื 2 ตัว มีค่าตามที่กำหนด //กำหนดว่าถ้าไม่ใส่ให้มีค่าเป็น null แบบนี้คือ overlode เพราะ = คือค่าดีฟ้อล
        this.element = elem;
        this.next = n;
    }
    return Nodedata;
}());
exports.Nodedata = Nodedata;
var ChainNode = /** @class */ (function () {
    function ChainNode() {
        this.firstNode = null;
        this.size = 0;
    }
    ChainNode.prototype.isEmpty = function () {
        if (this.size == 0)
            return true;
        else
            return false;
    };
    ChainNode.prototype.sizeList = function () {
        return this.size;
    };
    ChainNode.prototype.getData = function (index) {
        // let currentNode : Nodedata | null
        // currentNode = this.firstNode
        if (index >= 0 && index < this.size) {
            var currentNode = void 0;
            currentNode = this.firstNode;
            for (var i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode.element;
        }
        else
            return index + " = error can not find letters";
    };
    ChainNode.prototype.indexOf = function (theElement) {
        var currentNode;
        currentNode = this.firstNode;
        var index = 0;
        //ไม่รู้จำนวนรอบในการวนลูปที่ไม่แน่นอน ใช้ while buz ถ้าจะใช้ for ต้องรู้จำนวนในการเดินทางแบบแน่นอน
        while (currentNode != null && currentNode.element != theElement) //เช็คว่าต้องไม่เท่ากับ null snd theelement
         {
            currentNode = currentNode.next; //เนื่องจากมีการเช็คแล้วว่าไม่ใช่ null
            index++;
        }
        if (currentNode == null) //ถ้าหาไม่เจอตามที่ในโหนดมีค่าจะส่งออก -1
            return -1;
        else
            return index; //เมื่อเจอแล้วค่าออกตามตำแหน่งของ
    };
    ChainNode.prototype.removeData = function (index) {
        if (index >= 0 && index < this.size) {
            var beforeRemove = void 0;
            var afterRemove = void 0;
            beforeRemove = this.firstNode;
            if (index == index) {
                afterRemove = this.firstNode;
                this.firstNode = this.firstNode.next;
                this.size--;
                return afterRemove.element;
            }
            else {
                for (var i = 0; i < index - 1; i++) {
                    beforeRemove = beforeRemove.next;
                }
                afterRemove = beforeRemove.next;
                beforeRemove.next = beforeRemove.next.next;
                this.size--;
                return afterRemove.element;
            }
        }
        else
            return index + " = error index out of bounds";
    };
    ChainNode.prototype.addData = function (index, theElement) {
        if (index == 0) {
            this.firstNode = new Nodedata(theElement, this.firstNode); //สร้างNodeมาหนึ่งตัวมีค่าตามที่กำหนด
        }
        else {
            var beforeNode = void 0; //เริ่ม
            beforeNode = this.firstNode; //สร้างbeforenode ชี้ไปที่firstnode
            for (var i = 0; i < index - 1; i++) {
                beforeNode = beforeNode.next; //ถ่ายอมให้มีค่าเป็นnull=! คือยอมให้เป็นค่าnullแต่ไม่ยอมให้มันเป็นค่าอะไรก็ได้
                //ส่วน?=ยอมให้เป็นทุกอย่าง เป็นค่าเริ่มต้นที่กำหนดมาให้
            }
            beforeNode.next = new Nodedata(theElement, beforeNode.next);
            //สร้างโหนด เชือมตัวต่อและตัวก่อน แทนค่าลงในตัวก่อนคือ beforenode!.next
        }
        this.size++;
    };
    ChainNode.prototype.display = function () {
        for (var i = 0; i < this.size; i++) {
            console.info(this.getData(i)); //เขียนแบบไหนก้ได้ สามารถนำ get มาใช้ได้เหมือนกัน
            // console.info(currentNode!.element)
            // currentNode = currentNode!.next
        }
    };
    return ChainNode;
}());
exports.ChainNode = ChainNode;
