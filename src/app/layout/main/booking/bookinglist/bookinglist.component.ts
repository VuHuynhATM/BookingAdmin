import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { BookingService } from 'src/app/service/booking/booking.service';
import { ServiceService } from 'src/app/service/service/service.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.scss']
})
export class BookinglistComponent {
  items!: MenuItem[];

  home!: MenuItem;

  datasource!: any[];

  emplist!:any[];
  checked!:boolean;
  constructor(private bookingService: BookingService,
    private primengConfig: PrimeNGConfig,
    private router: Router) {

  }
  ngOnInit() {
    this.checked=false;
    this.items = [
      { label: 'Booking' },
      { label: 'List' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.bookingService.getbookingLarge().toPromise().then((result)=>{
      if(result!=undefined){
        this.datasource=result.data;
      } (err:HttpErrorResponse) => {
        if(err.status==401)
        this.router.navigate(['/login']);
      }
    });
  }
  getlistemp(id:number){
    this.datasource.forEach(value => {
      if(value.bookingId==id){
        this.emplist=value.tblBookingEmps
      }
    });
  }
  changecheckbox(){
    if(this.checked){
      this.datasource=this.datasource.filter(value=>value.statusBooking==3);
    }else{
      this.bookingService.getbookingLarge().toPromise().then((result)=>{
        if(result!=undefined){
          this.datasource=result.data;
        } (err:HttpErrorResponse) => {
          if(err.status==401)
          this.router.navigate(['/login']);
        }
      });
    }
  }
}