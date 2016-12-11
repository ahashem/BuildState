import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dashboard-item-details',
  templateUrl: 'dashboard-item-details.component.html',
  styleUrls: ['dashboard-item-details.component.scss']
})
export class DashboardItemDetailsComponent implements OnInit {
  @Input() item;

  constructor() {
    console.log(this.item)
  }

  ngOnInit() {
  }

}
