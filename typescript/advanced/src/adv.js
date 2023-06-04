/*
//Remove a member of union type
export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType;

type WithoutC = RemoveC<Letters>;
let b:WithoutC = "a";
console.log(b)


*/
/*
//When to use generics
interface Engine{
      motor: string
}

interface ModelCar{
    name: string,
    model: string
}


// const getCarName = (item:Engine): {motor:string} => {
//    return {motor: item.motor }
// }

// console.log(getCarName({motor:'hybrid'}))

//Generics when we dont know what interface will extend
type EngineOrModelCar<T extends Engine | ModelCar> = T extends Engine ? {motorCar:string} : {typeOfCar:string}
const getCarName = <TItem extends Engine | ModelCar>(item:TItem): EngineOrModelCar<TItem>=> {
   if('motor' in item){
    return  {motorCar:item.motor} as EngineOrModelCar<TItem>
   }

   return {typeOfCar: `${item.name} ${item.model}`} as EngineOrModelCar<TItem>
}

const result = getCarName({
    motor: '365ferr'
});

const result2 = getCarName({
    name: 'bugati',
    model: 'f142'
});
console.log(result)

console.log(result2)
/*
//Mapped Types
type Student = "good" | "bad";
type TypeOfStudent<T> = {
    [S in keyof T]: T[S]
}

type NewStudentType = TypeOfStudent<{effort:'trying';pay:'money'}>;


type Pick1<T,Student extends keyof T> = {
    [S in Student]: T[S]
}

type NewStudentType2 = Pick1<{effort:'trying';pay:'money'},'effort' | 'pay'>


*/
/*
//Conditional Types
type Charachter = {
    type: "strong" | "stubborn" | "soft";
}

type Looking = {
    type: "handsome" | "ugly"
}

type Men = {
    contact: Charachter
}

type Women = {
    contact: Looking
}

type Contact<T> = T extends {contact:unknown} ? T["contact"] : never;
type ManImpression = Contact<Men>

const goodImpress: ManImpression = {
    type: "strong"
}

const badImpres: Contact<Women>= {
    type: "ugly"
}



*/
//Extra Utility Function
//Its a union types when trip  either can be an {origin:{}} or originUuid
/*
type Trip = |
    {
      origin: {
        uuid: string;
        city: string;
        state:string;

      }
   }
   | {
     originUuid:string
   }

type TripWithOriginRef = Extract<Trip,{originUuid:string}>
type TrpWithOriginWhole = Extract<Trip,{origin:{uuid:string}}>
const tripOriginRef:TripWithOriginRef = {originUuid:'1245'}

const tripOriginWhole:TrpWithOriginWhole = {
    origin:{
        uuid:"1245",
        city:"Tirana",
        state:"Albania"
    }
}





type Trip = |
    {
      origin: {
        uuid: string;
        city: string;
        state:string;

      }
   }
   | {
     originUuid:string
   }
type TripWithOriginRef = Extract<Trip,{originUuid:string}>;
const tripOriginRef = {originUuid:'101'}
const tripOriginWhole = {
    origin:{
        uuid:"1245",
        city:"Tirana",
        state:"Albania"
    }
}

const hasOriginRef = (trip:Trip): trip is TripWithOriginRef => {
    return 'originUuid' in trip;
}

const result = [tripOriginRef,tripOriginWhole].filter(hasOriginRef)
console.log(result)
*/
/*
//Lookup types
type Route = {
    origin: {
        city: string;
        state:string;
        zipcode:number;
        departureFee:number;
    },
    destination:{
        city:string;
        state:string;
        zipcode:number;
        arrivalFee: number;
    }
}

type Origin = Route["origin"];
type Destination = Route["destination"];

const tripOrigin:Origin = {
    city:'New York',
    state:'USA',
    zipcode: 12402,
    departureFee:15
}

const tripDestination:Destination = {
    city:'Vienna',
    state:'Austria',
    zipcode: 1200,
    arrivalFee:5
}

export enum TaskType {
    feature = 'feature',
    bug = 'bug'
}

//Generics
type Task<T =TaskType> = {
     name: string,
     type: T
}

const whatever:Task = {name:'Simple log in',type: TaskType.feature};
whatever.type = TaskType.bug  //This is fine- any of the enum values work

type FeatureTask = Task<TaskType.feature>;

const feature:FeatureTask = {name:'Simple log in',type:TaskType.feature}
feature.type = TaskType.bug;

const invalid:FeatureTask = {name:'Simple log in',type:TaskType.bug}

/*
function assertIsNumber(val:any):asserts val is number{
    if(typeof val !== 'number'){
        throw new Error('Not a number')
    }
}

function squareRoot(input:any){
    assertIsNumber(input);

    return Math.sqrt(input)
}


console.log(squareRoot(16));

*/ 
