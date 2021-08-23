import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public userLoginForm: FormGroup;

  constructor(private router: Router, private userService: UserService, private storageService: StorageService, private toast: ToastrService) { 

    this.userLoginForm = new FormGroup({
      username: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required
      ])
    })

  }

  ngOnInit(): void {
  }

  public signIn(): void {

    let credentials = {
      "username": this.userLoginForm.get('username')?.value,
      "password": this.userLoginForm.get('password')?.value
    }

    this.userService.login(credentials).subscribe({
      next: (res) => {
        if (res.status) {
          this.storageService.set('token', res.token);

          this.toast.success(`Welcome ${credentials.username}`, "Hey!");

          setTimeout(() => {
            this.router.navigate(['dashboard'])
          }, 2000);

        } else {
          this.toast.error(res.reason, "Something goes wrong :(")
        }
      },
      error: (err) => {
        alert(err)
      }
    })

  }

}
