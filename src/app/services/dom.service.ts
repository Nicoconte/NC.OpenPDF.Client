import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor() { }
  
  /**
   * Change the styles of every element we set in the array.
   * 
   * @param elements[] Object with name and styles as props
   * @param elements[].Object.name class or Id of the html element
   * @param elements[].Object.styles Styles to set
   * @param elements[].Object.delay Delay the style change for "x" seconds
   */
  public changeStyles(elements: any[]) {

    elements.forEach(e => {

      let nodes = document.querySelectorAll<HTMLElement>(e['name']);
      let styleKeys = Object.keys(e['styles']); 

      nodes.forEach(n => {
        styleKeys.forEach(sk => {
          if ('delay' in e) {
            setTimeout(() => {
              n.style.setProperty(sk, e['styles'][sk])
            }, e['delay'])
          } else {
            n.style.setProperty(sk, e['styles'][sk])
          }
        })
      })

    })
  }

}
