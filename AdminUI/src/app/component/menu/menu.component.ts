import { defaultTopItems, defaultBottomItems, adminItems } from './../../../common/constants';
import { SharedService } from './../../service/shared.service';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    
  menuStatus
  adminItems: NbMenuItem[] = adminItems
  items = []

  constructor(private nbMenuService: NbMenuService, private router: Router, private authService: AuthService, private sharedService: SharedService) { 
    this.sharedService.getMenuStatus().subscribe((res) => {
        this.menuStatus = res
    })
    this.nbMenuService.onItemClick().subscribe((res: any) => {
        const {
            item: { id },
        } = res

        if (id === 'log_out') {
            this.authService.logout(true)
        }
    })

    this.changeToNormalMode() 
  }

  changeToNormalMode() {
    // const { user_id } = this.authService.getUserValue
    this.items = adminItems
    this.items = [...defaultTopItems, ...this.items, ...defaultBottomItems]
    this.sharedService.setMenuStatus('normal')

}

changeToMiniMode() {
    let newItems = []
    this.items.forEach((e) => {
        const hasChildren = !!e.children
        if (hasChildren) {
            const newChildren = e.children.map((e1) => {
                return {
                    ...e1,
                    title: '',
                }
            })
            newItems = newItems.concat(newChildren)
            return
        }

        newItems.push({
            ...e,
            title: '',
        })
    })

    this.items = newItems

    this.sharedService.setMenuStatus('mini')
}

  ngOnInit(): void {
  }

}
