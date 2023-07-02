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
  AddEmployee(event: any){
    if(this.txtPassword==undefined){
      this.messageService.add({severity:'warn', summary: 'Warn', detail: 'password'});
      return;
    }
    if(this.txtConfomPassword==undefined){
      this.messageService.add({severity:'warn', summary: 'Warn', detail: 'password'});
      return;
    }
    if(this.txtConfomPassword != this.txtPassword){
      this.messageService.add({severity:'warn', summary: 'Warn', detail: 'password'});
      return;
    }
    for (let file of event.files) {
      this.uploadedFile = file;
    }
    this.employeeService.AddEmployee(this.uploadedFile, this.txtEmployeeName,this.txtPassword,this.txtFullName,this.txtPhone,this.txtEmail).toPromise().then((result) => {
      if (result.succeeded) {
        this.router.navigate(['/employee']);
      } else {
        this.messageService.add({ severity: 'warn', summary: 'Thông báo', detail: result.message });
      }
    }).catch((err: HttpErrorResponse) => {
      console.log(err);
      if (err.status == 401)
        this.router.navigate(['/login']);
      if (err.status == 400) {
        this.messageService.add({ severity: 'error', summary: 'Fail', detail: err.message});
      }
    });
  }
}
