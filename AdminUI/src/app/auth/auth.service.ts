import { allAPI } from './../../common/api';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: BehaviorSubject<object> = new BehaviorSubject<object>(null)
    public api = environment.server
    private headers: any = new HttpHeaders()

    constructor(private http: HttpClient, private router: Router) {}

    public set setUser(v) {
      this.user.next(v)
  }

  public get getUser(): any {
      return this.user
  }

  public get getUserValue(): any {
      return this.user.value
  }

  login(user_username: string, user_password: string) {
      return this.http.post<any>(allAPI.authen_login, { user_username, user_password })
  }

  logout(willNavigate = false) {
    this.setUser = null
    if (willNavigate) {
        this.goLogin()
    }

    return false
}

isLoggedIn() {
    if (!!this.getUserValue) {
        return this.user
    }
}

goLogin() {
    this.router.navigate(['/auth'])
}

goHome() {
    this.router.navigate(['/dashboard'])
}

}
