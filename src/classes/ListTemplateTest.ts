import { HasFormatter } from "../interfaces/HasFormatterTest.js";

export class ListTemplates { 
  constructor(private container: HTMLUListElement) {};

  render(type: HasFormatter, heading: string, pos: 'start' | 'end') { //pos: rendered element is going to the start | end of the list
    const li: HTMLLIElement = document.createElement('li');
    const h4: HTMLHeadingElement = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);
    const p: HTMLParagraphElement = document.createElement('p');
    p.innerText = type.toFormat(); 
    li.append(p);
    //new element insert position (start|end of the list)
    if(pos === 'start') { 
      this.container.prepend(li);
    } else { 
      this.container.append(li);
    }
  }
};