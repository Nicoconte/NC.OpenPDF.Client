import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  @Input() isOpen: boolean = false;

  constructor(private router: Router, private userService: UserService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.setSidebarStylesByState(false); // Initial Styles (By default)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen = changes['isOpen'].currentValue;
  
    this.setSidebarStylesByState(this.isOpen);
  
  }
  
  //Change Every style from the array of HTML Elements
  //TODO: Create DomService and move this method
  private changeNodeStyles(elements: any[]) {

    elements.forEach(e => {

      let nodes = document.querySelectorAll<HTMLElement>(e['className']);
      let styleKeys = Object.keys(e['styles']); 

      nodes.forEach(n => {
        styleKeys.forEach(sk => {
          n.style.setProperty(sk, e['styles'][sk])
        })
      })

    })

  }

  public setSidebarStylesByState(state: boolean) {

    if (state) {
      this.changeNodeStyles([
        {
          className: ".dashboard-sidebar-container",
          styles: {
            "width": "15%"
          }
        },
        {
          className: ".sidebar-content",
          styles: {
            "display": "flex"
          }
        }
      ])

    } else {
      this.changeNodeStyles([
        {
          className: ".dashboard-sidebar-container",
          styles: {
            "width": "5%"
          }
        },
        {
          className: ".sidebar-content",
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
