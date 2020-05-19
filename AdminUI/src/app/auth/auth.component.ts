import { SharedService } from '../service/shared.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']  
})
export class AuthComponent implements OnInit {
    authFormGroup = new FormGroup({
    usernameFormControl: new FormControl('', {
      validators: Validators.required,
  }),
  passwordFormControl: new FormControl('', {
      validators: Validators.required,
  }),
  })

  constructor(private router: Router,private sharedService: SharedService, private authService: AuthService) { }

  ngOnInit(): void {}

  login() {
    if (!this.authFormGroup.valid) {
        this.sharedService.showMessage({
            content: 'Username and password is required !',
            title: 'Error',
            status: 'danger',
        })

        return
    }
    const { usernameFormControl, passwordFormControl } = this.authFormGroup.getRawValue()

    this.authService.login(usernameFormControl, passwordFormControl).subscribe(
        (res) => {
            const {
                data: { user },
            } = res
            if (res.code === 1) {
                this.sharedService.showMessage({
                    content: 'Username or password is incorrect or User does not exist',
                    title: 'Error',
                    status: 'danger',
                })

                return
            }

            if (res.code === 0) {
                this.sharedService.showMessage({
                    content: 'Login successfully',
                    title: 'Success',
                    status: 'primary',
                })
            }

            this.authService.setUser = user

            this.authService.goHome()
        },
        (err) => {
            if (err.status === 401) {
                this.sharedService.showMessage({
                    content: 'Unauthorized User or User does not exist',
                    title: 'Error',
                    status: 'danger',
                })
            }
        }
    )
}

}
