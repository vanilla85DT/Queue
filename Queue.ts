import { ArrayLinearList } from "./ArrayLinearlist" //เรียกใช้เพื่อ re use ใช้ใหม่ได้
class Queue{
     myList : ArrayLinearList
     constructor(){ //แทนfuncton constuctor
          this.myList = new ArrayLinearList() //เข้าไป arraylinearlist เพื่อสร้างตาม constuctor ที่กำหนดไว้ใน arraylinearlist
     }
     isEmpty() : boolean {
          return this.myList.isEmpty() //เรียกใช้ได้เลย
     }
     enqueue(theElement : string){
          //ใช้แบบไหนก็ได้ แล้วแต่เราจะเลือก
          //this.myList.addLast(theElement) //เรียกใช้เฉยๆ ต้องการส่งออก 1 ข้อมูลก็กำหนดค่าส่งออกเป็น string
          //this.myList.addData(this.myList.sizeList(),theElement) //เขียนแบบกำหนด size
          this.myList.addData(this.getsize(),theElement) 
     }
     dequeue(){ //ลบแบบคิวคือลบจากข้อมูลตัวแรกที่เข้ามา ตัวแรก
          this.myList.removeData(1)
     }
     getsize() : number{
          return this.myList.sizeList()
     }
     display(){
          this.myList.displayData()
     }
}
let myQueue : Queue = new Queue()
console.info(myQueue.isEmpty())
console.info("----- add data -----")
myQueue.enqueue('a')
myQueue.enqueue('b')
myQueue.enqueue('c')
myQueue.enqueue('d')
myQueue.display()
console.info("size of List = " +myQueue.getsize())

console.info("----- delete data -----")
myQueue.dequeue()
myQueue.display()
console.info("size of List = " +myQueue.getsize())

