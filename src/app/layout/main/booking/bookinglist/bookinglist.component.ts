import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { AccountService } from 'src/app/service/account/account.service';
import { BookingService } from 'src/app/service/booking/booking.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.scss'],
  providers: [MessageService]
})
export class BookinglistComponent {
  items!: MenuItem[];

  home!: MenuItem;

  datasource!: any[];

  emplist!: any[];
  checked!: boolean;
  bookingID!: any;
  constructor(private bookingService: BookingService,
    private accountService: AccountService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private messageService: MessageService) {

  }
  ngOnInit() {
    this.checked = false;
    this.items = [
      { label: 'Booking' },
      { label: 'List' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add Employee Success' });
    
    this.bookingService.getbookingLarge().toPromise().then((result) => {
      if (result.succeeded) {
        this.datasource = result.data;
      }}).catch((err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 401)
          this.router.navigate(['/login']);
        if (err.status == 400) {
          this.messageService.add({ severity: 'error', summary: 'Fail', detail: err.message});
        }
      });
  }
  getlistemp(id: number) {
    this.bookingID = id;
    this.bookingService.GetEmployee(id).toPromise().then((result) => {
      if (result.succeeded) {
        this.emplist = result.data;
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
  changecheckbox() {
    if (this.checked) {
      this.datasource = this.datasource.filter(value => value.statusBooking == 3);
    } else {
      this.bookingService.getbookingLarge().toPromise().then((result) => {
        if (result.succeeded) {
          this.datasource = result.data;
        } (err: HttpErrorResponse) => {
          if (err.status == 401)
            this.router.navigate(['/login']);
        }
      });
    }
  }
  addEmployee(empID: any) {
    this.bookingService.CreateTask(this.bookingID, empID).toPromise().then((result) => {
      if (result.succeeded) {
        this.datasource = result.data;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add Employee Success' });
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
  DoTask(id: any) {
    this.bookingService.DoTask(id).toPromise().then((result) => {
      if (result.succeeded) {
        this.datasource = result.data;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Do Task Successfull' });
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
