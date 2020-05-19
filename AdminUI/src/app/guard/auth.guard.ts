import { detectIE } from './../../common/detectIE';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core'
import { CanActivate, Router, CanLoad } from '@angular/router'

import { map, tap } from 'rxjs/operators'


@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
    version = detectIE()
    constructor(private router: Router, private authService: AuthService) {}

    canActivate() {
        if (this.version === false) {
            return this.authService.isLoggedIn().pipe(
                map((user) => !!user),
                tap((result) => {
                    if (!result) {
                        this.authService.goLogin()
                    }
                })
            )
        }
    }

    canLoad() {
        if (this.version === false) {
            return this.authService.isLoggedIn().pipe(
                map((user) => !!user),
                tap((result) => {
                    if (!result) {
                        this.authService.goLogin()
                    }
                })
            )
        }
    }
}
