import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public sidebarState: boolean = false;

  constructor(private router: Router,private userService: UserService, private toast: ToastrService) { }
  
  ngOnInit(): void {
    this.userService.isAuthenticated().subscribe(authenticated => {
      if (!authenticated) {
        this.router.navigate(["signin"])
      }
    })
  }

  public open() {
    this.sidebarState = !this.sidebarState;
  }
  
}
