import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { ServiceService } from 'src/app/service/service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  items!: MenuItem[];

  home!: MenuItem;

  datasource!: any[];
  constructor(private serviceService: ServiceService,
    private primengConfig: PrimeNGConfig,
    private router: Router) {

  }
  ngOnInit() {

    this.items = [
      { label: 'Service' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.serviceService.getserviceLarge().toPromise().then((result)=>{
      if(result!=undefined){
        this.datasource=result.data;
      } (err:HttpErrorResponse) => {
        if(err.status==401)
        this.router.navigate(['/login']);
      }
    });
  }
}
