import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.isAuthenticated().subscribe(authenticated => { 
      
      if (authenticated) {
        this.router.navigate(['dashboard'])
      }

    });

  }

}
