import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { EmployeeComponent } from './layout/main/employee/employee.component';
import { CustomerComponent } from './layout/main/customer/customer.component';
import { NewEmployeeComponent } from './layout/main/employee/new-employee/new-employee.component';
import { ServiceComponent } from './layout/main/service/service.component';
import { BookinglistComponent } from './layout/main/booking/bookinglist/bookinglist.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "employee",
    component: EmployeeComponent
  },
  {
    path: "customer",
    component: CustomerComponent
  },
  {
    path: "new-employee",
    component: NewEmployeeComponent
  },
  {
    path: "service",
    component: ServiceComponent
  },
  {
    path: "bookinglist",
    component: BookinglistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
