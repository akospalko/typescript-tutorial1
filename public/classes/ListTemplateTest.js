export class ListTemplates {
    constructor(container) {
        this.container = container;
    }
    ;
    render(type, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = type.toFormat();
        li.append(p);
        //new element insert position (start|end of the list)
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
;
