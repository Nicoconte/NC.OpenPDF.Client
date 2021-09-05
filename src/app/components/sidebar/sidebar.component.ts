import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomService } from 'src/app/services/dom.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  @Input() isOpen: boolean = false;

  constructor(private router: Router, private userService: UserService, private domService: DomService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.setSidebarStylesByState(false); // Initial Styles (By default)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen = changes['isOpen'].currentValue;
  
    this.setSidebarStylesByState(this.isOpen);
  
  }
  
  
  public setSidebarStylesByState(state: boolean) {

    if (state) {
      this.domService.changeStyles([
        {
          name: ".dashboard-sidebar-container",
          styles: {
            "width": "15%"
          }
        },
        {
          name: ".sidebar-content",
          styles: {
            "display": "flex"
          }
        }
      ])

    } else {
      this.domService.changeStyles([
        {
          name: ".dashboard-sidebar-container",
          styles: {
            "width": "5%"
          }
        },
        {
          name: ".sidebar-content",
          styles: {
            "display": "none"
          }
        }
      ])
    }
  }

  public logout() {
    this.userService.logout();

    this.toast.success("Closing session", "Hey!")

    setTimeout(() => {
      this.router.navigate(['signin']);
    }, 2000)

  }

}
