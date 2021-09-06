import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-files-section',
  templateUrl: './pdf-files-section.component.html',
  styleUrls: ['./pdf-files-section.component.css']
})
export class PdfFilesSectionComponent implements OnInit {

  public cards: any[] = [
    {
      title: 'Merge PDF',
      description: 'Merge 2 or more PDF in the order you want easly and fast!'
    },
    {
      title: 'Encrypt PDF',
      description: 'Secure your PDF file just putting a password!'
    },
    {
      title: 'Decrypt PDF',
      description: 'Want to take off the password of your PDF, lets us do the hard work!'
    },
    {
      title: 'Split PDF',
      description: 'Split your PDF by range'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
