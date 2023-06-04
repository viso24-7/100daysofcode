import { ourBranches } from "../interfaces/bank.js";

export class ListTemplate{
    constructor(private container:HTMLUListElement){}
    render(client:ourBranches,heading:string,pos:'start' | 'end'){
          const li = document.createElement('li');
          const h4 = document.createElement('h4');
          h4.innerText = client.numberOf();
          li.append(h4);

          const p = document.createElement('p');
          p.innerText = heading;
          li.append(p);

          if(pos === 'start'){
            this.container.prepend(li)
          } else{
            this.container.append(li)
          }
    }
}