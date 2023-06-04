enum Nationality{country,id,name,surname} //Each one has number 0 1 2 3
interface Tourist<T>{
     numberOfTurist:number,
     details: Nationality.country,
     dates:T
}


let arr = ['viso',28,false];
arr[0] = 'Viso';
arr[2] = true;
//Tuple cannot change pos and type of value
let tup:[string,number,boolean] = ['viso',28,false];

let client:[number,string];  //tuple
client = [12,'vip']

/*
//Generics
const addUID = <T extends {name:string,age:number}>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj,uid}
}

const fOne = addUID({name:'viso',age:44});

console.log(fOne.age)

console.log(fOne.name)  //cannot be accessed 


interface Nationality<T>{
    country:string,
    id:T,
    name: string,
    surname:string
}

const me:Nationality<string[]> = {
    country:'Albania',
    id:['142405'],
    name:'Viso',
    surname:'veza'
}

*/

/*
import {ourBranches} from '../interfaces/bank.js'
import { ListTemplate } from './ListTemplate.js';
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
let doc:ourBranches;
list.render(doc,el.value,'start')

*/





/*
class VisoBank implements ourBranches{
    constructor(readonly numberOfBranches:string,public location:string,private employeers:number ){}

    aboutUs(){
        console.log(`Our bank ${this.numberOfBranches} of branches on ${this.location} locations and ${this.employeers} employeers`)
    }

    numberOf(){
        return this.numberOfBranches;
    }
}

const vb = new VisoBank('41','13 location',500);
console.log(vb)
*/

/*
class Invioce{
    constructor(readonly client:string,private details:string,public amount:number){ }

    format():string{
        return `${this.client} with ${this.details} has ${this.amount}`
    }
}    

const invoic1 = new Invioce('Viso','Albanian 28 years old',3000)
const invoic2 = new Invioce('Visi','Albanian 25 years old',30000)

let invoices:Invioce[] = [];

invoices.push(invoic1);
invoices.push(invoic2);


let arr1 = ['Cimi',4,45,false];


let arr:(number|string)[] = [];
arr.push(1);
arr.push('Cimi')


let studenti:object; // let student:{}
studenti = {
    id:12,
    name:'Lewis',
    age:35
}

type StrOrNum = string | number;

const getInf = (client:StrOrNum,item:string) => {
    console.log(`Our first client is ${client} and he bought ${item}`)
}

const OurClient = (client:StrOrNum,item:string) => {
    console.log(`Our best client is ${client} and he bought ${item}`)
}

//Function Signature
let maxWinning:Function;

maxWinning = (am:number,tax:number) => {
    return am - tax;
}

maxWinning();

let avarage: (grad1:number,grad2:number,grad3:number) => number;
avarage = (g1:number,g2:number,g3:number) => {
    return (g1 + g2 + g3 ) / 3;
}


//const b =  document.querySelector('.bosi')!; 
const b =  document.querySelector('.bosi') as HTMLAnchorElement;
const skills = document.querySelector('.skills') as HTMLInputElement;


//Interface
interface Client{
    id: number,
    name: string,
    surname:string,
    accountNumber:(number | string),
    amount: (a:number) => number
}

const cl1:Client = {
    id: 12045,
    name:'Viso',
    surname:'Veza',
    accountNumber:'1246a46s34a',
    amount: (am:number) => {
        return am;
    }
}

const ourClient = (cl:Client) => {
    console.log('first',cl.name)
}

ourClient(cl1)

*/