import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { CustomerComponent } from './layout/main/customer/customer.component';
import { EmployeeComponent } from './layout/main/employee/employee.component';
import { NewEmployeeComponent } from './layout/main/employee/new-employee/new-employee.component';
import { ServiceComponent } from './layout/main/service/service.component';
import { BookinglistComponent } from './layout/main/booking/bookinglist/bookinglist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CustomerComponent,
    EmployeeComponent,
    NewEmployeeComponent,
    ServiceComponent,
    BookinglistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    SidebarModule,
    PasswordModule,
    ButtonModule,
    ToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelMenuModule,
    BreadcrumbModule,
    ChartModule,
    TableModule,
    HttpClientModule,
    AvatarModule,
    AvatarGroupModule,
    FileUploadModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
