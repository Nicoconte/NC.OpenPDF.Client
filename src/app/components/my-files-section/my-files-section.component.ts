import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-files-section',
  templateUrl: './my-files-section.component.html',
  styleUrls: ['./my-files-section.component.css']
})
export class MyFilesSectionComponent implements OnInit {

  constructor() { }

  public updateTable: boolean = false;
  public updateBar: boolean = false;

  ngOnInit(): void { }

  public sendUpdateToTable(event: any) {
    this.updateTable = event;

    //After miliseconds we change the value emitted by the EventEmitter. It will
    //trigger the ngOnChange cycle in a hacky way
    setTimeout(() => {
      this.updateTable = !this.updateTable;
    }, 500)
  }

  public sendUpdateToBar(event: any) {
    this.updateBar = event;

    setTimeout(() => {
      this.updateBar = !this.updateBar;
    }, 500)
  }

}
