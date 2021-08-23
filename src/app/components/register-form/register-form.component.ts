import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private isChecked: boolean 

  public userRegisterForm: FormGroup;

  constructor(private router: Router, private userService: UserService, private storageService: StorageService, private toast: ToastrService) { 

    this.isChecked = false;

    this.userRegisterForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl("", [
        Validators.minLength(8)
      ])
    })

  }

  ngOnInit(): void { }


  onCheckboxChange(event: any) {
    this.isChecked = event.target.checked;
  }

  public isDisabled() {
    return String(this.userRegisterForm.get('username')?.value).length < 5 || String(this.userRegisterForm.get('password')?.value).length < 8 || !this.isChecked; 
  }

  public signUp(): void {

    const credentials = {
      username: this.userRegisterForm.get('username')?.value,
      password: this.userRegisterForm.get('password')?.value
    }

    this.userService.register(credentials).subscribe({
      next: res => {
        if (res.status) {
          this.storageService.set('token', res?.token);

          this.toast.success("User has been registered", "Good news!")

          setTimeout(() => {
            this.router.navigate(["dashboard"])
          }, 2000)

        } else {
          this.toast.error(res.reason, "Bad news :(")
        }
      },
      error: err => {
        alert(err)
      }
    })

  }

}
