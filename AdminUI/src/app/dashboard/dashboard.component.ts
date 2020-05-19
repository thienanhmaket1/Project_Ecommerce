import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';
import { state, animate, trigger, style, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('openClose', [
        // ...
        state(
            'open',
            style({
                width: '300px',
            })
        ),
        state(
            'closed',
            style({
                width: 'auto',
            })
        ),
        transition('open => closed', [animate('0.01s')]),
        transition('closed => open', [animate('0.01s')]),
    ]),
],
})
export class DashboardComponent implements OnInit {
  menuStatus

  constructor(private sharedService: SharedService) {
    this.sharedService.getMenuStatus().subscribe((res) => {
        this.menuStatus = res
    })
}


  ngOnInit(): void {
  }

}
