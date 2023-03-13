import { LinearList } from "./LinearList"
export class Nodedata{ //have two section is element and next
    element : string | null
    next : Nodedata | null //ชี้ไปโหนดต่อไป ไม่ก็ไม่มีคืือ null //กรณีdoubly linled
    // element1 : string | null// element2 : string | null
    // Lnext : Nodedata | nul // Rnext : Nodedata | nul
    constructor(elem : string | null = null, n : Nodedata | null = null){
    //เป็นการกำหนดตัวแปรเริ่มต้นภายใน class //มีพารามิเตอรื 2 ตัว มีค่าตามที่กำหนด //กำหนดว่าถ้าไม่ใส่ให้มีค่าเป็น null แบบนี้คือ overlode เพราะ = คือค่าดีฟ้อล
        this.element = elem
        this.next = n
    }
}
export class ChainNode implements LinearList {
    firstNode : Nodedata | null
    size : number 
    constructor(){ //มี datamem ต้องมีconsturctor 
        this.firstNode = null
        this.size = 0
    }
    isEmpty() : boolean{
        if(this.size == 0)
            return true
        else 
            return false
    }
    sizeList() : number{
        return this.size
    }
    getData(index : number) : string | null{ //index ไว้เช็คใส่ค่า
        // let currentNode : Nodedata | null
        // currentNode = this.firstNode
        if(index >= 0 && index < this.size){
            let currentNode : Nodedata | null
            currentNode = this.firstNode
            for(let i = 0; i < index; i++){
                currentNode = currentNode!.next
            }
            return currentNode!.element
        }
        else
            return index + " = error can not find letters"
        
    }
    indexOf(theElement : string) : number{
        let currentNode : Nodedata | null
        currentNode = this.firstNode
        let index : number = 0
        //ไม่รู้จำนวนรอบในการวนลูปที่ไม่แน่นอน ใช้ while buz ถ้าจะใช้ for ต้องรู้จำนวนในการเดินทางแบบแน่นอน
        while(currentNode != null && currentNode.element != theElement) //เช็คว่าต้องไม่เท่ากับ null snd theelement
        {
            currentNode = currentNode.next //เนื่องจากมีการเช็คแล้วว่าไม่ใช่ null
            index++
        }
        if(currentNode == null) //ถ้าหาไม่เจอตามที่ในโหนดมีค่าจะส่งออก -1
            return -1
        else
            return index //เมื่อเจอแล้วค่าออกตามตำแหน่งของ
    }
    removeData(index : number) : string | null{ //หลักการเดียวกับ add
        if(index >= 0 && index < this.size){
            let beforeRemove : Nodedata | null
            let afterRemove : Nodedata | null
            beforeRemove = this.firstNode
            if(index == index){
                afterRemove = this.firstNode
                this.firstNode = this.firstNode!.next
                this.size--
                return afterRemove!.element
            }
            else{
                for(let i = 0; i < index - 1; i++){
                    beforeRemove = beforeRemove!.next     
                }
                afterRemove = beforeRemove!.next
                beforeRemove!.next = beforeRemove!.next!.next 
                this.size--
                return afterRemove!.element        
                }
            }
        else
            return index + " = error index out of bounds"
    }
    addData(index : number, theElement : string) : void{ 
            if(index == 0){
                this.firstNode = new Nodedata(theElement,this.firstNode) //สร้างNodeมาหนึ่งตัวมีค่าตามที่กำหนด
            }
            else
            {
                let beforeNode : Nodedata | null //เริ่ม
                beforeNode = this.firstNode //สร้างbeforenode ชี้ไปที่firstnode
                for(let i = 0; i < index - 1; i++){
                    beforeNode = beforeNode!.next //ถ่ายอมให้มีค่าเป็นnull=! คือยอมให้เป็นค่าnullแต่ไม่ยอมให้มันเป็นค่าอะไรก็ได้
                    //ส่วน?=ยอมให้เป็นทุกอย่าง เป็นค่าเริ่มต้นที่กำหนดมาให้
                }
                beforeNode!.next = new Nodedata(theElement,beforeNode!.next) 
                //สร้างโหนด เชือมตัวต่อและตัวก่อน แทนค่าลงในตัวก่อนคือ beforenode!.next
            }
            this.size++
    }
        
    display(){ // let currentNode : Nodedata | null //สร้างเพื่อเริ่มกำหนดให้เป็น firstnode // currentNode = this.firstNode
        for(let i = 0; i < this.size; i++){ 
            console.info(this.getData(i)) //เขียนแบบไหนก้ได้ สามารถนำ get มาใช้ได้เหมือนกัน
            // console.info(currentNode!.element)
            // currentNode = currentNode!.next
        }
    }
}
