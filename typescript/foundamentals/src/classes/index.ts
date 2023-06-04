console.log('Hi typescript')

let age:number=20;
if(age < 15)
    age+=10;

    let number:number[] = [5,6,7];
    number.forEach(n => n.toExponential(2))

    let user:[number,string] = [1,'Cimi'] //tuples

    //Pascal Case
    enum Size {Small=32,Medium=39,Large=45}
    let mySize:Size = Size.Medium;
    console.log(mySize)

    //Function
    //We give the taskYear a default value
    function calculateTask(income:number,taskYear=2022):number{ //means that we will return number value and :void will not return anything
        if(taskYear < 2022)
        return income * 0.4;
        return income * 0.2
    }

    calculateTask(20000,2021);


    //Object

    //Allias
    type Student = {           
        readonly id:number,
        name: string,
        finished: (year:number) => void
   }
    let student: Student = {
        id:1,
        name:'',
        finished: (year:number) => {
            console.log(year)
        }};
  
    //Union Types
   function milesToKm(miles: number | string):number{
      //Narrowing
      if(typeof miles === 'number')
        return miles * 1.6;
       else
        return parseInt(miles) * 1.6
   }

   //We can call in 2 ways
   milesToKm(50);
   milesToKm('60miles');

  
   type Selectable = {
    select: () => void
   }

   type Draggable = {
    drag: () => void
   }

    //Intersection types
    type DragASel = Draggable & Selectable;
    let ourtext: DragASel = {
        select: () => {},
        drag: () => {}
    }

    //Literal (exact or specific val)
    type Quantity = 50 | 100;
    let q:Quantity = 100;
    
    //null or undefined
    function sayHi(greet:string){
        console.log(greet.toLocaleLowerCase())
    }

    sayHi('null')