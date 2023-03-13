import { ChainNode } from "./Linklist"//เรียกใช้เพื่อ reuse ใช้ใหม่ได้
class Queue2{
     myList : ChainNode
     constructor(){ //แทนfuncton constuctor
          this.myList = new ChainNode  //เข้าไป arraylinearlist เพื่อสร้างตาม constuctor ที่กำหนดไว้ใน chainnode
     }
     isEmpty() : boolean {
          return this.myList.isEmpty() //เรียกใช้ได้เลย
     }
     enqueue(theElement : string) : void{
          this.myList.addData(this.myList.sizeList(),theElement)
     }
     dequeue(){ //ลบแบบคิวคือลบจากข้อมูลตัวแรกที่เข้ามา ตัวแรก
          this.myList.removeData(0)

     }
     getsize() : number{
          return this.myList.sizeList()
     }
     
     display(){
          this.myList.display()
     }
}
let myQueue : Queue2 = new Queue2()
console.info(myQueue.isEmpty())
console.info("----- add data -----")
myQueue.enqueue('a')
myQueue.enqueue('b')
myQueue.enqueue('c')
myQueue.enqueue('d')
myQueue.enqueue('e')
myQueue.display()
console.info("size of List = " +myQueue.getsize())
console.info("----- delete data -----")
myQueue.dequeue()
myQueue.display()
console.info("size of List = " +myQueue.getsize())

