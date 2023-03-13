interface LinearList{ //การคอมพลายไม่ให้เกิด error เท่านั้น run ไม่เกิดผลลัพ
    // size : Number //ประกาศตัวแปร data mem in class
    isEmpty : () => boolean //ชนิดข้อมูลในการ return กลับ
    sizeList : () => number
    getData : (index : number) => string
    indexOf : (theElement : string) => number
    removeData : (index : number) => string
    addData : (index : number, theElement : string) => void //แทนกรณีที่ไม่มีการ return ผลลัพกลับไป
}
export class ArrayLinearList implements LinearList{ //เพื่อเรียกมาใช้งานmethod have six //not  have functionName buz its class

    size : number //data mem
    element : string[] //data mem
    constructor(){ //ถูกเรียกใช้เมื่อสร้างตัวแปรของ class ใช้กำหนดค่าเริ่มต้นของ data member 
        this.size = 0 //ตัวระบุว่าเป็นค่าของdata mem
        this.element = []
    }
    isEmpty() :  boolean { //cherk ว่ามีข้อมูลมั้ย ใช้ size เช็ค
        if(this.size == 0)
            return true
        else 
            return false
    }
    sizeList() : number{ //ขนาดลิส
        return this.size
    } 
    getData(index : number) : string{ //ระบุข้อมูลในตำแหน่งที่เลือก 0 --> a
        if(index >= 0 && index < this.size) // let outofdata : string // outofdata = this.element[index]
            return this.element[index] 
        else 
            return index+ 'Error index out of Bounds'
    }        
    indexOf(theElement: string) : number{ //บอกตำแหน่งข้อมูล
        for(let i = 0; i < this.size; i++)
            if(theElement == this.element[i])
                return i
            return -1
    }
    removeData(index: number) : string{ //ลบ
        if(index >= 0 && index < this.size){
            let dataRemove : string
            dataRemove = this.element[index]
            for(let i = index + 1; i < this.size; i++){ 
                this.element[i-1] = this.element[i]
            }
            this.element[this.size-1] = "" //ลดจำนวนขนาดของ size
            this.size-- //size ก้ต้องลดลงตามการ remove
            return dataRemove
        }
        else
            return index + " = error index out of bounds"
    }
    addData(index: number, theElement: string){ //เพิ่ม //ไม่มีการส่งค่ากลับไม่มีการ return
        if(index >= 0 && index <= this.size){ //ไว้เช็คindexต้องไม่น้อยกว่า0ไม่ต่ำกว่าsize
            for(let i = this.size - 1; i >= index; i--){
                this.element[i+1] = this.element[i]
            }
            this.element[index] = theElement
            this.size++
        }
    }
    addLast(theElement : string){
        this.element[this.size] = theElement
        //this.size = this.size + 1 //same this.size++ 
        this.size++
    }
    displayData(){
        for(let i = 0; i < this.size; i++)
            console.info(this.element[i])
    }
}
