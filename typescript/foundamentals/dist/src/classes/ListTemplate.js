"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = void 0;
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(client, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = client.numberOf();
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = heading;
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
exports.ListTemplate = ListTemplate;
//# sourceMappingURL=ListTemplate.js.map