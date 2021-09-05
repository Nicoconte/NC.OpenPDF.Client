import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-files-section',
  templateUrl: './my-files-section.component.html',
  styleUrls: ['./my-files-section.component.css']
})
export class MyFilesSectionComponent implements OnInit {

  constructor() { }

  public updateRequired: boolean = false;

  ngOnInit(): void {
  }

  public updateTable(event: any) {
    this.updateRequired = event;
  }

}
