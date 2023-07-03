import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss']
})
export class AddserviceComponent {
  items!: MenuItem[];

  home!: MenuItem;

  txtEmployeeName!:string;
  txtPassword!:string;
  txtConfomPassword!:string;
  txtFullName!:string;
  txtPhone!:string;
  txtEmail!:string;
  uploadedFile: any;
  constructor(private employeeService: AccountService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private messageService: MessageService) {

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
