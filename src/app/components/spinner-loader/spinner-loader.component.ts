import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.css']
})
export class SpinnerLoaderComponent implements OnInit {

  @Input() isLoading: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = changes['isLoading'].currentValue;
    this.changeState(this.isLoading);
  }
  
  public changeState(state: boolean) {
    if (state) {
      document.getElementById('spinner-loader')!.style.display = 'block'
    } else {
      document.getElementById('spinner-loader')!.style.display = 'none'
    }
  }

}
