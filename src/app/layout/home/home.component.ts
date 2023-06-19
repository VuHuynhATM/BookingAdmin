import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items!: MenuItem[];

  home!: MenuItem;

  cusData!: any;

  cusOptions!: any;
  ngOnInit() {

    this.cusData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          }
      ]
  };

    this.items = [
      { label: 'Dashboard' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }
}
