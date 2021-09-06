import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.css']
})
export class ActionCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public test() {
    alert("lol")
  }

}
