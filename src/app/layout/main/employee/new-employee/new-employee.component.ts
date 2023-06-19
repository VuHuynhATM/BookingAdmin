import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent {
  items!: MenuItem[];

  home!: MenuItem;
  constructor(private employeeService: AccountService,
    private primengConfig: PrimeNGConfig,
    private router: Router) {

  }
  ngOnInit() {

    this.items = [
      { label: 'Account' },
      { label: 'Employee',routerLink:'/employee'},
      { label: 'New-Employee' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }
}
