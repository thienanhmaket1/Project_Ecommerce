import { RegisterService } from './register.service';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup = new FormGroup({
    usernameFormControl: new FormControl('', {
        validators: Validators.required,
    }),
    passwordFormControl: new FormControl('', {
        validators: Validators.required,
    }),
    fullnameFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
    phoneFormControl: new FormControl(''),
})
  constructor(private router: Router, private toastService: NbToastrService, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerFormGroup)
    if (!this.registerFormGroup.valid) {
      console.log('test')
        this.toastService.show('Username and password is required !', 'Error', {
            status: 'danger',
            position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
        })
        return
    }

    const {
        usernameFormControl,
        passwordFormControl,
        fullnameFormControl,
        emailFormControl,
        phoneFormControl,
    } = this.registerFormGroup.getRawValue()
    const obj = {
        user_username: usernameFormControl,
        user_password: passwordFormControl,
        user_fullname: fullnameFormControl,
        user_email: emailFormControl,
        user_phone: phoneFormControl,
    }
    console.log(obj)
    this.registerService.register(obj).subscribe(
        (res) => {
            if (res.code === 0) {
                this.toastService.show(`Create successfully`, 'Success', {
                    status: 'primary',
                    position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
                })
            }
            if (res.code === 5) {
                this.toastService.show(`User already exists`, 'Error', {
                    status: 'danger',
                    position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
                })
            }
            this.router.navigate(['auth'])
        },
        (err) => {}
    )
}

}
