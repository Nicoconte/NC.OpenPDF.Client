import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor() { }
  
  /**
   * Change the styles of every element we set in the array.
   * Ex:
   * [{ name: "", styles: {} }]
   * 
   * @param elements Object with name and styles as props
   */
  public changeStyles(elements: any[]) {

    elements.forEach(e => {

      let nodes = document.querySelectorAll<HTMLElement>(e['name']);
      let styleKeys = Object.keys(e['styles']); 

      nodes.forEach(n => {
        styleKeys.forEach(sk => {
          n.style.setProperty(sk, e['styles'][sk])
        })
      })

    })
  }

}
